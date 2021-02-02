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
export class HashTable {
    constructor() {
        this._table = [];
    }
    put(key, value) {
        let pos = this.generateLoseHashCode(key);
        this._table[pos] = value;
    }
    remove(key) {
        this._table[this.generateLoseHashCode(key)] = undefined;
    }
    get(key) {
        return this._table[this.generateLoseHashCode(key)];
    }
    generateLoseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    generatedjb2HashCode(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }
}
//# sourceMappingURL=HashTable.js.map