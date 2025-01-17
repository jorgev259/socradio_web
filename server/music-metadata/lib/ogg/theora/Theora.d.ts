import * as Token from 'token-types';
/**
 * 6.2 Identification Header
 * Ref: https://theora.org/doc/Theora.pdf: 6.2 Identification Header Decode
 */
export interface IIdentificationHeader {
    id: string;
    vmaj: number;
    vmin: number;
    vrev: number;
    vmbw: number;
    vmbh: number;
    nombr: number;
    nqual: number;
}
/**
 * 6.2 Identification Header
 * Ref: https://theora.org/doc/Theora.pdf: 6.2 Identification Header Decode
 */
export declare const IdentificationHeader: Token.IGetToken<IIdentificationHeader>;
