/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceList.ts
 *
 */

import { IList } from './IList';

export class SequenceList<T> implements IList<T> {
    private _data: T[] = [];

    /**
     * Constructor
     */
    constructor() {
    }

    /**
     * Initialize the whole list
     */
    public InitList() {
        this._data = [];
    }

    /**
     * Check the list is empty or not
     */
    public IsEmpty(): boolean {
        return this._data.length === 0;
    }

    /**
     * Clean the whole list
     */
    public ClearAll(): boolean {
        this._data = [];
        return true;
    }

    /**
     * Get the element at the specified index, return null if not found
     * @param index index
     */
    public GetElement(index: number): T | null {
        if (this._data.length === 0) {
            return null;
        }

        if (index >= 0 && index < this._data.length) {
            return this._data[index];
        }

        return null;
    }

    /**
     * Insert the element at the specified index
     * @param index Specified index for insert
     * @param elem New element for insert
     */
    public InsertElement(index: number, elem: T): boolean {
        if (index < 0 || index >= this._data.length || index === undefined || index === null
            || elem === undefined || elem === null) {
            return false;
        }

        if (index < this._data.length) {
            for (let i = this._data.length - 1; i >= index; i --) {
                this._data[i + 1] = this._data[i];
            }

            this._data[index] = elem;
        }

        return true;
    }

    /**
     * Append the element to the list
     * @param elem Element to append
     */
    public AppendElement(elem: T): number {
        return this._data.push(elem);
    }

    /**
     * Delete the element from the list
     * @param index Specified index
     */
    public DeleteElement(index: number): boolean {
        if (index < 0 || index >= this._data.length) {
            return false;
        }

        if (index < this._data.length - 1) {
            for (let k = index; k < this._data.length; k++) {
                this._data[k - 1] = this._data[k];
            }
        }

        delete this._data[this._data.length - 1];

        return true;
    }

    /**
     * Length of the list
     */
    public Length(): number {
        return this._data.length;
    }

    /**
     * Print out the whole list into string
     */
    public Print(): string {
        return this._data.toString();
        // for(let idx = 0; idx <this._data.length; idx++) {
        // }
    }

    /**
     * Check the specified value existed or not
     * @param val Value for checking with existence
     */
    public IsExist(val: T): boolean {
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i] === val) {
                return true;
            }
        }

        return false;
    }
}
