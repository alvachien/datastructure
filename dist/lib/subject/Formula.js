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
import { SequenceStack, SequenceList, BinaryTree, SequenceQueue, BinaryTreeNode, } from '../model';
import { RPNOperationPriority } from './rpn';
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
        this.opnumber = opnum;
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
    /**
     * Infix to Postfix
     */
    infixToPostfix(listStrings) {
        const stkOpers = new SequenceStack();
        const reversePolish = new SequenceQueue();
        const tree = new BinaryTree();
        for (let i = 0; i < listStrings.Length(); i++) {
            let str = listStrings.GetElement(i);
            if (!isNaN(+str)) {
                // Numbers
                reversePolish.Enqueue(str);
            }
            else {
                // Operators
                if (str === '(') {
                    stkOpers.Push(str);
                }
                else if (str === ')') {
                    while (!stkOpers.IsEmpty()) {
                        const op = stkOpers.Peek();
                        if (op === '(') {
                            // When reach (, the ends
                            stkOpers.Pop();
                            break;
                        }
                        else {
                            reversePolish.Enqueue(stkOpers.Pop());
                        }
                    }
                }
                else {
                    if (!stkOpers.IsEmpty()) {
                        while (!stkOpers.IsEmpty()) {
                            let curop = stkOpers.Peek();
                            if (curop === '(') {
                                stkOpers.Push(str);
                                break;
                            }
                            else if (RPNOperationPriority(curop) > RPNOperationPriority(str)) {
                                reversePolish.Enqueue(curop);
                            }
                            else if (RPNOperationPriority(str) > RPNOperationPriority(curop)) {
                                stkOpers.Push(str);
                                break;
                            }
                        }
                    }
                    else {
                        stkOpers.Push(str);
                    }
                }
            }
        }
        while (!stkOpers.IsEmpty()) {
            reversePolish.Enqueue(stkOpers.Pop());
        }
        let treenodes = new SequenceStack();
        while (!reversePolish.IsEmpty()) {
            let node = new BinaryTreeNode();
            node.Data = reversePolish.Dequeue();
            if (!isNaN(+node.Data)) {
                treenodes.Push(node);
            }
            else {
                let rightNode = treenodes.Pop();
                let leftNode = treenodes.Pop();
                node.Left = leftNode;
                node.Right = rightNode;
                treenodes.Push(node);
            }
        }
        tree.Root = treenodes.Pop();
        return tree;
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
    operatorPriority(c) {
        if (c === '+' || c === '-') {
            return 1;
        }
        else if (c === '*' || c === '/') {
            return 2;
        }
        return 0;
    }
    cal(rightNum, leftNum, op) {
        if (op === '+') {
            return leftNum + rightNum;
        }
        else if (op === '-') {
            return leftNum - rightNum;
        }
        else if (op === '*') {
            return leftNum * rightNum;
        }
        else if (op === '/') {
            if (rightNum === 0) {
                throw new Error("Cannot Divid Zero");
            }
            else {
                return leftNum / rightNum;
            }
        }
        throw new Error(`Operation ${op} not supported`);
    }
    evaulate() {
        if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
            throw new Error('Invalid Input');
        }
        let numStack = new SequenceStack();
        let operStack = new SequenceStack();
        let nNum = 0;
        let flagNum = false;
        for (let i = 0; i < this._orgInput.length; i++) {
            if (this._orgInput.charAt(i) >= '0' && this._orgInput[i] <= '9') {
                nNum = 10 * nNum + Number.parseInt(this._orgInput[i]);
                flagNum = true;
            }
            else {
                if (flagNum) {
                    numStack.Push(nNum);
                    nNum = 0;
                    flagNum = false;
                }
                if (this._orgInput[i] === '(') {
                    operStack.Push(this._orgInput[i]);
                }
                else if (this._orgInput[i] === ')') {
                    while (operStack.Peek() != '(') {
                        let rst = this.cal(numStack.Pop(), numStack.Pop(), operStack.Pop());
                        numStack.Push(rst);
                    }
                    operStack.Pop(); // Remove '('
                }
                else if (this.operatorPriority(this._orgInput[i]) > 0) {
                    if (operStack.IsEmpty()) {
                        operStack.Push(this._orgInput[i]);
                    }
                    else {
                        if (this.operatorPriority(operStack.Peek()) >= this.operatorPriority(this._orgInput[i])) {
                            let rst = this.cal(numStack.Pop(), numStack.Pop(), operStack.Pop());
                            numStack.Push(rst);
                        }
                        operStack.Push(this._orgInput[i]);
                    }
                }
            }
        }
        if (flagNum) { // Last number
            numStack.Push(nNum);
        }
        while (!operStack.IsEmpty()) {
            let rst = this.cal(numStack.Pop(), numStack.Pop(), operStack.Pop());
            numStack.Push(rst);
        }
        if (numStack.Length() > 1) {
            throw new Error('Invalid');
        }
        return numStack.Pop();
    }
}
//# sourceMappingURL=Formula.js.map