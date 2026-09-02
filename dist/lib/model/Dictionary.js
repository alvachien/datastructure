/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Dictionary.ts
 *
 */
/**
 * Dictionary
 * Key: string
 * Value: Template X
 */
export class Dictionary {
    _data;
    constructor() {
        this._data = {};
    }
    has(key) {
        return key in this._data;
    }
    set(key, value) {
        this._data[key] = value;
    }
    remove(key) {
        if (this.has(key)) {
            delete this._data[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? this._data[key] : undefined;
    }
    /**
     * Get the value for a key, asserting it exists.
     * @param key Key
     * @returns The value, or undefined if the key is absent
     * @deprecated Prefer `get` and handle the `undefined` case explicitly.
     */
    getOrThrow(key) {
        if (!this.has(key)) {
            throw new Error(`Key not found: ${key}`);
        }
        return this._data[key];
    }
    values() {
        const ret = [];
        for (const key in this._data) {
            if (this.has(key)) {
                ret.push(this._data[key]);
            }
        }
        return ret;
    }
    keys() {
        const ret = [];
        for (const key in this._data) {
            if (this.has(key)) {
                ret.push(key);
            }
        }
        return ret;
    }
    clear() {
        this._data = {};
    }
    size() {
        return Object.keys(this._data).length;
    }
    sizeLegacy() {
        let count = 0;
        for (const prop in this._data) {
            if (Object.hasOwn(this._data, prop)) {
                ++count;
            }
        }
        return count;
    }
}
//# sourceMappingURL=Dictionary.js.map