"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceStack = /** @class */ (function () {
    function SequenceStack() {
        this._data = [];
    }
    SequenceStack.prototype.Length = function () {
        return this._data.length;
    };
    SequenceStack.prototype.IsEmpty = function () {
        return this._data.length === 0;
    };
    SequenceStack.prototype.Push = function (elem) {
        this._data.push(elem);
        return false;
    };
    SequenceStack.prototype.Pop = function () {
        if (this._data.length === 0) {
            return null;
        }
        var pi = this._data[this._data.length - 1];
        this._data.splice(this._data.length - 1, 1);
        return pi;
    };
    SequenceStack.prototype.Peek = function () {
        if (this._data.length === 0) {
            return null;
        }
        var pi = this._data[this._data.length - 1];
        return pi;
    };
    SequenceStack.prototype.ClearAll = function () {
        this._data = [];
        return true;
    };
    return SequenceStack;
}());
exports.SequenceStack = SequenceStack;
//# sourceMappingURL=SequenceStack.js.map