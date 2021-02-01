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
export declare class Trituple<T> {
    private _row;
    private _column;
    private _val;
    get Row(): number;
    set Row(row: number);
    get Column(): number;
    set Column(cln: number);
    get Value(): T;
    set Value(val: T);
}
/**
 * Sparse Matrix: Matrix with lots of empty entities inside
 */
export declare class SparseMatrix<T> {
    private _listTerms;
    private _maxcol;
    private _maxrow;
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    constructor(rowcount: number, colcount: number);
    /**
     * Terms
     */
    get Terms(): SequenceList<Trituple<T>>;
    /**
     * Rows
     */
    get Row(): number;
    /**
     * Columns
     */
    get Column(): number;
    /**
     * Returns the list of actual rows
     */
    get Rows(): SequenceList<number>;
    /**
     * Returns the list of actual column
     */
    get Columns(): SequenceList<number>;
    /**
     * Retrieve an element at specified row and specified column
     * @param row Specified row
     * @param col Specified column
     */
    GetElement(row: number, col: number): T | null;
    /**
     * Check whether the element of specified row and column exist or not
     * @param row Specified row
     * @param col Specified column
     */
    IsExist(row: number, col: number): boolean;
    /**
     * Insert an element, return true if succeed
     * @param row Specified row
     * @param col Specified column
     * @param val Value
     */
    InsertElement(row: number, col: number, val: T): boolean;
    /**
     * Transpose
     */
    Transpose(): SparseMatrix<T>;
    /**
     * Add another matrix
     * @param other matrix which used to add
     */
    Add(other: SparseMatrix<T>): SparseMatrix<T>;
    /**
     * Multipy another matrix
     * @param other matrix which used to multiply
     */
    Multiply(other: number | SparseMatrix<T>): SparseMatrix<T>;
}
