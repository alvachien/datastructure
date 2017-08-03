/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */

import { IStack } from './IStack';

export class SequenceStack<T> implements IStack<T> {
    constructor() {
    }

    private _data: T[] = [];

    public Length(): number {
        return this._data.length;
    }

    public IsEmpty(): boolean {
        return this._data.length === 0;
    }

    public Push(elem: T): boolean {
        this._data.push(elem);

        return false;
    }

    public Pop(): T | null {
        if (this._data.length === 0) {
            return null;
        }

        const pi: T = this._data[this._data.length - 1];
        this._data.splice(this._data.length - 1, 1);
        return pi;
    }

    public Peek(): T | null {
        if (this._data.length === 0) {
            return null;
        }

        const pi: T = this._data[this._data.length - 1];
        return pi;
    }

    public ClearAll() : boolean {
        this._data = [];
        return true;
    }
}
