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

import { SequenceList, BinaryTree, BinaryTreeNode } from '../../lib/model';
import { FormulaParser } from '../../lib/subject';

describe('Test FormulaParser', () => {
    let instance: FormulaParser;

    beforeEach(() => {
        instance = new FormulaParser();
    });

    it("#1. Test infixToPostfix, 1", () => {
        instance.init('1+2');

        let lst: SequenceList<string> = new SequenceList<string>();
        lst.AppendElement('1');
        lst.AppendElement('+');
        lst.AppendElement('2');
        let rst = instance.infixToPostfix(lst);
        expect(rst).toBeTruthy();
        expect(rst.Root.Data).toEqual('+');
        expect(rst.Root.Left.Data).toEqual('1');
        expect(rst.Root.Right.Data).toEqual('2');
        expect(rst.Root.Left.Left).toBeFalsy();
        expect(rst.Root.Left.Right).toBeFalsy();
        expect(rst.Root.Right.Left).toBeFalsy();
        expect(rst.Root.Right.Right).toBeFalsy();
    });

    it("#2. Test infixToPostfix, 2", () => {
        instance.init('1+2*3');

        let lst: SequenceList<string> = new SequenceList<string>();
        lst.AppendElement('1');
        lst.AppendElement('+');
        lst.AppendElement('2');
        lst.AppendElement('*');
        lst.AppendElement('3');
        let rst = instance.infixToPostfix(lst);
        expect(rst).toBeTruthy();
        expect(rst.Root.Data).toEqual('+');
        expect(rst.Root.Left.Data).toEqual('1');
        expect(rst.Root.Right.Data).toEqual('*');
        expect(rst.Root.Left.Left).toBeFalsy();
        expect(rst.Root.Left.Right).toBeFalsy();
        expect(rst.Root.Right.Left).toBeTruthy()
        expect(rst.Root.Right.Left.Data).toEqual('2');
        expect(rst.Root.Right.Right).toBeTruthy();
        expect(rst.Root.Right.Right.Data).toEqual('3');
    });

    it('#3. Test evalulate, 1', () => {
        instance.init('1+2');
        let rst = instance.evaulate();
        expect(rst).toEqual(3);
    });
    it('#4. Test evalulate, 2', () => {
        instance.init('11+22');
        let rst = instance.evaulate();
        expect(rst).toEqual(33);
    });
    it('#5. Test evalulate, 3', () => {
        instance.init('222-1');
        let rst = instance.evaulate();
        expect(rst).toEqual(221);
    });
    it('#6. Test evalulate, 4', () => {
        instance.init('11*20');
        let rst = instance.evaulate();
        expect(rst).toEqual(220);
    });
    it('#7. Test evalulate, 5', () => {
        instance.init('2/1');
        let rst = instance.evaulate();
        expect(rst).toEqual(2);
    });
    it('#8. Test evalulate, 6', () => {
        instance.init('21/3');
        let rst = instance.evaulate();
        expect(rst).toEqual(7);
    });
    it('#9. Test evalulate, 7', () => {
        instance.init('');
        expect(() => instance.evaulate()).toThrowError();
    });
    it('#10. Test evalulate, 8', () => {
        instance.init('12(');
        expect(() => instance.evaulate()).toThrowError();
    });
    it('#11. Test evalulate, 9', () => {
        instance.init('12+(13+7)');
        expect(instance.evaulate()).toEqual(32);
    });
    it('#12. Test evalulate, 10', () => {
        instance.init('12*(13+7)');
        expect(instance.evaulate()).toEqual(240);
    });
    it('#13. Test evalulate, 11', () => {
        instance.init('4+12*(1+2)');
        expect(instance.evaulate()).toEqual(40);
    });
});
