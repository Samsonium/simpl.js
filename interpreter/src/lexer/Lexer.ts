import Token from './Token';
import tokenMap from './tokenMap';

/**
 * Lexing analysis class
 */
export default class Lexer {

    /** Final list of tokens */
    private readonly tokens: Token[];

    /** Program code and his length */
    private readonly program: string;

    /** Actual reading position */
    private position: number;

    public constructor(program: string) {
        this.tokens = [];
        this.program = program;
        this.position = 0;
    }

    /** Begin source code analysis */
    public analyze(): Token[] {
        while (!this.isLastEOF)
            this.parseNext();

        return this.tokens;
    }

    /** Advances to the next position until a non-space character is found */
    private skipSpaces(): void {
        const result = /\S/.exec(this.program.substring(this.position));
        if (!result || result.index === -1)
            this.tokens.push(new Token('EOF'));
        else this.position += result.index;
    }

    /** Try to find next token */
    private parseNext(): void {
        this.skipSpaces();
        if (this.isLastEOF)
            return;

        const curProgramPart = this.program.substring(this.position);
        for (const name in tokenMap) {
            if (!tokenMap[name].match.test(curProgramPart))
                continue;

            const token = tokenMap[name];
            const matchData = token.match.exec(curProgramPart);
            this.position += matchData.index + matchData[0].length;

            this.tokens.push(new Token(name, token.valueRequired ? matchData[1] ?? matchData[2] : undefined));
            return;
        }

        throw `Unexpected character at position ${this.position}:\n  >>> ${curProgramPart.substring(0, 16)}`;
    }

    /** Is the last token is EOF */
    private get isLastEOF(): boolean {
        return this.tokens[this.tokens.length - 1]?.name === 'EOF';
    }
}
