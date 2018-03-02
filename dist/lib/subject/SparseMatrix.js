"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
/**
 * Trituple
 */
var Trituple = /** @class */ (function () {
    function Trituple() {
    }
    Object.defineProperty(Trituple.prototype, "Row", {
        get: function () {
            return this._row;
        },
        set: function (row) {
            this._row = row;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trituple.prototype, "Column", {
        get: function () {
            return this._column;
        },
        set: function (cln) {
            this._column = cln;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trituple.prototype, "Value", {
        get: function () {
            return this._val;
        },
        set: function (val) {
            this._val = val;
        },
        enumerable: true,
        configurable: true
    });
    return Trituple;
}());
exports.Trituple = Trituple;
/**
 * Sparse Matrix: Matrix with lots of empty entities inside
 */
var SparseMatrix = /** @class */ (function () {
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    function SparseMatrix(rowcount, colcount) {
        if (rowcount <= 0
            || colcount <= 0) {
            throw new Error('Row count and Column count must be positive!');
        }
        this._maxrow = rowcount;
        this._maxcol = colcount;
        this._listTerms = new model_1.SequenceList();
    }
    Object.defineProperty(SparseMatrix.prototype, "Terms", {
        /**
         * Terms
         */
        get: function () {
            return this._listTerms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparseMatrix.prototype, "Row", {
        /**
         * Rows
         */
        get: function () {
            return this._maxrow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparseMatrix.prototype, "Column", {
        /**
         * Columns
         */
        get: function () {
            return this._maxcol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparseMatrix.prototype, "Rows", {
        /**
         * Returns the list of actual rows
         */
        get: function () {
            var sl = new model_1.SequenceList();
            for (var i = 0; i < this._listTerms.Length(); i++) {
                var elem = this._listTerms.GetElement(i);
                if (!sl.IsExist(elem.Row)) {
                    sl.AppendElement(elem.Row);
                }
            }
            return sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparseMatrix.prototype, "Columns", {
        /**
         * Returns the list of actual column
         */
        get: function () {
            var sl = new model_1.SequenceList();
            for (var i = 0; i < this._listTerms.Length(); i++) {
                var elem = this._listTerms.GetElement(i);
                if (!sl.IsExist(elem.Column)) {
                    sl.AppendElement(elem.Column);
                }
            }
            return sl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieve an element at specified row and specified column
     * @param row Specified row
     * @param col Specified column
     */
    SparseMatrix.prototype.GetElement = function (row, col) {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            return null;
        }
        for (var i = 0; i < this._listTerms.Length(); i++) {
            if (row === this._listTerms.GetElement(i).Row
                && col === this._listTerms.GetElement(i).Column) {
                return this._listTerms.GetElement(i).Value;
            }
        }
        return null;
    };
    /**
     * Check whether the element of specified row and column exist or not
     * @param row Specified row
     * @param col Specified column
     */
    SparseMatrix.prototype.IsExist = function (row, col) {
        if (row <= 0 || row > this._maxrow
            || col <= 0 || col > this._maxcol) {
            throw new Error('Invalid input');
        }
        for (var i = 0; i < this._listTerms.Length(); i++) {
            if (row === this._listTerms.GetElement(i).Row
                && col === this._listTerms.GetElement(i).Column) {
                return true;
            }
        }
        return false;
    };
    /**
     * Insert an element, return true if succeed
     * @param row Specified row
     * @param col Specified column
     * @param val Value
     */
    SparseMatrix.prototype.InsertElement = function (row, col, val) {
        try {
            if (this.IsExist(row, col)) {
                return false;
            }
            else {
                var nt = new Trituple();
                // Try the destructure, failed!!!
                //let { nt.Row, nt.Column, nt.Value } = {row, col, val};
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
    };
    /**
     * Transpose
     */
    SparseMatrix.prototype.Transpose = function () {
        var sm = new SparseMatrix(this._maxcol, this._maxrow);
        for (var i = 0; i < this._listTerms.Length(); i++) {
            var it2 = new Trituple();
            var it_1 = this._listTerms.GetElement(i);
            it2.Column = it_1.Row;
            it2.Row = it_1.Column;
            it2.Value = it_1.Value;
            sm.Terms.AppendElement(it2);
        }
        return sm;
    };
    /**
     * Add another matrix
     * @param other matrix which used to add
     */
    SparseMatrix.prototype.Add = function (other) {
        return null;
    };
    /**
     * Multipy another matrix
     * @param other matrix which used to multiply
     */
    SparseMatrix.prototype.Multiply = function (other) {
        return null;
    };
    return SparseMatrix;
}());
exports.SparseMatrix = SparseMatrix;
//# sourceMappingURL=SparseMatrix.js.map