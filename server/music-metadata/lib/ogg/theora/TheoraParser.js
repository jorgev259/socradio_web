"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initDebug = require("debug");
const Theora_1 = require("./Theora");
const debug = initDebug('music-metadata:parser:ogg:theora');
/**
 * Ref:
 *   https://theora.org/doc/Theora.pdf
 */
class TheoraParser {
    constructor(metadata, options, tokenizer) {
        this.metadata = metadata;
        this.tokenizer = tokenizer;
    }
    /**
     * Vorbis 1 parser
     * @param header Ogg Page Header
     * @param pageData Page data
     */
    parsePage(header, pageData) {
        if (header.headerType.firstPage) {
            this.parseFirstPage(header, pageData);
        }
    }
    flush() {
        debug('flush');
    }
    /**
     * Parse first Theora Ogg page. the initial identification header packet
     * @param {IPageHeader} header
     * @param {Buffer} pageData
     */
    parseFirstPage(header, pageData) {
        debug('First Ogg/Theora page');
        this.metadata.setFormat('codec', 'Theora');
        const idHeader = Theora_1.IdentificationHeader.get(pageData, 0);
        this.metadata.setFormat('bitrate', idHeader.nombr);
    }
}
exports.TheoraParser = TheoraParser;
//# sourceMappingURL=TheoraParser.js.map