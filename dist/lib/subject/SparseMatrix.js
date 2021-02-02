/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
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
export class Trituple {
    get Row() {
        return this._row;
    }
    set Row(row) {
        this._row = row;
    }
    get Column() {
        return this._column;
    }
    set Column(cln) {
        this._column = cln;
    }
    get Value() {
        return this._val;
    }
    set Value(val) {
        this._val = val;
    }
}
/**
 * Sparse Matrix: Matrix with lots of empty entities inside
 */
export class SparseMatrix {
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    constructor(rowcount, colcount) {
        if (rowcount <= 0
            || colcount <= 0) {
            throw new Error('Row count and Column count must be positive!');
        }
        this._maxrow = rowcount;
        this._maxcol = colcount;
        this._listTerms = new SequenceList();
    }
    /**
     * Terms
     */
    get Terms() {
        return this._listTerms;
    }
    /**
     * Rows
     */
    get Row() {
        return this._maxrow;
    }
    /**
     * Columns
     */
    get Column() {
        return this._maxcol;
    }
    /**
     * Returns the list of actual rows
     */
    get Rows() {
        const sl = new SequenceList();
        for (let i = 0; i < this._listTerms.Length(); i++) {
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
    get Columns() {
        const sl = new SequenceList();
        for (let i = 0; i < this._listTerms.Length(); i++) {
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
    GetElement(row, col) {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            return null;
        }
        for (let i = 0; i < this._listTerms.Length(); i++) {
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
    IsExist(row, col) {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            throw new Error('Invalid input');
        }
        for (let i = 0; i < this._listTerms.Length(); i++) {
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
    InsertElement(row, col, val) {
        try {
            if (this.IsExist(row, col)) {
                return false;
            }
            else {
                const nt = new Trituple();
                // Try the destructure, failed!!!
                // let { nt.Row, nt.Column, nt.Value } = {row, col, val};
                nt.Row = row;
                nt.Column = col;
                nt.Value = val;
                this._listTerms.AppendElement(nt);
                return true;
            }
        }
        catch (exp) {
            throw exp;
        }
    }
    /**
     * Transpose
     */
    Transpose() {
        const sm = new SparseMatrix(this._maxcol, this._maxrow);
        for (let i = 0; i < this._listTerms.Length(); i++) {
            const it2 = new Trituple();
            const it = this._listTerms.GetElement(i);
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
    Add(other) {
        return null;
    }
    /**
     * Multipy another matrix
     * @param other matrix which used to multiply
     */
    Multiply(other) {
        return null;
    }
}
//# sourceMappingURL=SparseMatrix.js.map