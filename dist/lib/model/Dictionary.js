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
/**
 * Dictionary
 * Key: string
 * Value: Template X
 */
export class Dictionary {
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
    values() {
        const ret = [];
        for (let key in this._data) {
            if (this.has(key)) {
                ret.push(this._data[key]);
            }
        }
        return ret;
    }
    keys() {
        const ret = [];
        for (let key in this._data) {
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
        for (let prop in this._data) {
            if (this._data.hasOwnProperty(prop)) {
                ++count;
            }
        }
        return count;
    }
}
//# sourceMappingURL=Dictionary.js.map