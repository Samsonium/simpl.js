const samples = {
    simple: `
        write('Hello, World!');
    `,
    input: `
        str name = prompt('Write your name: ');
        write(name);
    `,
    calculator: `
        Map<str, fn<num>> operations = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
            '%': (a, b) => a % b,
            '^': (a, b) => a ^ b
        };
        
        num a = prompt('x: ') -> try int;
        num b = prompt('y: ') -> try int;
        
        if (!a || !b) {
            write('Non-integer values are provided');
            return;
        }
        
        str op;
        do op = prompt('Operation (+, -, *, /, %, ^): ');
        while (!operations.has(op));
        
        write(operations[op](a, b));
    `
};
export default samples;
