/// <reference types="node" />
import { IRandomReader } from '../type';
/**
 * Provides abstract Node Buffer access via the IRandomRead interface
 */
export declare class RandomBufferReader implements IRandomReader {
    private readonly buf;
    readonly fileSize: number;
    constructor(buf: Buffer);
    /**
     * Read from a given position of an abstracted file or buffer.
     * @param buffer {Buffer} is the buffer that the data will be written to.
     * @param offset {number} is the offset in the buffer to start writing at.
     * @param length {number}is an integer specifying the number of bytes to read.
     * @param position {number} is an argument specifying where to begin reading from in the file.
     * @return {Promise<number>} bytes read
     */
    randomRead(buffer: Buffer, offset: number, length: number, position: number): Promise<number>;
}
