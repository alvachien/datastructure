/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Matrix.ts
 *
 */
/**
 * Matrix position
 */
export interface MatrixPosIntf {
    row: number;
    column: number;
}
/**
 * Matrix
 */
export declare class Matrix<T> {
    private _cells;
    private _maxcol;
    private _maxrow;
    private _inited;
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    constructor(rowcount: number, colcount: number);
    /**
     * Rows
     */
    get RowCount(): number;
    /**
     * Columns
     */
    get ColumnCount(): number;
    /**
     * Is inited
     */
    get isInited(): boolean;
    /**
     * init
     * Initialize the current Matrix
     */
    init(): void;
    /**
     * Is a valid position
     * @param pos Position
     */
    isValidPosition(pos: MatrixPosIntf): boolean;
    /**
     * Get element
     * @param pos Position
     */
    getElement(pos: MatrixPosIntf): T;
    /**
     * Set element
     * @param pos Position
     */
    setElement(pos: MatrixPosIntf, elem: T): void;
    /**
     * Get slash output
     */
    getSlashOutputPos(): MatrixPosIntf[][];
    /**
     * Get backslash positions
     */
    getBackSlashOutputPos(): MatrixPosIntf[][];
}
