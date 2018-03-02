export declare enum FormulaOperatorEnum {
    Add = 0,
    Sub = 1,
    Multi = 2,
    Div = 3,
}
export declare class FormulaOperator {
    private optype;
    private opnumber;
    constructor(typ: FormulaOperatorEnum, opnum: number);
    readonly OperatorType: FormulaOperatorEnum;
    readonly OperatorNumber: number;
}
export declare class FormulaOperatorAddition extends FormulaOperator {
    constructor();
}
export declare class FormulaOperationSbbtraction extends FormulaOperator {
    constructor();
}
export declare class FormulaOperationMultiplication extends FormulaOperator {
    constructor();
}
export declare class FormulaOperationDivision extends FormulaOperator {
    constructor();
}
export declare const FormulaKeyword: string[];
export declare class FormulaParameter {
    private _par;
    Parameter: string;
}
export declare enum FormulaTokenEnum {
    Add = 0,
    Sub = 1,
    Multi = 2,
    Div = 3,
    Equal = 4,
    LessThan = 5,
    GreatThean = 6,
    LessEqual = 7,
    GreatEqual = 8,
    OpenParenthesis = 9,
    CloseParenthesis = 10,
    Variable = 11,
    Digit = 12,
    PI = 21,
}
export declare class FormulaToken {
    private _tokenEnum;
    TokenEnum: FormulaTokenEnum;
    private _varName;
    VariableName: string;
}
export declare class FormulaParser {
    private _orgInput;
    constructor();
    init(input: string): void;
    private parse();
}
