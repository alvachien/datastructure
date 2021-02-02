/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Formula.spec.ts
 *
 */

 import { FormulaParser } from '../../lib/subject';

 describe('Test rpn', () => {
     let instance: FormulaParser;

    beforeEach(() => {
        instance = new FormulaParser();
    });

    it("#1. Test infixToPostfix, 1", () => {
        instance.init('1+2');
        let rst = instance.infixToPostfix();
        expect(rst).toBeTruthy();
    });    
    it("#2. Test infixToPostfix, 2", () => {
        instance.init('11+2');
        let rst = instance.infixToPostfix();
        expect(rst).toBeTruthy();
    });    
});
