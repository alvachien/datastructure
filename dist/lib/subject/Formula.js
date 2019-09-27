/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Formula.ts
 * Formula definition as well as calculation, using stack
 */
import { SequenceStack, SequenceList } from '../model';
/**
 * Basic formula operator
 */
export var FormulaOperatorEnum;
(function (FormulaOperatorEnum) {
    FormulaOperatorEnum[FormulaOperatorEnum["Add"] = 0] = "Add";
    FormulaOperatorEnum[FormulaOperatorEnum["Sub"] = 1] = "Sub";
    FormulaOperatorEnum[FormulaOperatorEnum["Multi"] = 2] = "Multi";
    FormulaOperatorEnum[FormulaOperatorEnum["Div"] = 3] = "Div";
})(FormulaOperatorEnum || (FormulaOperatorEnum = {}));
/**
 * Formula operator
 */
export class FormulaOperator {
    constructor(typ, opnum) {
        this.optype = typ;
        this.opnumber = 2;
    }
    get OperatorType() {
        return this.optype;
    }
    get OperatorNumber() {
        return this.opnumber;
    }
}
/**
 * Formula Operator: Add
 */
export class FormulaOperatorAddition extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Add, 2);
    }
}
/**
 * Formula Operator: Subtract
 */
export class FormulaOperationSbbtraction extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Sub, 2);
    }
}
/**
 * Formula Operator: Multipy
 */
export class FormulaOperationMultiplication extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Multi, 2);
    }
}
/**
 * Formula Operator: Divide
 */
export class FormulaOperationDivision extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Div, 2);
    }
}
/**
 * Keyword in Formula
 */
export const FormulaKeyword = [
    'PI',
    'power'
];
/**
 * Paremter in Formula
 */
export class FormulaParameter {
    get Parameter() {
        return this._par;
    }
    set Parameter(par) {
        this._par = par;
    }
}
/**
 * Token enum
 */
export var FormulaTokenEnum;
(function (FormulaTokenEnum) {
    FormulaTokenEnum[FormulaTokenEnum["Add"] = 0] = "Add";
    FormulaTokenEnum[FormulaTokenEnum["Sub"] = 1] = "Sub";
    FormulaTokenEnum[FormulaTokenEnum["Multi"] = 2] = "Multi";
    FormulaTokenEnum[FormulaTokenEnum["Div"] = 3] = "Div";
    FormulaTokenEnum[FormulaTokenEnum["Equal"] = 4] = "Equal";
    FormulaTokenEnum[FormulaTokenEnum["LessThan"] = 5] = "LessThan";
    FormulaTokenEnum[FormulaTokenEnum["GreatThean"] = 6] = "GreatThean";
    FormulaTokenEnum[FormulaTokenEnum["LessEqual"] = 7] = "LessEqual";
    FormulaTokenEnum[FormulaTokenEnum["GreatEqual"] = 8] = "GreatEqual";
    FormulaTokenEnum[FormulaTokenEnum["OpenParenthesis"] = 9] = "OpenParenthesis";
    FormulaTokenEnum[FormulaTokenEnum["CloseParenthesis"] = 10] = "CloseParenthesis";
    FormulaTokenEnum[FormulaTokenEnum["Variable"] = 11] = "Variable";
    FormulaTokenEnum[FormulaTokenEnum["Digit"] = 12] = "Digit";
    FormulaTokenEnum[FormulaTokenEnum["PI"] = 21] = "PI";
})(FormulaTokenEnum || (FormulaTokenEnum = {}));
/**
 * Token
 */
export class FormulaToken {
    get TokenEnum() {
        return this._tokenEnum;
    }
    set TokenEnum(te) {
        this._tokenEnum = te;
    }
    get VariableName() {
        return this._varName;
    }
    set VariableName(vn) {
        this._varName = vn;
    }
}
/**
 * Formula Parser
 */
