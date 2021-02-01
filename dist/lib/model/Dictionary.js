"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Dictionary.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
/**
 * Dictionary
 * Key: string
 * Value: Template X
 */
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this._data = {};
    }
    Dictionary.prototype.has = function (key) {
        return key in this._data;
    };
    Dictionary.prototype.set = function (key, value) {
        this._data[key] = value;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this._data[key];
            return true;
        }
        return false;
    };
    Dictionary.prototype.get = function (key) {
        return this.has(key) ? this._data[key] : undefined;
    };
    Dictionary.prototype.values = function () {
        var ret = [];
        for (var key in this._data) {
            if (this.has(key)) {
                ret.push(this._data[key]);
            }
        }
        return ret;
    };
    Dictionary.prototype.keys = function () {
        var ret = [];
        for (var key in this._data) {
            if (this.has(key)) {
                ret.push(key);
            }
        }
        return ret;
    };
    Dictionary.prototype.clear = function () {
        this._data = {};
    };
    Dictionary.prototype.size = function () {
        return Object.keys(this._data).length;
    };
    Dictionary.prototype.sizeLegacy = function () {
        var count = 0;
        for (var prop in this._data) {
            if (this._data.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map