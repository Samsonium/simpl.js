import TokenInfo from './TokenInfo';

/**
 * Records with available tokens in language
 */
const tokenMap: Record<string, TokenInfo> = {

    // ------- [ Reserved words ]

    'DataType': {
        match: /^(str|num|bool|obj)/,
        valueRequired: true
    },

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

    // ------- [ Dynamic ]

    'Data_String':  {
        match: /^"([^"]*)"|^'([^']*)'/,
        valueRequired: true
    },
    'Data_Number':  {
        match: /^([+-]?([0-9]*[.])?[0-9]+)/,
        valueRequired: true
    },
    'Data_Boolean': {
        match: /^(true|false)/,
        valueRequired: true
    },

    // Blocks
    'Block_Start':    { match: /^(\{)/ },
    'Block_End':      { match: /^(})/ },
    'Parens_Start':   { match: /^(\()/ },
    'Parens_End':     { match: /^(\))/ },
    'Brackets_Start': { match: /^(\[)/ },
    'Brackets_End':   { match: /^(])/ },

    'Semi': { match: /^(;)/ },

    'Word': {
        match: /^([A-z$_][A-z0-9$_]*)/,
        valueRequired: true
    }
};
export default tokenMap;
