"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Polynomial.ts
 * Implements the polynomial.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("../model");
/**
 * Polynomial 多项式
 * For instance: A(x) = c0xe0 + c1xe1 + ... + cixei
 * x: stands for the variable
 * ci: stands for the Coef for each i;
 * ei: stands for the lead exp for each i;
 */
/**
 * Term in Polynomial
 */
var PolynomialTerm = /** @class */ (function () {
    function PolynomialTerm() {
        this._coef = 0;
        this._exp = 0;
    }
    Object.defineProperty(PolynomialTerm.prototype, "Coef", {
        get: function () {
            return this._coef;
        },
        set: function (coef) {
            this._coef = coef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PolynomialTerm.prototype, "Exp", {
        get: function () {
            return this._exp;
        },
        set: function (exp) {
            this._exp = exp;
        },
        enumerable: true,
        configurable: true
    });
    return PolynomialTerm;
}());
exports.PolynomialTerm = PolynomialTerm;
/**
 * Polynomial
 */
var Polynomial = /** @class */ (function () {
    /**
     * Constructor
     */
    function Polynomial() {
        this._term = new model_1.SequenceList();
    }
    /**
     * Term length
     */
    Polynomial.prototype.TermLength = function () {
        return this._term.Length();
    };
    /**
     * Terms
     */
    Polynomial.prototype.Terms = function () {
        return this._term;
    };
    /**
     * Get Coef of specified exp
     * @param e specified exp
     */
    Polynomial.prototype.Coef = function (e) {
        for (var i = 0; i < this._term.Length(); ++i) {
            if (this._term.GetElement(i).Exp === e) {
                return this._term.GetElement(i).Coef;
            }
        }
        return null;
    };
    /**
     * The lead or the maximum exp
     */
    Polynomial.prototype.LeadExp = function () {
        if (this._term.Length() <= 0) {
            return 0;
        }
        var exp = 0;
        for (var i = 0; i < this._term.Length(); ++i) {
            var texp = this._term.GetElement(i).Exp;
            if (exp < texp) {
                exp = texp;
            }
        }
        return exp;
    };
    /**
     * Reset
     */
    Polynomial.prototype.Reset = function () {
        this._term.ClearAll();
    };
    /**
     * Add a new term to the polynomial, return false when failed, for instance, the
     * @param coef The value of Coef
     * @param exp The value of Exp
     */
    Polynomial.prototype.NewTerm = function (coef, exp) {
        for (var i = 0; i < this._term.Length(); ++i) {
            if (this._term.GetElement(i).Exp === exp) {
                return false;
            }
        }
        var pt = new PolynomialTerm();
        pt.Coef = coef;
        pt.Exp = Math.round(exp); // Ensure the exp is not a floor
        this._term.AppendElement(pt);
        return true;
    };
    /**
     * Add two polynomials, returns a new Polynomial
     * @param other polynomal which apply to addition
     */
    Polynomial.prototype.Add = function (other) {
        if (other === null
            || other === undefined
            || other.TermLength() === 0) {
            return this;
        }
        var othlen = other.TermLength();
        var visoth = new model_1.SequenceList();
        var rst = new Polynomial();
        for (var i = 0; i < this._term.Length(); ++i) {
            var elem = this._term.GetElement(i);
            for (var j = 0; j < othlen; ++j) {
                var elemj = other.Terms().GetElement(j);
                if (elem.Exp === elemj.Exp) {
                    if (elem.Coef + elemj.Coef !== 0) {
                        // When the Coef's addition meets zero,
                        rst.NewTerm(Math.round(elem.Coef + elemj.Coef), elem.Exp);
                    }
                    visoth.AppendElement(elem.Exp);
                }
            }
        }
        if (othlen > visoth.Length()) {
            for (var j = 0; j < othlen; ++j) {
                var elemj = other.Terms().GetElement(j);
                if (visoth.IsExist(elemj.Exp)) {
                    continue;
                }
                rst.NewTerm(elemj.Coef, elemj.Exp);
            }
        }
        return rst;
    };
    /**
     * Multiply two polynomials
     * @param other polynomial which apply to multiply
     */
    Polynomial.prototype.Multiply = function (other) {
        if (other === null
            || other === undefined
            || other.TermLength() === 0) {
            return null;
        }
        var rst = null;
        for (var i = 0; i < this._term.Length(); ++i) {
            var elem = this._term.GetElement(i);
            var subitem = new Polynomial();
            for (var j = 0; j < other.TermLength(); ++j) {
                var elem2 = other.Terms().GetElement(j);
                subitem.NewTerm(Math.round(elem.Coef * elem2.Coef), Math.round(elem.Exp + elem2.Exp));
            }
            if (rst === null) {
                rst = subitem;
            }
            else {
                rst = rst.Add(subitem);
            }
        }
        return rst;
    };
    /**
     * Eval will evaluate the whole polynomial when variable x contains value @param val
     * @param val The value of variable x
     */
    Polynomial.prototype.Eval = function (val) {
        var rst = 0;
        for (var i = 0; i < this._term.Length(); ++i) {
            var elem = this._term.GetElement(i);
            rst += elem.Coef * Math.pow(val, elem.Exp);
        }
        return rst;
    };
    /**
     * Print a readable string, in HTML5 format
     * In HTML5, <SUP>2</SUP> can be used for exp
     * And similiar, <SUB>2</SUB> use for sub.
     * For example: 4x^3- x^2+x-1, prints 4x<sup>3</sup>-x<sup>2</sup>+x-1
     */
    Polynomial.prototype.Print = function () {
        var supbgn = '<sup>';
        var supend = '</sup>';
        var arexp = [];
        for (var i = 0; i < this._term.Length(); ++i) {
            arexp.push(this._term.GetElement(i).Exp);
        }
        if (arexp.length === 0) {
            return '';
        }
        // Need sort the exp
        model_1.QuickSort(arexp);
        var rst = '';
        var bfirst = false;
        for (var i = arexp.length - 1; i >= 0; --i) {
            for (var j = 0; j < this._term.Length(); j++) {
                if (this._term.GetElement(j).Exp === arexp[i]) {
                    if (!bfirst) {
                        bfirst = true;
                    }
                    else {
                        rst += '+';
                    }
                    rst += this._term.GetElement(j).Coef.toString();
                    if (arexp[i] !== 0) {
                        rst += 'X' + supbgn + arexp[i].toString() + supend;
                    }
                }
            }
        }
        return rst;
    };
    return Polynomial;
}());
exports.Polynomial = Polynomial;
//# sourceMappingURL=Polynomial.js.map