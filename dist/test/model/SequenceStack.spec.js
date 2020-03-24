"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceStack_1 = require("../../lib/model/SequenceStack");
describe('Test SequenceStack', function () {
    var _seqStack;
    beforeEach(function () {
        _seqStack = new SequenceStack_1.SequenceStack();
    });
    it('#1. Check InitStack()', function () {
        // _seqStack.InitList();
        expect(_seqStack).toBeTruthy();
    });
    it('#2. Check empty stack.', function () {
        // _seqStack.InitList();
        expect(_seqStack.IsEmpty()).toBe(true);
        expect(_seqStack.Length()).toBe(0);
    });
    it('#3. Check push on Stack.', function () {
        // _seqStack.InitList();
        _seqStack.Push(1);
        expect(_seqStack.IsEmpty()).toBe(false);
        expect(_seqStack.Length()).toBe(1);
        _seqStack.Push(2);
        expect(_seqStack.IsEmpty()).toBe(false);
        expect(_seqStack.Length()).toBe(2);
    });
    it('#4. Check pop of Stack.', function () {
        // _seqStack.InitList();
        _seqStack.Push(1);
        _seqStack.Push(2);
        _seqStack.Push(3);
        expect(_seqStack.IsEmpty()).toBe(false);
        expect(_seqStack.Length()).toBe(3);
        expect(_seqStack.Pop()).toBeTruthy();
        expect(_seqStack.Length()).toBe(2);
        expect(_seqStack.Pop()).toBeTruthy();
        expect(_seqStack.Length()).toBe(1);
        expect(_seqStack.Pop()).toBeTruthy();
        expect(_seqStack.Length()).toBe(0);
        expect(_seqStack.Pop()).toBeFalsy();
    });
    it('#5. Check empty stack.', function () {
        // _seqStack.InitList();
        _seqStack.Push(1);
        _seqStack.Push(2);
        _seqStack.Push(3);
        expect(_seqStack.IsEmpty()).toBe(false);
        expect(_seqStack.Length()).toBe(3);
        _seqStack.ClearAll();
        expect(_seqStack.Length()).toBe(0);
    });
    xit('#6. Check IsExist.', function () {
        // _seqStack.InitList();
        // _seqStack.AppendElement(1);
        // _seqStack.AppendElement(2);
        // _seqStack.AppendElement(2);
        // expect(_seqStack.IsExist(1)).toBe(true);
        // expect(_seqStack.IsExist(2)).toBe(true);
        // expect(_seqStack.IsExist(3)).toBe(false);
    });
    xit('#7. Check Print.', function () {
        // _seqStack.InitList();
        // _seqStack.AppendElement(1);
        // _seqStack.AppendElement(2);
        // _seqStack.AppendElement(3);
        // expect(_seqStack.Print(',')).toBe('1,2,3');
        // expect(_seqStack.Print('-')).toBe('1-2-3');
        // expect(_seqStack.Print()).toBe('1,2,3');
    });
});
//# sourceMappingURL=SequenceStack.spec.js.map