"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Token = require("token-types");
const Util_1 = require("../../common/Util");
/**
 * BASIC STRUCTURE
 */
exports.Header = {
    len: 6 * 4,
    get: (buf, off) => {
        const header = {
            // word 0
            signature: buf.toString("binary", off, off + 3),
            // versionIndex number * 1000 (3.81 = 3810) (remember that 4-byte alignment causes this to take 4-bytes)
            streamMinorVersion: Util_1.default.getBitAllignedNumber(buf, off + 3, 0, 4),
            streamMajorVersion: Util_1.default.getBitAllignedNumber(buf, off + 3, 4, 4),
            // word 1
            frameCount: Token.UINT32_LE.get(buf, off + 4),
            // word 2
            maxLevel: Token.UINT16_LE.get(buf, off + 8),
            sampleFrequency: [44100, 48000, 37800, 32000][Util_1.default.getBitAllignedNumber(buf, off + 10, 0, 2)],
            link: Util_1.default.getBitAllignedNumber(buf, off + 10, 2, 2),
            profile: Util_1.default.getBitAllignedNumber(buf, off + 10, 4, 4),
            maxBand: Util_1.default.getBitAllignedNumber(buf, off + 11, 0, 6),
            intensityStereo: Util_1.default.isBitSet(buf, off + 11, 6),
            midSideStereo: Util_1.default.isBitSet(buf, off + 11, 7),
            // word 3
            titlePeak: Token.UINT16_LE.get(buf, off + 12),
            titleGain: Token.UINT16_LE.get(buf, off + 14),
            // word 4
            albumPeak: Token.UINT16_LE.get(buf, off + 16),
            albumGain: Token.UINT16_LE.get(buf, off + 18),
            // word
            lastFrameLength: (Token.UINT32_LE.get(buf, off + 20) >>> 20) & 0x7FF,
            trueGapless: Util_1.default.isBitSet(buf, off + 23, 0)
        };
        header.lastFrameLength = header.trueGapless ? (Token.UINT32_LE.get(buf, 20) >>> 20) & 0x7FF : 0;
        return header;
    }
};
//# sourceMappingURL=StreamVersion7.js.map