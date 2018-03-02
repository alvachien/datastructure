/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: RPN.ts
 * Contains the logic for Revers Polish Notation
 *
 */
export declare const RPNOperators: string[];
/**
 * Get the priority of the operators
 * @param operator The inputted operator
 */
export declare function RPNOperationPriority(operator: string): number;
/**
 * Workout the result based on the operator
 * @param x Previous element
 * @param y Next element
 * @param operator The operator
 */
export declare function RPNGetOperatorResult(x: number, y: number, operator: any): number;
/**
 * Workout the result for string with RPN format
 * @param strinputs String with RPN format, like '34+', it returns 7
 * Note:
 * 1) it only accept the inputs with PRN format; and
 * 2) it doesn't support '(' and ')', and
 * 3) it won't care of priority, for instance: '34+5*' will get 35 not 23 (3+4*5=23)
 */
export declare function rpn1(strinputs: string): any;
/**
 * Class for RPN
 */
export declare class RPN {
    private _arInputs;
    readonly InputArray: any[];
    constructor();
    /**
     * Save to string
     */
    toString(): string;
    /**
     * Build the express to PRN format
     * @param exp Express string, like 3*(4+5)
     */
    buildExpress(exp: string): string;
    /**
     * Workout the final result
     */
    WorkoutResult(): number;
    VerifyResult(allowNegative: boolean, allowDecimal: boolean): boolean;
}
