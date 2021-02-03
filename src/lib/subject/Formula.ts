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
  private _par: string;
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

/**
 * Formula Parser
 */
export class FormulaParser {
  private _orgInput: string;

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
      let str = listStrings.GetElement(i);
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
              reversePolish.Enqueue(stkOpers.Pop());
						}
					}
        } else {
          if (!stkOpers.IsEmpty()) {
            while(!stkOpers.IsEmpty()){
              let curop = stkOpers.Peek();
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
			reversePolish.Enqueue(stkOpers.Pop());
    }

    let treenodes: SequenceStack<BinaryTreeNode<string>> = new SequenceStack<BinaryTreeNode<string>>();
    while(!reversePolish.IsEmpty()){
			
      let node: BinaryTreeNode<string> = new BinaryTreeNode<string>();
      node.Data = reversePolish.Dequeue();
			
			if(!isNaN(+node.Data)) {
        treenodes.Push(node);
			} else {				
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

  private parse(): boolean {
    if (this._orgInput === null || this._orgInput === undefined || this._orgInput.length <= 0) {
      return false;
    }

    const st: SequenceStack<any> = new SequenceStack<any>();
    const listVar: SequenceList<string> = new SequenceList<string>();
    // for(let i: number = 0; i < this._orgInput.length; i ++) {
    //     if ( (this._orgInput[i] >= 'a' && this._orgInput[i] <= 'z')
    //         || (this._orgInput[i] >= 'A' && this._orgInput[i] <= 'Z') ) {

    //     }
    //     if (this._orgInput[i] === '(') {

    //     }
    // }
    let syn: number = 0;
    let p = 0;
    let ch: any;
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
    }
    while (syn !== 0);
  }
}

