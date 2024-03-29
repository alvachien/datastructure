/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Formula.ts
 *
 * Formula definition as well as calculation, using stack
 * Math Expression Parser
 *
 */
import { SequenceList, BinaryTree } from '../model';
/**
 * Basic formula operator
 */
export declare enum FormulaOperatorEnum {
    Add = 0,
    Sub = 1,
    Multi = 2,
    Div = 3
}
/**
 * Formula operator
 */
export declare class FormulaOperator {
    private optype;
    private opnumber;
    constructor(typ: FormulaOperatorEnum, opnum: number);
    get OperatorType(): FormulaOperatorEnum;
    get OperatorNumber(): number;
}
/**
 * Formula Operator: Add
 */
export declare class FormulaOperatorAddition extends FormulaOperator {
    constructor();
}
/**
 * Formula Operator: Subtract
 */
export declare class FormulaOperationSbbtraction extends FormulaOperator {
    constructor();
}
/**
 * Formula Operator: Multipy
 */
export declare class FormulaOperationMultiplication extends FormulaOperator {
    constructor();
}
/**
 * Formula Operator: Divide
 */
export declare class FormulaOperationDivision extends FormulaOperator {
    constructor();
}
/**
 * Keyword in Formula
 */
export declare const FormulaKeyword: string[];
/**
 * Paremter in Formula
 */
export declare class FormulaParameter {
    private _par;
    get Parameter(): string;
    set Parameter(par: string);
}
/**
 * Token enum
 */
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
    PI = 21
}
/**
 * Token
 */
export declare class FormulaToken {
    private _tokenEnum;
    get TokenEnum(): FormulaTokenEnum;
    set TokenEnum(te: FormulaTokenEnum);
    private _varName;
    get VariableName(): string;
    set VariableName(vn: string);
}
/**
 * Formula Parser
 */
export declare class FormulaParser {
    private _orgInput;
    private _listInput;
    constructor();
    init(input: string): boolean;
    /**
     * Infix to Postfix
     */
    infixToPostfix(listStrings: SequenceList<string>): BinaryTree<string>;
    private parse;
    private operatorPriority;
    private cal;
    evaulate(): number;
}
