import TokenInfo from './TokenInfo';

/**
 * Records with available tokens in language
 */
const tokenMap: Record<string, TokenInfo> = {

    // ------- [ Reserved words ]

    // Input-output
    'IO_Input':  { match: /^(prompt)/ },
    'IO_Output': { match: /^(write)/ },

    // Cycles
    'Cyc_For':   { match: /^(for)/ },
    'Cyc_While': { match: /^(while)/ },
    'Cyc_Do':    { match: /^(do)/ },

    // Conditional
    'Con_If':   { match: /^(if)/ },
    'Con_Else': { match: /^(else)/ },

    // Conditional operators
    'Con_Eq':   { match: /^(==)/ },
    'Con_GtEq': { match: /^(>=)/ },
    'Con_LtEq': { match: /^(<=)/ },
    'Con_Gt':   { match: /^(>)/ },
    'Con_Lt':   { match: /^(<)/ },
    'Con_NEq':  { match: /^(!=)/ },
    'Con_And':  { match: /^(&&)/ },
    'Con_Or':   { match: /^(\|\|)/ },

    // Assignment operators
    'Asn_Eq':  { match: /^(=)/ },
    'Asn_Add': { match: /^(\+=)/ },
    'Asn_Sub': { match: /^(-=)/ },
    'Asn_Mul': { match: /^(\*=)/ },
    'Asn_Div': { match: /^(\/)/ },
    'Asn_Mod': { match: /^(%=)/ },
    'Asn_Pow': { match: /^(\^=)/ },

    // Math operators
    'Math_Add': { match: /^(\+)/ },
    'Math_Sub': { match: /^(-)/ },
    'Math_Mul': { match: /^(\*)/ },
    'Math_Div': { match: /^(\/)/ },
    'Math_Mod': { match: /^(%)/ },
    'Math_Pow': { match: /^(\^)/ },

    // Unary operators
    'U_Not':   { match: /^(!)/ },
    'U_Plus':  { match: /^(\+)/ },
    'U_Minus': { match: /^(-)/ },

    // Type casting feature
    'TypeCast': { match: /^(->)/ },

    // Blocks
    'Block_Start':    { match: /^(\{)/ },
    'Block_End':      { match: /^(})/ },
    'Parens_Start':   { match: /^(\()/ },
    'Parens_End':     { match: /^(\))/ },
    'Brackets_Start': { match: /^(\[)/ },
    'Brackets_End':   { match: /^(])/ },

    // Support characters
    'Dot':   { match: /^(\.)/ },
    'Comma': { match: /^(,)/ },
    'Semi':  { match: /^(;)/ },
    'Colon': { match: /^(:)/ },
    'Arrow': { match: /^(=>)/ },

    // ------- [ Dynamic ]

    'DataType': {
        match: /^(str|num|bool|obj|fn)/,
        valueRequired: true
    },

    'Data_String':  {
        match: /^"([^"]*)"|^'([^']*)'/,
        valueRequired: true
    },
    'Data_Number':  {
        match: /^(([0-9]*[.])?[0-9]+)/,
        valueRequired: true
    },
    'Data_Boolean': {
        match: /^(true|false)/,
        valueRequired: true
    },

    'Word': {
        match: /^([A-Za-z$_][A-Za-z0-9$_]*)/,
        valueRequired: true
    }
};
export default tokenMap;
