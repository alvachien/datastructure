"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: PriorityQueue.spec.ts
 * Priority queue
 *
 */
var PriorityQueue_1 = require("../../lib/subject/PriorityQueue");
describe('Test PriorityQueue', function () {
    var _seqQueue;
    beforeEach(function () {
        _seqQueue = new PriorityQueue_1.PriorityQueue();
    });
    it("#1. Check init", function () {
        expect(_seqQueue).toBeTruthy();
    });
    it("#2. Check empty Queue.", function () {
        expect(_seqQueue.IsEmpty()).toBe(true);
        expect(_seqQueue.Length()).toBe(0);
    });
    it("#3. Check enqueue on Queue.", function () {
        _seqQueue.Enqueue(1, 2);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(1);
        _seqQueue.Enqueue(2, 1);
        expect(_seqQueue.IsEmpty()).toBe(false);
        expect(_seqQueue.Length()).toBe(2);
        expect(_seqQueue.Peek()).toBe(2);
    });
});
//# sourceMappingURL=PriorityQueue.spec.js.map