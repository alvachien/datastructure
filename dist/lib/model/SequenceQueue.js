"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceQueue.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceQueue = /** @class */ (function () {
    function SequenceQueue() {
        this._data = [];
    }
    /**
     * The length of the whole stack
     */
    SequenceQueue.prototype.Length = function () {
        return this._data.length;
    };
    /**
     * Is empty? true means it is empty
     */
    SequenceQueue.prototype.IsEmpty = function () {
        return this._data.length === 0;
    };
    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    SequenceQueue.prototype.Enqueue = function (elem) {
        this._data.push(elem);
        return true;
    };
    /**
     * Peek the top element without remove it, returns the top element.
     */
    SequenceQueue.prototype.Peek = function () {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data[0];
    };
    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    SequenceQueue.prototype.Dequeue = function () {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data.shift();
    };
    /**
     * Clear all elements, returns the result: true means suces
     */
    SequenceQueue.prototype.ClearAll = function () {
        this._data = [];
        return true;
    };
    return SequenceQueue;
}());
exports.SequenceQueue = SequenceQueue;
//# sourceMappingURL=SequenceQueue.js.map