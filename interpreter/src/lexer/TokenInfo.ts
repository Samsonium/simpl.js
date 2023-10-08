/**
 * Token reference data
 */
export default interface TokenInfo {

    /** Expression to match token */
    match: RegExp;

    /** Additional info that copies into token class as is */
    metadata?: Record<string, any>;

    /** Should Lexer save value in token class */
    valueRequired?: boolean;
}
