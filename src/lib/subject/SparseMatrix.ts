/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SparseMatrix.ts
 * 
 */

import { SequenceList } from '../model';

/**
 * Trituple
 */
export class Trituple<T> {
    private _row: number;
    private _column: number;
    private _val: T;

    get Row(): number {
        return this._row;
    }
    set Row(row: number) {
        this._row = row;
    }
    get Column(): number {
        return this._column;
    }
    set Column(cln: number) {
        this._column = cln;
    }
    get Value(): T {
        return this._val;
    }
    set Value(val: T) {
        this._val = val;
    }
}

/**
 * Sparse Matrix: Matrix with lots of empty entities inside
 */
export class SparseMatrix<T> {
    private _listTerms: SequenceList<Trituple<T>>;
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
        this._listTerms = new SequenceList<Trituple<T>>();
    }

    /**
     * Terms
     */
    get Terms(): SequenceList<Trituple<T>> {
        return this._listTerms;
    }
    

    /**
     * Transpose
     */
    public Transpose(): SparseMatrix<T> {
        return null;
    }

    /**
     * Add another matrix
     * @param other matrix which used to add
     */
    public Add(other: SparseMatrix<T>): SparseMatrix<T> {
        return null;
    }

    /**
     * Multipy another matrix
     * @param other matrix which used to multiply
     */
    public Multiply(other: SparseMatrix<T>): SparseMatrix<T> {
        return null;
    }
}

