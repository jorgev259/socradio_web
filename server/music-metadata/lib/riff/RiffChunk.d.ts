import * as Token from 'token-types';
import { IChunkHeader } from '../iff';
export { IChunkHeader } from '../iff';
/**
 * Common RIFF chunk header
 */
export declare const Header: Token.IGetToken<IChunkHeader>;
/**
 * Token to parse RIFF-INFO tag value
 */
export declare class ListInfoTagValue implements Token.IGetToken<string> {
    private tagHeader;
    len: number;
    constructor(tagHeader: IChunkHeader);
    get(buf: any, off: any): string;
}
