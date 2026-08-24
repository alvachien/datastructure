/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceList.ts
 *
 */
/**
 * Sequence List
 */
export class SequenceList {
    _data = [];
    _cursor = -1; // For iterator
    /**
     * Constructor
     */
    constructor() {
    }
    next(...args) {
        if (this._cursor === -1) {
            this._cursor = 0;
        }
        if (this._cursor < this._data.length) {
            return {
                done: false,
                value: this._data[this._cursor++]
            };
        }
        else {
            this._cursor = -1;
            return {
                done: true,
                value: undefined
            };
        }
    }
    [Symbol.iterator]() {
        return this;
    }
    return(value) {
        throw new Error('Method not implemented.');
    }
    throw(e) {
        throw new Error('Method not implemented.');
    }
    /**
     * Initialize the whole list
     */
    InitList() {
        this._data = [];
    }
    /**
     * Check the list is empty or not
     */
    IsEmpty() {
        return this._data.length === 0;
    }
    /**
     * Clean the whole list
     */
    ClearAll() {
        this._data = [];
        return true;
    }
    /**
     * Get the element at the specified index, return null if not found
     * @param index index
     */
    GetElement(index) {
        if (this._data.length === 0) {
            return null;
        }
        if (index >= 0 && index < this._data.length) {
            return this._data[index];
        }
        return null;
    }
    /**
     * Insert the element at the specified index
     * @param index Specified index for insert; index === length appends to the tail
     * @param elem New element for insert
     */
    InsertElement(index, elem) {
        if (index < 0 || index > this._data.length) {
            return false;
        }
        this._data.splice(index, 0, elem);
        return true;
    }
    /**
     * Append the element to the list
     * @param elem Element to append
     */
    AppendElement(elem) {
        return this._data.push(elem);
    }
    /**
     * Delete the element from the list
     * @param index Specified index
     */
    DeleteElement(index) {
        if (index < 0 || index >= this._data.length) {
            return false;
        }
        this._data.splice(index, 1);
        return true;
    }
    /**
     * Length of the list
     */
    Length() {
        return this._data.length;
    }
    /**
     * Print out the whole list into string
     */
    Print(splitter) {
        return this._data.join(splitter);
    }
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    IsExist(val) {
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i] === val) {
                return true;
            }
        }
        return false;
    }
}
//# sourceMappingURL=SequenceList.js.map