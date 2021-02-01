"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceStack = void 0;
/**
 * Sequence Stack
 */
var SequenceStack = /** @class */ (function () {
    /**
     * Constructor
     */
    function SequenceStack() {
        this._data = [];
    }
    /**
     * Length
     */
    SequenceStack.prototype.Length = function () {
        return this._data.length;
    };
    /**
     * Is empty
     */
    SequenceStack.prototype.IsEmpty = function () {
        return this._data.length === 0;
    };
    /**
     * Push
     * @param elem Element to push
     */
    SequenceStack.prototype.Push = function (elem) {
        return this._data.push(elem);
    };
    /**
     * Pop an element
     *
     */
    SequenceStack.prototype.Pop = function () {
        if (this._data.length === 0) {
            return null;
        }
        var pi = this._data[this._data.length - 1];
        this._data.splice(this._data.length - 1, 1);
        return pi;
    };
    /**
     * Peek the stack
     */
    SequenceStack.prototype.Peek = function () {
        if (this._data.length === 0) {
            return null;
        }
        var pi = this._data[this._data.length - 1];
        return pi;
    };
    /**
     * Clear all
     */
    SequenceStack.prototype.ClearAll = function () {
        this._data = [];
        return true;
    };
    return SequenceStack;
}());
exports.SequenceStack = SequenceStack;
//# sourceMappingURL=SequenceStack.js.map