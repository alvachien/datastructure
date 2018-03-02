"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Matrix.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Matrix
 */
var Matrix = /** @class */ (function () {
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    function Matrix(rowcount, colcount) {
        if (rowcount <= 0
            || colcount <= 0) {
            throw new Error('Row count and Column count must be positive!');
        }
        this._maxrow = rowcount;
        this._maxcol = colcount;
        this._inited = false;
        this._cells = [];
    }
    Object.defineProperty(Matrix.prototype, "RowCount", {
        /**
         * Rows
         */
        get: function () {
            return this._maxrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "ColumnCount", {
        /**
         * Columns
         */
        get: function () {
            return this._maxcol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "isInited", {
        /**
         * Is inited
         */
        get: function () {
            return this._inited;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * init
     * Initialize the current Matrix
     */
    Matrix.prototype.init = function () {
        if (this._inited) {
            throw new Error('already inited');
        }
        this._cells = [];
        for (var r = 0; r < this._maxrow; r++) {
            var nrow = [];
            for (var j = 0; j < this._maxcol; j++) {
                var ncell = undefined;
                nrow.push(ncell);
            }
            this._cells.push(nrow);
        }
        this._inited = true;
    };
    /**
     * Is a valid position
     * @param pos Position
     */
    Matrix.prototype.isValidPosition = function (pos) {
        if (pos.row >= 0 && pos.row < this._maxrow && pos.column >= 0 && pos.column < this._maxcol) {
            return true;
        }
        return false;
    };
    /**
     * Get element
     * @param pos Position
     */
    Matrix.prototype.getElement = function (pos) {
        if (!this.isValidPosition(pos)) {
            return undefined;
        }
        return this._cells[pos.row][pos.column];
    };
    /**
     * Set element
     * @param pos Position
     */
    Matrix.prototype.setElement = function (pos, elem) {
        if (!this.isValidPosition(pos)) {
            return undefined;
        }
        this._cells[pos.row][pos.column] = elem;
    };
    /**
     * Get slash output
     */
    Matrix.prototype.getSlashOutputPos = function () {
        if (this._maxrow <= 1 || this._maxcol <= 1) {
            throw new Error('Wrong parameter');
        }
        var arrst = [];
        for (var i = 0; i < this._maxrow + this._maxcol - 1; i++) {
            var arpos = [];
            for (var j = 0; j <= i; j++) {
                if (j <= this._maxrow - 1 && i <= this._maxcol + j - 1) {
                    arpos.push({ row: j, column: i - j });
                }
            }
            arpos.sort(function (a, b) {
                return a.row - b.row;
            });
            if (arpos.length > 0) {
                arrst.push(arpos);
            }
        }
        return arrst;
    };
    /**
     * Get backslash positions
     */
    Matrix.prototype.getBackSlashOutputPos = function () {
        if (this._maxrow != this._maxcol || this._maxrow <= 1) {
            throw new Error('Wrong parameter');
        }
        var arrst = [];
        for (var i = 0; i <= this._maxrow - 1; i++) {
            var arpos = [];
            for (var j = 0; j <= i; j++) {
                arpos.push({ row: i - j, column: this._maxrow - 1 - j });
            }
            if (arpos.length > 0) {
                arrst.push(arpos);
            }
        }
        for (var i = 1; i <= this._maxrow - 1; i++) {
            var arpos = [];
            for (var j = 0; j <= this._maxrow - 1 - i; j++) {
                arpos.push({ row: i + j, column: j });
            }
            if (arpos.length > 0) {
                arrst.push(arpos);
            }
        }
        return arrst;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=Matrix.js.map