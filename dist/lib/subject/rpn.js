"use strict";
/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: RPN.ts
 * Contains the logic for Revers Polish Notation
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// RPN(Reverse Polish Notation)
exports.RPNOperators = [
    '+',
    '-',
    '*',
    '/',
    '(',
    ')'
];
/**
 * Get the priority of the operators
 * @param operator The inputted operator
 */
function RPNOperationPriority(operator) {
    var opResult = 0;
    switch (operator) {
        case '+':
            opResult = 1;
            break;
        case '-':
            opResult = 1;
            break;
        case '*':
            opResult = 2;
            break;
        case '/':
            opResult = 2;
            break;
        case '(':
            opResult = 0;
            break;
        case ')':
            opResult = 0;
            break;
        default:
            throw new Error('Unsupported operator!');
    }
    return opResult;
}
exports.RPNOperationPriority = RPNOperationPriority;
/**
 * Workout the result based on the operator
 * @param x Previous element
 * @param y Next element
 * @param operator The operator
 */
function RPNGetOperatorResult(x, y, operator) {
    var rst = 0;
    switch (operator) {
        case '+':
            rst = x + y;
            break;
        case '-':
            rst = x - y;
            break;
        case '*':
            rst = x * y;
            break;
        case '/':
            try {
                rst = x / y;
            }
            catch (ex) {
                throw ex;
            }
            break;
        default:
            throw new Error('Operation has no result');
    }
    return rst;
}
exports.RPNGetOperatorResult = RPNGetOperatorResult;
/**
 * Workout the result for string with RPN format
 * @param strinputs String with RPN format, like '34+', it returns 7
 * Note:
 * 1) it only accept the inputs with PRN format; and
 * 2) it doesn't support '(' and ')', and
 * 3) it won't care of priority, for instance: '34+5*' will get 35 not 23 (3+4*5=23)
 */
function rpn1(strinputs) {
    if (strinputs.length === 0) {
        return 0;
    }
    // Split into array of tokens
    var arinputs = strinputs.split(/\s+/);
    var stack = [];
    for (var i = 0; i < arinputs.length; i++) {
        var token = arinputs[i];
        // Token is a value, push it onto the stack
        if (!Number.isNaN(+token)) {
            stack.push(parseFloat(token));
        }
        else {
            // Every operation requires two arguments
            if (stack.length < 2) {
                throw new Error('Insufficient values in expression.');
            }
            // Pop two items from the top of the stack and push the result of the
            // operation onto the stack.
            var y = stack.pop();
            var x = stack.pop();
            /* eslint no-eval: 0 */
            stack.push(eval(x + token + ' ' + y));
        }
    }
    if (stack.length > 1) {
        throw new Error('Inputted expression has too many values.');
    }
    return stack.pop();
}
exports.rpn1 = rpn1;
/**
 * Class for RPN
 */
var RPN = /** @class */ (function () {
    function RPN() {
        this._arInputs = [];
    }
    Object.defineProperty(RPN.prototype, "InputArray", {
        get: function () {
            return this._arInputs;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Save to string
     */
    RPN.prototype.toString = function () {
        return this._arInputs.join(' ');
    };
    /**
     * Build the express to PRN format
     * @param exp Express string, like 3*(4+5)
     */
    RPN.prototype.buildExpress = function (exp) {
        var skOp = new Array();
        var operations = "+-*/";
        var digit = "";
        for (var i = 0; i < exp.length; i++) {
            var token = exp.charAt(i);
            if (!Number.isNaN(+token)) {
                digit += token;
            }
            else if (operations.indexOf(token) >= 0) {
                if (digit.length > 0) {
                    this._arInputs.push(digit);
                    digit = "";
                }
                while (skOp.length > 0) {
                    var opInStack = skOp.pop();
                    if (opInStack === '(' || RPNOperationPriority(opInStack) < RPNOperationPriority(token)) {
                        skOp.push(opInStack);
                        break;
                    }
                    else {
                        this._arInputs.push(opInStack);
                    }
                }
                skOp.push(token);
            }
            else if (token === '(') {
                skOp.push(token);
            }
            else if (token === ')') {
                if (digit.length > 0) {
                    this._arInputs.push(digit);
                    digit = "";
                }
                while (skOp.length > 0) {
                    var opInStack = skOp.pop();
                    if (opInStack === '(') {
                        break;
                    }
                    else {
                        this._arInputs.push(opInStack);
                    }
                }
            }
        }
        if (digit.length > 0) {
            this._arInputs.push(digit);
        }
        while (skOp.length > 0) {
            var opInStack = skOp.pop();
            this._arInputs.push(opInStack);
        }
        return this._arInputs.toString();
    };
    /**
     * Workout the final result
     */
    RPN.prototype.WorkoutResult = function () {
        var stack = new Array();
        var result = 0;
        for (var i = 0; i < this._arInputs.length; i++) {
            var c = this._arInputs[i];
            if (!Number.isNaN(+c)) {
                stack.push(c);
            }
            else if (c === '+' || c === '-' || c === '*' || c === '/') {
                var nextNum = parseFloat(stack.pop());
                var prevNum = parseFloat(stack.pop());
                result = RPNGetOperatorResult(prevNum, nextNum, c);
                stack.push(result);
            }
        }
        return result;
    };
    // integer 
    // fraction
    // decimal fraction
    RPN.prototype.VerifyResult = function (allowNegative, allowDecimal) {
        var stack = new Array();
        var result = 0;
        for (var i = 0; i < this._arInputs.length; i++) {
            var c = this._arInputs[i];
            if (!Number.isNaN(+c)) {
                stack.push(c);
            }
            else if (c === '+' || c === '-' || c === '*' || c === '/') {
                var nextNum = parseFloat(stack.pop());
                if (!Number.isInteger(nextNum) && !allowDecimal) {
                    return false;
                }
                if (nextNum < 0 && !allowNegative) {
                    return false;
                }
                var prevNum = parseFloat(stack.pop());
                if (!Number.isInteger(prevNum) && !allowDecimal) {
                    return false;
                }
                if (prevNum < 0 && !allowNegative) {
                    return false;
                }
                result = RPNGetOperatorResult(prevNum, nextNum, c);
                if (!Number.isInteger(result) && !allowDecimal) {
                    return false;
                }
                if (result < 0 && !allowNegative) {
                    return false;
                }
                stack.push(result);
            }
        }
        return true;
    };
    return RPN;
}());
exports.RPN = RPN;
//# sourceMappingURL=rpn.js.map