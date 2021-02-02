/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceQueue.ts
 *
 */
/**
 * Sequence Queue
 */
export class SequenceQueue {
    constructor() {
        this._data = [];
    }
    /**
     * The length of the whole stack
     */
    Length() {
        return this._data.length;
    }
    /**
     * Is empty? true means it is empty
     */
    IsEmpty() {
        return this._data.length === 0;
    }
    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    Enqueue(elem) {
        this._data.push(elem);
        return true;
    }
    /**
     * Peek the top element without remove it, returns the top element.
     */
    Peek() {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data[0];
    }
    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    Dequeue() {
        if (this._data.length === 0) {
            return undefined;
        }
        return this._data.shift();
    }
    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll() {
        this._data = [];
        return true;
    }
}
//# sourceMappingURL=SequenceQueue.js.map