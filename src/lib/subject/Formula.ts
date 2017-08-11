/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Formula.ts
 * Formula definition as well as calculation, using stack
 *
 */

import { SequenceStack } from '../model';

export enum FormulaOperatorEnum {
    Add = 0,
    Sub = 1,
    Multi = 2,
    Div = 3
}

export class FormulaOperator {
    private optype: FormulaOperatorEnum;
    private opnumber: number;

    constructor(typ: FormulaOperatorEnum, opnum: number) {
        this.optype = typ;
        this.opnumber = 2;
    }

    get OperatorType(): FormulaOperatorEnum {
        return this.optype;
    }
    get OperatorNumber(): number {
        return this.opnumber;
    }
}

export class FormulaOperatorAddition extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Add, 2);
    }
}

export class FormulaOperationSbbtraction extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Sub, 2);
    }
}

export class FormulaOperationMultiplication extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Multi, 2);
    }

}

export class FormulaOperationDivision extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Div, 2);
    }

}

export const FormulaKeyword: string[] = [
    'PI',
    'power'
];

export class FormulaParameter {
    private _par: string;
    get Parameter(): string {
        return this._par;
    }

    set Parameter(par: string) {
        this._par = par;
    }
}

export enum FormulaTokenEnum {
    Add = 0,    // +
    Sub = 1,    // -
    Multi = 2,    // *
    Div = 3,    // /        
    Equal = 4,    // =
    LessThan = 5,    // <
    GreatThean = 6,    // >
    LessEqual = 7,    // <=
    GreatEqual = 8,    // >=
    OpenParenthesis = 9,    // (
    CloseParenthesis = 10,   // )
    Variable = 11,
    Digit = 12,
    PI = 21,   // PI
}

export class FormulaToken {
    private _tokenEnum: FormulaTokenEnum;
    get TokenEnum(): FormulaTokenEnum {
        return this._tokenEnum;
    } 
    set TokenEnum(te: FormulaTokenEnum) {
        this._tokenEnum = te;
    }

    private _varName: string;
    get VariableName(): string {
        return this._varName;
    }
    set VariableName(vn: string) {
        this._varName = vn;
    }
}

export class FormulaParser {
    private _orgInput: string;

    constructor() {
    }

    public init(input: string) {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            return;
        }
        
        this._orgInput = input;
    }

    private parse() {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            return;
        }

        let st: SequenceStack<any> = new SequenceStack<any>();
        // for(let i: number = 0; i < this._orgInput.length; i ++) {
        //     if ( (this._orgInput[i] >= 'a' && this._orgInput[i] <= 'z')
        //         || (this._orgInput[i] >= 'A' && this._orgInput[i] <= 'Z') ) {

        //     }
        //     if (this._orgInput[i] === '(') {

        //     }
        // }
        let syn: number = 0;
        let p: number = 0;
        let ch: any;
        let sum: number = 0;
        let m: number = 0;

        do {
            ch = this._orgInput[p++];
            while (ch === ' ') {
                ch = this._orgInput[p];
                p++;
            }

            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
            {
                m = p;

                while ((ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                    ch = this._orgInput[p++];
                }
                let nvar = this._orgInput.substr(m, ch - m - 1);
                // Check new variable is a keyword
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
            else if ((ch >= '0' && ch <= '9')) 
            {
                m = p;
                while ((ch >= '0' && ch <= '9')) {
                    ch = this._orgInput[p++];
                }
                // Number
                sum = parseFloat(this._orgInput.substr(m, ch -m -1));
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
        }
        while (syn != 0);
    }
}

