"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FourCC_1 = require("../common/FourCC");
/**
 * Common AIFF chunk header
 */
exports.Header = {
    len: 8,
    get: (buf, off) => {
        return {
            // Chunk type ID
            chunkID: FourCC_1.FourCcToken.get(buf, off),
            // Chunk size
            chunkSize: buf.readUInt32BE(off + 4)
        };
    }
};
//# sourceMappingURL=index.js.map