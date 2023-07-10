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
/**
 * Class Set.
 */
export class Set {
    constructor() {
        this._data = {};
    }
    has(val) {
        return this._data.hasOwnProperty(val);
    }
    add(val) {
        if (!this.has(val)) {
            this._data[val] = val;
            return true;
        }
        return false;
    }
    remove(val) {
        if (this.has(val)) {
            delete this._data[val];
            return true;
        }
        return false;
    }
    clear() {
        this._data = {};
    }
    size() {
        return Object.keys(this._data).length;
    }
    sizeLegacy() {
        let count = 0;
        for (let prop in this._data) {
            if (this._data.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    }
    values() {
        return Object.keys(this._data);
    }
    valuesLegacy() {
        let keys = [];
        for (let key in this._data) {
            keys.push(key);
        }
        return keys;
    }
    union(otherSet) {
        let unionSet = new Set();
        let vals = this.values();
        for (let i = 0; i < vals.length; i++) {
            unionSet.add(vals[i]);
        }
        vals = otherSet.values();
        for (let i = 0; i < vals.length; i++) {
            unionSet.add(vals[i]);
        }
        return unionSet;
    }
    intersection(otherSet) {
        let intersectionSet = new Set();
        let vals = this.values();
        for (let i = 0; i < vals.length; i++) {
            if (otherSet.has(vals[i])) {
                intersectionSet.add(vals[i]);
            }
        }
        return intersectionSet;
    }
    difference(otherSet) {
        let differenceSet = new Set();
        let vals = this.values();
        for (let i = 0; i < vals.length; i++) {
            if (!otherSet.has(vals[i])) {
                differenceSet.add(vals[i]);
            }
        }
        return differenceSet;
    }
    subset(otherSet) {
        if (this.size > otherSet.size) {
            return false;
        }
        else {
            let vals = this.values();
            for (let i = 0; i < vals.length; i++) {
                if (!otherSet.has(vals[i])) {
                    return false;
                }
            }
        }
        return true;
    }
}
//# sourceMappingURL=Set.js.map