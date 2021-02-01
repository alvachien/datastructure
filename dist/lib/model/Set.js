"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Set = void 0;
/**
 * Class Set.
 */
var Set = /** @class */ (function () {
    function Set() {
        this._data = {};
    }
    Set.prototype.has = function (val) {
        return this._data.hasOwnProperty(val);
    };
    Set.prototype.add = function (val) {
        if (!this.has(val)) {
            this._data[val] = val;
            return true;
        }
        return false;
    };
    Set.prototype.remove = function (val) {
        if (this.has(val)) {
            delete this._data[val];
            return true;
        }
        return false;
    };
    Set.prototype.clear = function () {
        this._data = {};
    };
    Set.prototype.size = function () {
        return Object.keys(this._data).length;
    };
    Set.prototype.sizeLegacy = function () {
        var count = 0;
        for (var prop in this._data) {
            if (this._data.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    };
    Set.prototype.values = function () {
        return Object.keys(this._data);
    };
    Set.prototype.valuesLegacy = function () {
        var keys = [];
        for (var key in this._data) {
            keys.push(key);
        }
        return keys;
    };
    Set.prototype.union = function (otherSet) {
        var unionSet = new Set();
        var vals = this.values();
        for (var i = 0; i < vals.length; i++) {
            unionSet.add(vals[i]);
        }
        vals = otherSet.values();
        for (var i = 0; i < vals.length; i++) {
            unionSet.add(vals[i]);
        }
        return unionSet;
    };
    Set.prototype.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var vals = this.values();
        for (var i = 0; i < vals.length; i++) {
            if (otherSet.has(vals[i])) {
                intersectionSet.add(vals[i]);
            }
        }
        return intersectionSet;
    };
    Set.prototype.difference = function (otherSet) {
        var differenceSet = new Set();
        var vals = this.values();
        for (var i = 0; i < vals.length; i++) {
            if (!otherSet.has(vals[i])) {
                differenceSet.add(vals[i]);
            }
        }
        return differenceSet;
    };
    Set.prototype.subset = function (otherSet) {
        if (this.size > otherSet.size) {
            return false;
        }
        else {
            var vals = this.values();
            for (var i = 0; i < vals.length; i++) {
                if (!otherSet.has(vals[i])) {
                    return false;
                }
            }
        }
        return true;
    };
    return Set;
}());
exports.Set = Set;
//# sourceMappingURL=Set.js.map