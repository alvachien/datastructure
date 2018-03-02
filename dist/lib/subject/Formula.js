"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Formula.ts
 * Formula definition as well as calculation, using stack
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
var FormulaOperatorEnum;
(function (FormulaOperatorEnum) {
    FormulaOperatorEnum[FormulaOperatorEnum["Add"] = 0] = "Add";
    FormulaOperatorEnum[FormulaOperatorEnum["Sub"] = 1] = "Sub";
    FormulaOperatorEnum[FormulaOperatorEnum["Multi"] = 2] = "Multi";
    FormulaOperatorEnum[FormulaOperatorEnum["Div"] = 3] = "Div";
})(FormulaOperatorEnum = exports.FormulaOperatorEnum || (exports.FormulaOperatorEnum = {}));
var FormulaOperator = /** @class */ (function () {
    function FormulaOperator(typ, opnum) {
        this.optype = typ;
        this.opnumber = 2;
    }
    Object.defineProperty(FormulaOperator.prototype, "OperatorType", {
        get: function () {
            return this.optype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaOperator.prototype, "OperatorNumber", {
        get: function () {
            return this.opnumber;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaOperator;
}());
exports.FormulaOperator = FormulaOperator;
var FormulaOperatorAddition = /** @class */ (function (_super) {
    __extends(FormulaOperatorAddition, _super);
    function FormulaOperatorAddition() {
        return _super.call(this, FormulaOperatorEnum.Add, 2) || this;
    }
    return FormulaOperatorAddition;
}(FormulaOperator));
exports.FormulaOperatorAddition = FormulaOperatorAddition;
var FormulaOperationSbbtraction = /** @class */ (function (_super) {
    __extends(FormulaOperationSbbtraction, _super);
    function FormulaOperationSbbtraction() {
        return _super.call(this, FormulaOperatorEnum.Sub, 2) || this;
    }
    return FormulaOperationSbbtraction;
}(FormulaOperator));
exports.FormulaOperationSbbtraction = FormulaOperationSbbtraction;
var FormulaOperationMultiplication = /** @class */ (function (_super) {
    __extends(FormulaOperationMultiplication, _super);
    function FormulaOperationMultiplication() {
        return _super.call(this, FormulaOperatorEnum.Multi, 2) || this;
    }
    return FormulaOperationMultiplication;
}(FormulaOperator));
exports.FormulaOperationMultiplication = FormulaOperationMultiplication;
var FormulaOperationDivision = /** @class */ (function (_super) {
    __extends(FormulaOperationDivision, _super);
    function FormulaOperationDivision() {
        return _super.call(this, FormulaOperatorEnum.Div, 2) || this;
    }
    return FormulaOperationDivision;
}(FormulaOperator));
exports.FormulaOperationDivision = FormulaOperationDivision;
exports.FormulaKeyword = [
    'PI',
    'power'
];
var FormulaParameter = /** @class */ (function () {
    function FormulaParameter() {
    }
    Object.defineProperty(FormulaParameter.prototype, "Parameter", {
        get: function () {
            return this._par;
        },
        set: function (par) {
            this._par = par;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaParameter;
}());
exports.FormulaParameter = FormulaParameter;
var FormulaTokenEnum;
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
})(FormulaTokenEnum = exports.FormulaTokenEnum || (exports.FormulaTokenEnum = {}));
var FormulaToken = /** @class */ (function () {
    function FormulaToken() {
    }
    Object.defineProperty(FormulaToken.prototype, "TokenEnum", {
        get: function () {
            return this._tokenEnum;
        },
        set: function (te) {
            this._tokenEnum = te;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormulaToken.prototype, "VariableName", {
        get: function () {
            return this._varName;
        },
        set: function (vn) {
            this._varName = vn;
        },
        enumerable: true,
        configurable: true
    });
    return FormulaToken;
}());
exports.FormulaToken = FormulaToken;
var FormulaParser = /** @class */ (function () {
    function FormulaParser() {
    }
    FormulaParser.prototype.init = function (input) {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            return;
        }
        this._orgInput = input;
    };
    FormulaParser.prototype.parse = function () {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            return;
        }
        var st = new model_1.SequenceStack();
        var listVar = new model_1.SequenceList();
        // for(let i: number = 0; i < this._orgInput.length; i ++) {
        //     if ( (this._orgInput[i] >= 'a' && this._orgInput[i] <= 'z')
        //         || (this._orgInput[i] >= 'A' && this._orgInput[i] <= 'Z') ) {
        //     }
        //     if (this._orgInput[i] === '(') {
        //     }
        // }
        var syn = 0;
        var p = 0;
        var ch;
        var sum = 0;
        var m = 0;
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
                var nvar = this._orgInput.substr(m, ch - m - 1);
                // Check new variable is a keyword
                for (var wi = 0; wi < exports.FormulaKeyword.length; wi++) {
                    if (nvar === exports.FormulaKeyword[wi]) {
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
                case 11:// cout << "(" << syn << "," << sum << ")" << endl; break;
                    break;
                case -1:// cout << "Error in row " << row << "!" << endl; break;
                    break;
                case -2:// row = row++; break;
                    break;
                default:// cout << "(" << syn << "," << token << ")" << endl; break;
                    break;
            }
        } while (syn != 0);
    };
    return FormulaParser;
}());
exports.FormulaParser = FormulaParser;
//# sourceMappingURL=Formula.js.map