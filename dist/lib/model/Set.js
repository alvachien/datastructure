/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.ts
 *
 */
/**
 * Class Set.
 *
 * Backed by a Map so that values are stored by identity (objects do not
 * collide via string coercion) and `values()` returns the original values.
 */
export class Set {
    _data = new Map();
    constructor() {
    }
    has(val) {
        return this._data.has(val);
    }
    add(val) {
        if (!this.has(val)) {
            this._data.set(val, val);
            return true;
        }
        return false;
    }
    remove(val) {
        return this._data.delete(val);
    }
    clear() {
        this._data.clear();
    }
    size() {
        return this._data.size;
    }
    /**
     * @deprecated Alias kept for backward compatibility; prefer `size()`.
     */
    sizeLegacy() {
        return this.size();
    }
    values() {
        return Array.from(this._data.values());
    }
    /**
     * @deprecated Alias kept for backward compatibility; prefer `values()`.
     */
    valuesLegacy() {
        return this.values();
    }
    union(otherSet) {
        const unionSet = new Set();
        for (const v of this.values()) {
            unionSet.add(v);
        }
        for (const v of otherSet.values()) {
            unionSet.add(v);
        }
        return unionSet;
    }
    intersection(otherSet) {
        const intersectionSet = new Set();
        for (const v of this.values()) {
            if (otherSet.has(v)) {
                intersectionSet.add(v);
            }
        }
        return intersectionSet;
    }
    difference(otherSet) {
        const differenceSet = new Set();
        for (const v of this.values()) {
            if (!otherSet.has(v)) {
                differenceSet.add(v);
            }
        }
        return differenceSet;
    }
    /**
     * Returns true when every element of this set is also in `otherSet`.
     */
    subset(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        for (const v of this.values()) {
            if (!otherSet.has(v)) {
                return false;
            }
        }
        return true;
    }
}
//# sourceMappingURL=Set.js.map