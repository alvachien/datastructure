/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */
/**
 * Sequence Stack
 */
export class SequenceStack {
    /**
     * Constructor
     */
    constructor() {
        this._data = [];
    }
    /**
     * Length
     */
    Length() {
        return this._data.length;
    }
    /**
     * Is empty
     */
    IsEmpty() {
        return this._data.length === 0;
    }
    /**
     * Push
     * @param elem Element to push
     */
    Push(elem) {
        return this._data.push(elem);
    }
    /**
     * Pop an element
     *
     */
    Pop() {
        if (this._data.length === 0) {
            return null;
        }
        const pi = this._data[this._data.length - 1];
        this._data.splice(this._data.length - 1, 1);
        return pi;
    }
    /**
     * Peek the stack
     */
    Peek() {
        if (this._data.length === 0) {
            return null;
        }
        const pi = this._data[this._data.length - 1];
        return pi;
    }
    /**
     * Clear all
     */
    ClearAll() {
        this._data = [];
        return true;
    }
}
//# sourceMappingURL=SequenceStack.js.map