import Lexer from '../src/lexer/Lexer';
import samples from './samples';
import {describe, test, expect} from 'vitest';

describe('Lexer', () => {
    test('Samples.Simple', () => {
        const result = new Lexer(samples.simple).analyze();
        expect(result).toHaveLength(6);
        expect(result[0]).toSatisfy<{ name: string }>(v => v.name === 'IO_Output');
        expect(result[1]).toSatisfy<{ name: string }>(v => v.name === 'Parens_Start');
        expect(result[2]).toSatisfy<{ name: string }>(v => v.name === 'Data_String');
        expect(result[2]).toSatisfy<{ value: string }>(v => v.value === 'Hello, World!');
        expect(result[3]).toSatisfy<{ name: string }>(v => v.name === 'Parens_End');
        expect(result[4]).toSatisfy<{ name: string }>(v => v.name === 'Semi');
        expect(result[5]).toSatisfy<{ name: string }>(v => v.name === 'EOF');
    });
});
