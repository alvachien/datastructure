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
 * Matrix
 */
export class Matrix {
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
        this._inited = false;
        this._cells = [];
    }
    /**
     * Rows
     */
    get RowCount() {
        return this._maxrow;
    }
    /**
     * Columns
     */
    get ColumnCount() {
        return this._maxcol;
    }
    /**
     * Is inited
     */
    get isInited() {
        return this._inited;
    }
    /**
     * init
     * Initialize the current Matrix
     */
    init() {
        if (this._inited) {
            throw new Error('already inited');
        }
        this._cells = [];
        for (let r = 0; r < this._maxrow; r++) {
            const nrow = [];
            for (let j = 0; j < this._maxcol; j++) {
                const ncell = undefined;
                nrow.push(ncell);
            }
            this._cells.push(nrow);
        }
        this._inited = true;
    }
    /**
     * Is a valid position
     * @param pos Position
     */
    isValidPosition(pos) {
        if (pos.row >= 0 && pos.row < this._maxrow && pos.column >= 0 && pos.column < this._maxcol) {
            return true;
        }
        return false;
    }
    /**
     * Get element
     * @param pos Position
     */
    getElement(pos) {
        if (!this.isValidPosition(pos)) {
            return undefined;
        }
        return this._cells[pos.row][pos.column];
    }
    /**
     * Set element
     * @param pos Position
     */
    setElement(pos, elem) {
        if (!this.isValidPosition(pos)) {
            return undefined;
        }
        this._cells[pos.row][pos.column] = elem;
    }
    /**
     * Get slash output
     */
    getSlashOutputPos() {
        if (this._maxrow <= 1 || this._maxcol <= 1) {
            throw new Error('Wrong parameter');
        }
        const arrst = [];
        for (let i = 0; i < this._maxrow + this._maxcol - 1; i++) {
            const arpos = [];
            for (let j = 0; j <= i; j++) {
                if (j <= this._maxrow - 1 && i <= this._maxcol + j - 1) {
                    arpos.push({ row: j, column: i - j });
                }
            }
            arpos.sort((a, b) => {
                return a.row - b.row;
            });
            if (arpos.length > 0) {
                arrst.push(arpos);
            }
        }
        return arrst;
    }
    /**
     * Get backslash positions
     */
    getBackSlashOutputPos() {
        if (this._maxrow !== this._maxcol || this._maxrow <= 1) {
            throw new Error('Wrong parameter');
        }
        const arrst = [];
        for (let i = 0; i <= this._maxrow - 1; i++) {
            const arpos = [];
            for (let j = 0; j <= i; j++) {
                arpos.push({ row: i - j, column: this._maxrow - 1 - j });
            }
            if (arpos.length > 0) {
                arpos.sort((a, b) => {
                    return a.row - b.row;
                });
                arrst.push(arpos);
            }
        }
        for (let i = 1; i <= this._maxrow - 1; i++) {
            const arpos = [];
            for (let j = 0; j <= this._maxrow - 1 - i; j++) {
                arpos.push({ row: i + j, column: j });
            }
            if (arpos.length > 0) {
                arpos.sort((a, b) => {
                    return a.row - b.row;
                });
                arrst.push(arpos);
            }
        }
        return arrst;
    }
}
//# sourceMappingURL=Matrix.js.map