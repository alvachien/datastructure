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

import { SequenceList } from '../../lib/model';
import { FormulaParser } from '../../lib/subject';

describe('Test FormulaParser', () => {
    let instance: FormulaParser;

    beforeEach(() => {
        instance = new FormulaParser();
    });

    it("#1. Test infixToPostfix, 1", () => {
        instance.init('1+2');

        const lst: SequenceList<string> = new SequenceList<string>();
        lst.AppendElement('1');
        lst.AppendElement('+');
        lst.AppendElement('2');
        const rst = instance.infixToPostfix(lst);
        expect(rst).toBeTruthy();
        expect(rst.Root!.Data).toEqual('+');
        expect(rst.Root!.Left!.Data).toEqual('1');
        expect(rst.Root!.Right!.Data).toEqual('2');
        expect(rst.Root!.Left!.Left).toBeFalsy();
        expect(rst.Root!.Left!.Right).toBeFalsy();
        expect(rst.Root!.Right!.Left).toBeFalsy();
        expect(rst.Root!.Right!.Right).toBeFalsy();
    });

    it("#2. Test infixToPostfix, 2", () => {
        instance.init('1+2*3');

        const lst: SequenceList<string> = new SequenceList<string>();
        lst.AppendElement('1');
        lst.AppendElement('+');
        lst.AppendElement('2');
        lst.AppendElement('*');
        lst.AppendElement('3');
        const rst = instance.infixToPostfix(lst);
        expect(rst).toBeTruthy();
        expect(rst.Root!.Data).toEqual('+');
        expect(rst.Root!.Left!.Data).toEqual('1');
        expect(rst.Root!.Right!.Data).toEqual('*');
        expect(rst.Root!.Left!.Left).toBeFalsy();
        expect(rst.Root!.Left!.Right).toBeFalsy();
        expect(rst.Root!.Right!.Left).toBeTruthy()
        expect(rst.Root!.Right!.Left!.Data).toEqual('2');
        expect(rst.Root!.Right!.Right).toBeTruthy();
        expect(rst.Root!.Right!.Right!.Data).toEqual('3');
    });

    it('#3. Test evalulate, 1', () => {
        instance.init('1+2');
        const rst = instance.evaluate();
        expect(rst).toEqual(3);
    });
    it('#4. Test evalulate, 2', () => {
        instance.init('11+22');
        const rst = instance.evaluate();
        expect(rst).toEqual(33);
    });
    it('#5. Test evalulate, 3', () => {
        instance.init('222-1');
        const rst = instance.evaluate();
        expect(rst).toEqual(221);
    });
    it('#6. Test evalulate, 4', () => {
        instance.init('11*20');
        const rst = instance.evaluate();
        expect(rst).toEqual(220);
    });
    it('#7. Test evalulate, 5', () => {
        instance.init('2/1');
        const rst = instance.evaluate();
        expect(rst).toEqual(2);
    });
    it('#8. Test evalulate, 6', () => {
        instance.init('21/3');
        const rst = instance.evaluate();
        expect(rst).toEqual(7);
    });
    it('#9. Test evalulate, 7', () => {
        instance.init('');
        expect(() => instance.evaluate()).toThrowError();
    });
    it('#10. Test evalulate, 8', () => {
        instance.init('12(');
        expect(() => instance.evaluate()).toThrowError();
    });
    it('#11. Test evalulate, 9', () => {
        instance.init('12+(13+7)');
        expect(instance.evaluate()).toEqual(32);
    });
    it('#12. Test evalulate, 10', () => {
        instance.init('12*(13+7)');
        expect(instance.evaluate()).toEqual(240);
    });
    it('#13. Test evalulate, 11', () => {
        instance.init('4+12*(1+2)');
        expect(instance.evaluate()).toEqual(40);
    });

    // Left-associative chains. Before the fix, evaluate() popped only a single
    // operator on equal precedence and let the rest drain LIFO at the end, so
    // the operand order was wrong.
    it('#14. evaluate: left-associative subtraction chain (10-2-3 => 5)', () => {
        instance.init('10-2-3');
        expect(instance.evaluate()).toEqual(5);
    });
    it('#15. evaluate: mixed + and - same-precedence (10-2+3 => 11)', () => {
        // 10 - 2 + 3 = 11 left-to-right. The old single-pop bug could yield
        // 10 - (2 + 3) = 5 here.
        instance.init('10-2+3');
        expect(instance.evaluate()).toEqual(11);
    });
    it('#16. evaluate: subtraction after multiplication (1-2*3+4 => -1)', () => {
        // The canonical failing case: 1 - 2*3 + 4 = 1 - 6 + 4 = -1.
        // The old code returned -9 (treated it as 1 - (2*3 + 4) = 1 - 10).
        instance.init('1-2*3+4');
        expect(instance.evaluate()).toEqual(-1);
    });
    it('#17. evaluate: division associativity (8/4/2 => 1)', () => {
        // Left-to-right: (8/4)/2 = 1. Right-assoc would be 8/(4/2) = 4.
        instance.init('8/4/2');
        expect(instance.evaluate()).toEqual(1);
    });
    it('#18. evaluate: chained multiplication and subtraction (2*3*4-5 => 19)', () => {
        instance.init('2*3*4-5');
        expect(instance.evaluate()).toEqual(19);
    });
});
