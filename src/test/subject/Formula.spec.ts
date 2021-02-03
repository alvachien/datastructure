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
});
