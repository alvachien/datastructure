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

    /**
     * Returns the list of actual rows
     */
    get Rows(): SequenceList<number> {
        let sl: SequenceList<number> = new SequenceList<number>();

        for(let i: number = 0; i < this._listTerms.Length(); i ++) {
            const elem = this._listTerms.GetElement(i);
            if (!sl.IsExist(elem.Row)) {
                sl.AppendElement(elem.Row);
            }
        }
        
        return sl;
    }

    /**
     * Returns the list of actual column
     */
    get Columns(): SequenceList<number> {
        let sl: SequenceList<number> = new SequenceList<number>();

        for(let i: number = 0; i < this._listTerms.Length(); i ++) {
            const elem = this._listTerms.GetElement(i);
            if (!sl.IsExist(elem.Column)) {
                sl.AppendElement(elem.Column);
            }
        }
        
        return sl;
    }
    
    /**
     * Retrieve an element at specified row and specified column
     * @param row Specified row
     * @param col Specified column
     */
    public GetElement(row: number, col: number): T | null {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            return null;
        }

        for(let i: number = 0; i < this._listTerms.Length(); i++) {
            if (row === this._listTerms.GetElement(i).Row
                && col === this._listTerms.GetElement(i).Column) {
                return this._listTerms.GetElement(i).Value;
            }
        }

        return null;
    }

    /**
     * Check whether the element of specified row and column exist or not
     * @param row Specified row
     * @param col Specified column
     */
    public IsExist(row: number, col: number): boolean {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            throw new Error('Invalid input');
        }

        for(let i: number = 0; i < this._listTerms.Length(); i++) {
            if (row === this._listTerms.GetElement(i).Row
                && col === this._listTerms.GetElement(i).Column) {
                return true;
            }
        }

        return false;
    }

    /**
     * Insert an element, return true if succeed
     * @param row Specified row
     * @param col Specified column 
     * @param val Value
     */
    public InsertElement(row: number, col: number, val: T): boolean {
        try {
            if (this.IsExist(row, col)) {
                return false;
            } else {
                let nt: Trituple<T> = new Trituple<T>();
                // Try the destructure, failed!!!
                //let { nt.Row, nt.Column, nt.Value } = {row, col, val};
                nt.Row = row;
                nt.Column = col;
                nt.Value = val;
                this._listTerms.AppendElement(nt);

                return true;
            }
        } catch(exp) {
            throw exp;
        }
    }

    /**
     * Transpose
     */
    public Transpose(): SparseMatrix<T> {
        let sm: SparseMatrix<T> = new SparseMatrix<T>(this._maxcol, this._maxrow);

        for(let i = 0; i < this._listTerms.Length(); i++) {
            let it2: Trituple<T> = new Trituple<T>();
            let it = this._listTerms.GetElement(i);
            it2.Column = it.Row;
            it2.Row = it.Column;
            it2.Value = it.Value;
            sm.Terms.AppendElement(it2);
        }

        return sm;
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
    public Multiply(other: number | SparseMatrix<T>): SparseMatrix<T> {
        return null;
    }
}

