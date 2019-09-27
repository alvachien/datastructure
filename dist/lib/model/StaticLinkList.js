/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 */
/**
 * Node in static link list
 */
export class StaticLinkListNode {
    constructor() {
        this._cursor = -1;
    }
    constructore() {
        this._cursor = -1;
    }
    get Data() {
        return this._data;
    }
    set Data(data) {
        this._data = data;
    }
    get Cursor() {
        return this._cursor;
    }
    set Cursor(cur) {
        this._cursor = cur;
    }
}
export class StaticLinkList {
    /**
     * Constructor
     */
    constructor() {
        this._data = new Array(200);
    }
    Length() {
        let j = 0;
        for (const it of this._data) {
            if (it.Cursor !== -1) {
                j++;
            }
        }
        return j;
    }
    IsEmpty() {
        return this.Length() === 0;
    }
    ClearAll() {
        for (const it of this._data) {
            it.Cursor = -1;
            it.Data = null;
        }
        return true;
    }
    GetElement(index) {
        if (this._data.length === 0) {
            return null;
        }
        // if (index >= 0 && index < this._data.length) {
        //     return this._data[index];
        // }
        return null;
    }
    InsertElement(index, elem) {
        // if (index < 0 || index >= this._data.length) {
        //     return false;
        // }
        // if (index < this._data.length) {
        //     for(let i = this._data.length - 1; i >= index; i --) {
        //         this._data[i + 1] = this._data[i];
        //     }
        //     this._data[index] = elem;
        // }
        return true;
    }
    AppendElement(elem) {
        // return this._data.push(elem);
        return -1;
    }
    DeleteElement(index) {
        // if (index < 0 || index >= this._data.length) {
        //     return false;
        // }
        // if (index < this._data.length - 1) {
        //     for(let k = index; k < this._data.length; k++) {
        //         this._data[k-1] = this._data[k];
        //     }
        // }
        // delete this._data[this._data.length - 1];
        // return true;
        return false;
    }
    Print() {
        // TBD
        return '';
    }
}
//# sourceMappingURL=StaticLinkList.js.map