export class FormulaParser {
    constructor() {
    }
    init(input) {
        if (input === null || input === undefined || input.length <= 0) {
            return false;
        }
        this._orgInput = input;
        return true;
    }
    parse() {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            return false;
        }
        const st = new SequenceStack();
        const listVar = new SequenceList();
        // for(let i: number = 0; i < this._orgInput.length; i ++) {
        //     if ( (this._orgInput[i] >= 'a' && this._orgInput[i] <= 'z')
        //         || (this._orgInput[i] >= 'A' && this._orgInput[i] <= 'Z') ) {
        //     }
        //     if (this._orgInput[i] === '(') {
        //     }
        // }
        let syn = 0;
        let p = 0;
        let ch;
        let sum = 0;
        let m = 0;
        do {
            ch = this._orgInput[p++];
            while (ch === ' ') {
                ch = this._orgInput[p];
                p++;
            }
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                m = p;
                while ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                    ch = this._orgInput[p++];
                }
                const nvar = this._orgInput.substr(m, ch - m - 1);
                // Check new variable is a keyword
                for (let wi = 0; wi < FormulaKeyword.length; wi++) {
                    if (nvar === FormulaKeyword[wi]) {
                        if (wi === 0) {
                            // PI
                            // Todo!
                            break;
                        }
                        else if (wi === 1) {
                            // power
                            // Todo!
                            break;
                        }
                    }
                }
                // Todo
                // p--;
                // syn = 10;
                // for (n = 0; n < 6; n++)  {
                //     if (strcmp(token, rwtab[n]) == 0) {
                //         syn = n + 1;
                //         break;
                //     }
                // }
            }
            else if ((ch >= '0' && ch <= '9')) {
                m = p;
                while ((ch >= '0' && ch <= '9')) {
                    ch = this._orgInput[p++];
                }
                // Number
                sum = parseFloat(this._orgInput.substr(m, ch - m - 1));
                p--;
                // Todo, how to handle the .?
                // syn = 11;
                // if (sum > 32767)
                //     syn = -1;
            }
            // else switch (ch)
            // {
            // case '<': m = 0; token[m++] = ch;
            //     ch = this._orgInput[p++];
            //     if (ch == '>') {
            //         syn = 21;
            //         token[m++] = ch;
            //     }
            //     else if (ch == '=') {
            //         syn = 22;
            //         token[m++] = ch;
            //     }
            //     else {
            //         syn = 23;
            //         p--;
            //     }
            //     break;
            // case '>': m = 0; token[m++] = ch;
            //     ch = this._orgInput[p++];
            //     if (ch == '=') {
            //         syn = 24;
            //         token[m++] = ch;
            //     }
            //     else {
            //         syn = 20;
            //         p--;
            //     }
            //     break;
            // case ':': m = 0; token[m++] = ch;
            //     ch = this._orgInput[p++];
            //     if (ch == '=') {
            //         syn = 18;
            //         token[m++] = ch;
            //     }
            //     else {
            //         syn = 17;
            //         p--;
            //     }
            //     break;
            // case '*': syn = 13; token[0] = ch; break;
            // case '/': syn = 14; token[0] = ch; break;
            // case '+': syn = 15; token[0] = ch; break;
            // case '-': syn = 16; token[0] = ch; break;
            // case '=': syn = 25; token[0] = ch; break;
            // case ';': syn = 26; token[0] = ch; break;
            // case '(': syn = 27; token[0] = ch; break;
            // case ')': syn = 28; token[0] = ch; break;
            // case '\n': syn = -2; break;
            // default: syn = -1; break;
            // }
            switch (syn) {
                case 11: // cout << "(" << syn << "," << sum << ")" << endl; break;
                    break;
                case -1: // cout << "Error in row " << row << "!" << endl; break;
                    break;
                case -2: // row = row++; break;
                    break;
                default: // cout << "(" << syn << "," << token << ")" << endl; break;
                    break;
            }
        } while (syn !== 0);
    }
}
//# sourceMappingURL=Formula.js.map