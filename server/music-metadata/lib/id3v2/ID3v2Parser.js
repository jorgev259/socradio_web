"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token = require("token-types");
const Util_1 = require("../common/Util");
const FrameParser_1 = require("./FrameParser");
const ID3v2Token_1 = require("./ID3v2Token");
class ID3v2Parser {
    static removeUnsyncBytes(buffer) {
        let readI = 0;
        let writeI = 0;
        while (readI < buffer.length - 1) {
            if (readI !== writeI) {
                buffer[writeI] = buffer[readI];
            }
            readI += (buffer[readI] === 0xFF && buffer[readI + 1] === 0) ? 2 : 1;
            writeI++;
        }
        if (readI < buffer.length) {
            buffer[writeI++] = buffer[readI];
        }
        return buffer.slice(0, writeI);
    }
    static readFrameHeader(v, majorVer) {
        let header;
        switch (majorVer) {
            case 2:
                header = {
                    id: v.toString('ascii', 0, 3),
                    length: Token.UINT24_BE.get(v, 3)
                };
                break;
            case 3:
                header = {
                    id: v.toString('ascii', 0, 4),
                    length: Token.UINT32_BE.get(v, 4),
                    flags: ID3v2Parser.readFrameFlags(v.slice(8, 10))
                };
                break;
            case 4:
                header = {
                    id: v.toString('ascii', 0, 4),
                    length: ID3v2Token_1.UINT32SYNCSAFE.get(v, 4),
                    flags: ID3v2Parser.readFrameFlags(v.slice(8, 10))
                };
                break;
            default:
                throw new Error('Unexpected majorVer: ' + majorVer);
        }
        return header;
    }
    static getFrameHeaderLength(majorVer) {
        switch (majorVer) {
            case 2:
                return 6;
            case 3:
            case 4:
                return 10;
            default:
                throw new Error('header versionIndex is incorrect');
        }
    }
    static readFrameFlags(b) {
        return {
            status: {
                tag_alter_preservation: Util_1.default.strtokBITSET.get(b, 0, 6),
                file_alter_preservation: Util_1.default.strtokBITSET.get(b, 0, 5),
                read_only: Util_1.default.strtokBITSET.get(b, 0, 4)
            },
            format: {
                grouping_identity: Util_1.default.strtokBITSET.get(b, 1, 7),
                compression: Util_1.default.strtokBITSET.get(b, 1, 3),
                encryption: Util_1.default.strtokBITSET.get(b, 1, 2),
                unsynchronisation: Util_1.default.strtokBITSET.get(b, 1, 1),
                data_length_indicator: Util_1.default.strtokBITSET.get(b, 1, 0)
            }
        };
    }
    static readFrameData(buf, frameHeader, majorVer, includeCovers) {
        switch (majorVer) {
            case 2:
                return FrameParser_1.default.readData(buf, frameHeader.id, majorVer, includeCovers);
            case 3:
            case 4:
                if (frameHeader.flags.format.unsynchronisation) {
                    buf = ID3v2Parser.removeUnsyncBytes(buf);
                }
                if (frameHeader.flags.format.data_length_indicator) {
                    buf = buf.slice(4, buf.length);
                }
                return FrameParser_1.default.readData(buf, frameHeader.id, majorVer, includeCovers);
            default:
                throw new Error('Unexpected majorVer: ' + majorVer);
        }
    }
    /**
     * Create a combined tag key, of tag & description
     * @param {string} tag e.g.: COM
     * @param {string} description e.g. iTunPGAP
     * @returns {string} e.g. COM:iTunPGAP
     */
    static makeDescriptionTagName(tag, description) {
        return tag + (description ? ':' + description : '');
    }
    async parse(metadata, tokenizer, options) {
        this.tokenizer = tokenizer;
        this.metadata = metadata;
        this.options = options;
        const id3Header = await this.tokenizer.readToken(ID3v2Token_1.ID3v2Header);
        if (id3Header.fileIdentifier !== 'ID3') {
            throw new Error("expected ID3-header file-identifier 'ID3' was not found");
        }
        this.id3Header = id3Header;
        this.headerType = ('ID3v2.' + id3Header.version.major);
        if (id3Header.flags.isExtendedHeader) {
            return this.parseExtendedHeader();
        }
        else {
            return this.parseId3Data(id3Header.size);
        }
    }
    async parseExtendedHeader() {
        const extendedHeader = await this.tokenizer.readToken(ID3v2Token_1.ExtendedHeader);
        const dataRemaining = extendedHeader.size - ID3v2Token_1.ExtendedHeader.len;
        if (dataRemaining > 0) {
            return this.parseExtendedHeaderData(dataRemaining, extendedHeader.size);
        }
        else {
            return this.parseId3Data(this.id3Header.size - extendedHeader.size);
        }
    }
    async parseExtendedHeaderData(dataRemaining, extendedHeaderSize) {
        const buffer = Buffer.alloc(dataRemaining);
        await this.tokenizer.readBuffer(buffer, 0, dataRemaining);
        return this.parseId3Data(this.id3Header.size - extendedHeaderSize);
    }
    async parseId3Data(dataLen) {
        const buffer = Buffer.alloc(dataLen);
        await this.tokenizer.readBuffer(buffer, 0, dataLen);
        for (const tag of this.parseMetadata(buffer)) {
            if (tag.id === 'TXXX') {
                for (const text of tag.value.text) {
                    this.addTag(ID3v2Parser.makeDescriptionTagName(tag.id, tag.value.description), text);
                }
            }
            else if (tag.id === 'COM') {
                for (const value of tag.value) {
                    this.addTag(ID3v2Parser.makeDescriptionTagName(tag.id, value.description), value.text);
                }
            }
            else if (Array.isArray(tag.value)) {
                for (const value of tag.value) {
                    this.addTag(tag.id, value);
                }
            }
            else {
                this.addTag(tag.id, tag.value);
            }
        }
    }
    addTag(id, value) {
        this.metadata.addTag(this.headerType, id, value);
    }
    parseMetadata(data) {
        let offset = 0;
        const tags = [];
        while (true) {
            if (offset === data.length)
                break;
            const frameHeaderLength = ID3v2Parser.getFrameHeaderLength(this.id3Header.version.major);
            if (offset + frameHeaderLength > data.length) {
                // ToDo: generate WARNING: Illegal ID3v2-tag-length
                break;
            }
            const frameHeaderBytes = data.slice(offset, offset += frameHeaderLength);
            const frameHeader = ID3v2Parser.readFrameHeader(frameHeaderBytes, this.id3Header.version.major);
            // Last frame. Check first char is a letter, bit of defensive programming
            if (frameHeader.id === '' || frameHeader.id === '\u0000\u0000\u0000\u0000' ||
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(frameHeader.id[0]) === -1) {
                // ToDo: generate WARNING
                break;
            }
            const frameDataBytes = data.slice(offset, offset += frameHeader.length);
            const values = ID3v2Parser.readFrameData(frameDataBytes, frameHeader, this.id3Header.version.major, !this.options.skipCovers);
            tags.push({ id: frameHeader.id, value: values });
        }
        return tags;
    }
}
exports.ID3v2Parser = ID3v2Parser;
//# sourceMappingURL=ID3v2Parser.js.map