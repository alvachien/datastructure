"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceList.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceList = void 0;
/**
 * Sequence List
 */
var SequenceList = /** @class */ (function () {
    /**
     * Constructor
     */
    function SequenceList() {
        this._data = [];
    }
    /**
     * Initialize the whole list
     */
    SequenceList.prototype.InitList = function () {
        this._data = [];
    };
    /**
     * Check the list is empty or not
     */
    SequenceList.prototype.IsEmpty = function () {
        return this._data.length === 0;
    };
    /**
     * Clean the whole list
     */
    SequenceList.prototype.ClearAll = function () {
        this._data = [];
        return true;
    };
    /**
     * Get the element at the specified index, return null if not found
     * @param index index
     */
    SequenceList.prototype.GetElement = function (index) {
        if (this._data.length === 0) {
            return null;
        }
        if (index >= 0 && index < this._data.length) {
            return this._data[index];
        }
        return null;
    };
    /**
     * Insert the element at the specified index
     * @param index Specified index for insert
     * @param elem New element for insert
     */
    SequenceList.prototype.InsertElement = function (index, elem) {
        if (index < 0 || index >= this._data.length || index === undefined || index === null
            || elem === undefined || elem === null) {
            return false;
        }
        if (index < this._data.length) {
            for (var i = this._data.length - 1; i >= index; i--) {
                this._data[i + 1] = this._data[i];
            }
            this._data[index] = elem;
        }
        return true;
    };
    /**
     * Append the element to the list
     * @param elem Element to append
     */
    SequenceList.prototype.AppendElement = function (elem) {
        return this._data.push(elem);
    };
    /**
     * Delete the element from the list
     * @param index Specified index
     */
    SequenceList.prototype.DeleteElement = function (index) {
        if (index < 0 || index >= this._data.length) {
            return false;
        }
        if (index < this._data.length - 1) {
            for (var k = index; k < this._data.length - 1; k++) {
                this._data[k] = this._data[k + 1];
            }
        }
        delete this._data[this._data.length - 1];
        this._data.length--;
        return true;
    };
    /**
     * Length of the list
     */
    SequenceList.prototype.Length = function () {
        return this._data.length;
    };
    /**
     * Print out the whole list into string
     */
    SequenceList.prototype.Print = function (splitter) {
        return this._data.join(splitter);
    };
    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    SequenceList.prototype.IsExist = function (val) {
        for (var i = 0; i < this._data.length; i++) {
            if (this._data[i] === val) {
                return true;
            }
        }
        return false;
    };
    return SequenceList;
}());
exports.SequenceList = SequenceList;
//# sourceMappingURL=SequenceList.js.map