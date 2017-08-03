/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Matrix.ts
 * 
 */

import { SequenceList } from '../model';

 /**
  * Matrix
  */
export class Matrix<T> {
    private _listRows: SequenceList<T>;
    private _maxcol: number;
    private _maxrow: number;

    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    constructor(rowcount: number, colcount: number) {
        if (rowcount <= 0
            || colcount <= 0) {
            throw new Error('Row count and Column count must be positive!');
        }

        this._maxrow = rowcount;
        this._maxcol = colcount;
        this._listRows = new SequenceList<T>();
    }

    /**
     * Rows
     */
    get Row(): number {
        return this._maxrow;
    }

    /**
     * Columns
     */
    get Column(): number {
        return this._maxcol;
    }
   
}
