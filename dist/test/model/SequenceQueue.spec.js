"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceQueue.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceQueue_1 = require("../../lib/model/SequenceQueue");
describe('Test SequenceQueue', function () {
    var _seqQueue;
    beforeEach(function () {
        _seqQueue = new SequenceQueue_1.SequenceQueue();
    });
    it("#1. Check init", function () {
        expect(_seqQueue).toBeTruthy();
    });
    it("#2. Check empty Queue.", function () {
        expect(_seqQueue.IsEmpty()).toBe(true);
        expect(_seqQueue.Length()).toBe(0);
    });
    it("#3. Check enqueue on Queue.", function () {
        _seqQueue.Enqueue(1);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(1);
        _seqQueue.Enqueue(2);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(2);
    });
    it("#4. Check dequeue of Queue.", function () {
        _seqQueue.Enqueue(1);
        _seqQueue.Enqueue(2);
        _seqQueue.Enqueue(3);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(3);
        expect(_seqQueue.Dequeue()).toBeTruthy();
        expect(_seqQueue.Length()).toBe(2);
        expect(_seqQueue.Dequeue()).toBeTruthy();
        expect(_seqQueue.Length()).toBe(1);
        expect(_seqQueue.Dequeue()).toBeTruthy();
        expect(_seqQueue.Length()).toBe(0);
        expect(_seqQueue.Dequeue()).toBeFalsy();
    });
    it("#5. Check empty Queue.", function () {
        _seqQueue.Enqueue(1);
        _seqQueue.Enqueue(2);
        _seqQueue.Enqueue(3);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(3);
        _seqQueue.ClearAll();
        expect(_seqQueue.Length()).toBe(0);
    });
    it("#6. Check IsExist.", function () {
        // _seqQueue.InitList();
        // _seqQueue.AppendElement(1);
        // _seqQueue.AppendElement(2);
        // _seqQueue.AppendElement(2);
        // expect(_seqQueue.IsExist(1)).toBe(true);
        // expect(_seqQueue.IsExist(2)).toBe(true);
        // expect(_seqQueue.IsExist(3)).toBe(false);
    });
    it("#7. Check Print.", function () {
        // _seqQueue.InitList();
        // _seqQueue.AppendElement(1);
        // _seqQueue.AppendElement(2);
        // _seqQueue.AppendElement(3);
        // expect(_seqQueue.Print(',')).toBe('1,2,3');
        // expect(_seqQueue.Print('-')).toBe('1-2-3');
        // expect(_seqQueue.Print()).toBe('1,2,3');
    });
});
//# sourceMappingURL=SequenceQueue.spec.js.map