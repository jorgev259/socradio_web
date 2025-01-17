import * as Token from 'token-types';
/**
 * Common interface for the common chunk DSD header
 */
export interface IChunkHeader {
    /**
     * Chunk ID
     */
    id: string;
    /**
     * Chunk size
     */
    size: number;
}
/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
export declare const ChunkHeader: Token.IGetToken<IChunkHeader>;
/**
 * Interface to DSD payload chunk
 */
export interface IDsdChunk {
    /**
     * Total file size
     */
    fileSize: number;
    /**
     * If Metadata doesn’t exist, set 0. If the file has ID3v2 tag, then set the pointer to it.
     * ID3v2 tag should be located in the end of the file.
     */
    metadataPointer: number;
}
/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
export declare const DsdChunk: Token.IGetToken<IDsdChunk>;
export declare enum ChannelType {
    mono = 1,
    stereo = 2,
    channels = 3,
    quad = 4,
    '4 channels' = 5,
    '5 channels' = 6,
    '5.1 channels' = 7
}
/**
 * Interface to format chunk payload chunk
 */
export interface IFormatChunk {
    /**
     * Version of this file format
     */
    formatVersion: number;
    /**
     * Format ID
     */
    formatID: number;
    /**
     * Channel Type
     */
    channelType: ChannelType;
    /**
     * Channel num
     */
    channelNum: number;
    /**
     * Sampling frequency
     */
    samplingFrequency: number;
    /**
     * Bits per sample
     */
    bitsPerSample: number;
    /**
     * Sample count
     */
    sampleCount: number;
    /**
     * Block size per channel
     */
    blockSizePerChannel: number;
}
/**
 * Common chunk DSD header: the 'chunk name (Four-CC)' & chunk size
 */
export declare const FormatChunk: Token.IGetToken<IFormatChunk>;
