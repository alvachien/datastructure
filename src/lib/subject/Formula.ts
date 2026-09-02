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

import { SequenceStack, SequenceList, BinaryTree, SequenceQueue, BinaryTreeNode, IStack, } from '../model';
import { RPNOperationPriority } from './rpn';

/**
 * Basic formula operator
 */
export enum FormulaOperatorEnum {
  Add = 0,
  Sub = 1,
  Multi = 2,
  Div = 3
}

/**
 * Formula operator
 */
export class FormulaOperator {
  private optype: FormulaOperatorEnum;
  private opnumber: number;

  constructor(typ: FormulaOperatorEnum, opnum: number) {
    this.optype = typ;
    this.opnumber = opnum;
  }

  get OperatorType(): FormulaOperatorEnum {
    return this.optype;
  }
  get OperatorNumber(): number {
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
export const FormulaKeyword: string[] = [
  'PI',
  'power'
];

/**
 * Paremter in Formula
 */
export class FormulaParameter {
  private _par!: string;
  get Parameter(): string {
    return this._par;
  }

  set Parameter(par: string) {
    this._par = par;
  }
}

/**
 * Token enum
 */
export enum FormulaTokenEnum {
  Add = 0,        // +
  Sub = 1,        // -
  Multi = 2,      // *
  Div = 3,        // /
  Equal = 4,      // =
  LessThan = 5,   // <
  GreatThean = 6, // >
  LessEqual = 7,  // <=
  GreatEqual = 8, // >=
  OpenParenthesis = 9,    // (
  CloseParenthesis = 10,   // )
  Variable = 11,
  Digit = 12,
  PI = 21,        // PI
}

/**
 * Token
 */
export class FormulaToken {
  private _tokenEnum!: FormulaTokenEnum;
  get TokenEnum(): FormulaTokenEnum {
    return this._tokenEnum;
  }
  set TokenEnum(te: FormulaTokenEnum) {
    this._tokenEnum = te;
  }

  private _varName!: string;
  get VariableName(): string {
    return this._varName;
  }
  set VariableName(vn: string) {
    this._varName = vn;
  }
}

/**
 * Formula Parser
 */
export class FormulaParser {
  private _orgInput!: string;
  private _listInput!: SequenceList<string>;

  constructor() {
  }

  public init(input: string): boolean {
    if (input === null || input === undefined || input.length <= 0) {
      return false;
    }

    this._orgInput = input;

    return true;
  }

  /**
   * Infix to Postfix
   */
  public infixToPostfix(listStrings: SequenceList<string>): BinaryTree<string> {
    const stkOpers: SequenceStack<string> = new SequenceStack<string>();
    const reversePolish: SequenceQueue<string> = new SequenceQueue<string>();
    const tree: BinaryTree<string> = new BinaryTree<string>();

    for(let i = 0; i < listStrings.Length(); i ++) {
      const str = listStrings.GetElement(i)!;
      if (!isNaN(+str)) {
        // Numbers
        reversePolish.Enqueue(str);
      } else {
        // Operators
        if (str === '(') {
          stkOpers.Push(str);
        } else if (str === ')') {
          while(!stkOpers.IsEmpty()){						
						const op = stkOpers.Peek();
						if(op === '(') {
              // When reach (, the ends
              stkOpers.Pop();
							break;							
						} else{
              reversePolish.Enqueue(stkOpers.Pop()!);
						}
					}
        } else {
          if (!stkOpers.IsEmpty()) {
            while(!stkOpers.IsEmpty()){
              const curop = stkOpers.Peek()!;
              if(curop === '(') {
                stkOpers.Push(str);
                break;
              } else if(RPNOperationPriority(curop) > RPNOperationPriority(str)) {              
                reversePolish.Enqueue(curop);              
              } else if(RPNOperationPriority(str) > RPNOperationPriority(curop)) {
                stkOpers.Push(str);
                break;
              }
            }  
          } else {
            stkOpers.Push(str);
          }
        }
      }
    }

    while(!stkOpers.IsEmpty()){			
			reversePolish.Enqueue(stkOpers.Pop()!);
    }

    const treenodes: SequenceStack<BinaryTreeNode<string>> = new SequenceStack<BinaryTreeNode<string>>();
    while(!reversePolish.IsEmpty()){
			
      const node: BinaryTreeNode<string> = new BinaryTreeNode<string>();
      node.Data = reversePolish.Dequeue()!;
			
			if(!isNaN(+node.Data)) {
        treenodes.Push(node);
			} else {				
				const rightNode = treenodes.Pop();
        const leftNode = treenodes.Pop();
        node.Left = leftNode!;
        node.Right = rightNode!;

        treenodes.Push(node);
			}			
    }
    tree.Root = treenodes.Pop()!;

    return tree;
  }

  private parse(): any {
    if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
      return false;
    }

    // for(let i: number = 0; i < this._orgInput.length; i ++) {
    //     if ( (this._orgInput[i] >= 'a' && this._orgInput[i] <= 'z')
    //         || (this._orgInput[i] >= 'A' && this._orgInput[i] <= 'Z') ) {

    //     }
    //     if (this._orgInput[i] === '(') {

    //     }
    // }
    const syn: number = 0;
    let p = 0;
    let ch: any;
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
            } else if (wi === 1) {
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
      } else if ((ch >= '0' && ch <= '9')) {
        m = p;
        while ((ch >= '0' && ch <= '9')) {
          ch = this._orgInput[p++];
        }
        // Number (parsed value not consumed yet, see Todo below)
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
    while (syn !== 0);
  }

  private operatorPriority(c: string): number {
    if (c === '+' || c === '-') {
        return 1;
    } else if (c === '*' || c === '/') {
        return 2;
    }

    return 0;
  }

  private cal(rightNum: number, leftNum: number, op: string): number {
    if (op === '+') {
        return leftNum + rightNum;
    } else if (op === '-') {
        return leftNum - rightNum;
    } else if (op === '*') {
        return leftNum * rightNum;
    } else if (op === '/') {
      if(rightNum === 0){
          throw new Error("Cannot Divid Zero");
      } else {
          return leftNum / rightNum;
      }
    }
    throw new Error(`Operation ${op} not supported`);
  }

  public evaluate(): number {
    if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
      throw new Error('Invalid Input');
    }

    const numStack: IStack<number> = new SequenceStack<number>();
    const operStack: IStack<string> = new SequenceStack<string>();

    let nNum = 0;
    let flagNum = false;

    for(let i: number = 0; i < this._orgInput.length; i ++) {
      if (this._orgInput.charAt(i) >= '0' && this._orgInput[i] <= '9') {
        nNum = 10 * nNum + Number.parseInt(this._orgInput[i]);
        flagNum = true;
      } else {
        if (flagNum) {
          numStack.Push(nNum);
          nNum = 0;
          flagNum = false;
        }

        if(this._orgInput[i] === '('){
          operStack.Push(this._orgInput[i]);
        } else if(this._orgInput[i] === ')'){
          while (operStack.Peek() != '('){
            const rst = this.cal(numStack.Pop()!, numStack.Pop()!, operStack.Pop()!);
            numStack.Push(rst);
          }
          operStack.Pop(); // Remove '('
        } else if (this.operatorPriority(this._orgInput[i]) > 0) {
          if (operStack.IsEmpty()) {
            operStack.Push(this._orgInput[i]);
          } else {
            // Left-associative draining: pop every stacked operator whose
            // precedence is >= the incoming operator's before pushing it. The
            // old code popped only a single operator, so an equal-precedence
            // operator left on the stack was applied during the final LIFO
            // drain in the wrong order — e.g. "1-2*3+4" yielded -9 (1-(6+4))
            // instead of -1 ((1-6)+4). Draining here mirrors RPN.buildExpress.
            // `(` has priority 0, so the loop naturally stops at an open paren.
            while (!operStack.IsEmpty()
              && this.operatorPriority(operStack.Peek()!) >= this.operatorPriority(this._orgInput[i])) {
              const rst = this.cal(numStack.Pop()!, numStack.Pop()!, operStack.Pop()!);
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
      const rst = this.cal(numStack.Pop()!, numStack.Pop()!, operStack.Pop()!);
      numStack.Push(rst);
    }

    if (numStack.Length() > 1) {
      throw new Error('Invalid');
    }

    return numStack.Pop()!;
  }
}

