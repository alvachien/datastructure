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
    Add     = 0,
    Sub     = 1,
    Multi   = 2,
    Div     = 3
}

export class FormulaOperator {
    private optype: FormulaOperatorEnum;
    constructor(typ: FormulaOperatorEnum) {
        this.optype = typ;
    }

    get OperatorType(): FormulaOperatorEnum {
        return this.optype;
    }
}

export class FormulaOperatorAddition extends FormulaOperator {
    constructor() {
        super(FormulaOperatorEnum.Add);
    }
}

export class FormulaOperationSUbtraction extends FormulaOperator { 
    constructor() {
        super(FormulaOperatorEnum.Sub);
    }
}

export class Formula {

}

