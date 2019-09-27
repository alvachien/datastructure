"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: HashTable.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HashTable = /** @class */ (function () {
    function HashTable() {
        this._table = [];
    }
    HashTable.prototype.put = function (key, value) {
        var pos = this.generateLoseHashCode(key);
        this._table[pos] = value;
    };
    HashTable.prototype.remove = function (key) {
        this._table[this.generateLoseHashCode(key)] = undefined;
    };
    HashTable.prototype.get = function (key) {
        return this._table[this.generateLoseHashCode(key)];
    };
    HashTable.prototype.generateLoseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    HashTable.prototype.generatedjb2HashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
//# sourceMappingURL=HashTable.js.map