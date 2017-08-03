/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 */

import { IList } from './IList';

/**
 * Node in static link list
 */
export class StaticLinkListNode<T> {
    private _data: T;
    private _cursor: number = -1;

    constructore() {
        this._cursor = -1;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
    get Cursor(): number {
        return this._cursor;
    }
    set Cursor(cur: number) {
        this._cursor = cur;
    }
}

export class StaticLinkList<T> implements IList<T> {
    private _data: Array<StaticLinkListNode<T>>;

    /**
     * Constructor
     */
    constructor() {
        this._data = new Array<StaticLinkListNode<T>>(200);
    }

    public Length(): number {
        let j = 0;
        for (const it of this._data) {
            if (it.Cursor !== -1) {
                j ++;
            }
        }

        return j;
    }

    public IsEmpty(): boolean {
        return this.Length() === 0;
    }

    public ClearAll(): boolean {
        for (const it of this._data) {
            it.Cursor = -1;
            it.Data = null;
        }

        return true;
    }

    public GetElement(index: number): T | null {
        if (this._data.length === 0) {
            return null;
        }

        // if (index >= 0 && index < this._data.length) {
        //     return this._data[index];
        // }

        return null;
    }

    public InsertElement(index: number, elem: T) : boolean {
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

    public AppendElement(elem: T) : number {
        // return this._data.push(elem);
        return -1;
    }

    public DeleteElement(index: number): boolean {
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

    public Print(): string {
        // TBD
        return '';
    }
}

