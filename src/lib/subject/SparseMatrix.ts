/**
 * @license
 * SparseMatrix.ts
 * (C) Alva Chien, 2017
 */

import { SequenceList } from '../model';

/**
 * SparseMatrix: Matrix with lots of empty entities inside
 *
 */

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
 * Sparse Matrix
 */
export class SparseMatrix<T> {
    private _listTerms: SequenceList<Trituple<T>>;

    constructor() {
        this._listTerms = new SequenceList<Trituple<T>>();
    }

    public Transpose() : SparseMatrix<T> {
        return null;
    }

    public Add(other: SparseMatrix<T>) : SparseMatrix<T> {
        return null;
    }

    public Multiple(other: SparseMatrix<T>): SparseMatrix<T> {
        return null;
    }
}


