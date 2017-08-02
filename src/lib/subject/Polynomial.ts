/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Polynomial.ts
 * Implements the polynomial.
 */

import { SequenceList, QuickSort } from '../model';

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
export class PolynomialTerm {
    private _coef: number;
    private _exp: number;

    constructor() {
        this._coef = 0;
        this._exp = 0;
    }

    get Coef(): number {
        return this._coef;
    }
    set Coef(coef: number) {
        this._coef = coef;
    }

    get Exp(): number {
        return this._exp;
    }
    set Exp(exp: number) {
        this._exp = exp;
    }
}

/**
 * Polynomial
 */
export class Polynomial {
    private _term: SequenceList<PolynomialTerm>;

    /**
     * Constructor
     */
    constructor() {
        this._term = new SequenceList<PolynomialTerm>();
    }

    /**
     * Term length
     */
    public TermLength(): number {
        return this._term.Length();
    }

    /**
     * Terms
     */
    public Terms(): SequenceList<PolynomialTerm> {
        return this._term;
    }

    /**
     * Get Coef of specified exp
     * @param e specified exp
     */
    public Coef(e: number): number | null {
        for (let i = 0; i < this._term.Length(); ++i) {
            if (this._term.GetElement(i).Exp === e) {
                return this._term.GetElement(i).Coef;
            }
        }
        return null;
    }

    /**
     * The lead or the maximum exp
     */
    public LeadExp(): number {
        if (this._term.Length() <= 0) {
            return 0;
        }

        let exp = 0;
        for (let i = 0; i < this._term.Length(); ++i) {
            const texp = this._term.GetElement(i).Exp;
            if (exp < texp) {
                exp = texp;
            }
        }

        return exp;
    }

    /**
     * Reset
     */
    public Reset(): void {
        this._term.ClearAll();
    }

    /**
     * Add a new term to the polynomial, return false when failed, for instance, the
     * @param coef The value of Coef
     * @param exp The value of Exp
     */
    public NewTerm(coef: number, exp: number): boolean {
        for (let i = 0; i < this._term.Length(); ++i) {
            if (this._term.GetElement(i).Exp === exp) {
                return false;
            }
        }

        const pt: PolynomialTerm = new PolynomialTerm();
        pt.Coef = coef;
        pt.Exp = Math.round(exp); // Ensure the exp is not a floor
        this._term.AppendElement(pt);

        return true;
    }

    /**
     * Add two polynomials, returns a new Polynomial
     * @param other polynomal which apply to addition
     */
    public Add(other: Polynomial): Polynomial {
        if (other === null
            || other === undefined
            || other.TermLength() === 0)  {
            return this;
        }

        const othlen: number = other.TermLength();
        const visoth: SequenceList<number> = new SequenceList<number>();
        const rst: Polynomial = new Polynomial();
        for (let i = 0; i < this._term.Length(); ++i) {
            const elem = this._term.GetElement(i);
            for (let j = 0; j < othlen; ++j) {
                const elemj = other.Terms().GetElement(j);
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
            for (let j = 0; j < othlen; ++j) {
                const elemj = other.Terms().GetElement(j);
                if (visoth.IsExist(elemj.Exp)) {
                    continue;
                }

                rst.NewTerm(elemj.Coef, elemj.Exp);
            }
        }

        return rst;
    }

    /**
     * Multiply two polynomials
     * @param other polynomial which apply to multiply
     */
    public Multiply(other: Polynomial): Polynomial {
        if (other === null
            || other === undefined
            || other.TermLength() === 0)  {
            return null;
        }

        let rst: Polynomial = null;
        for (let i = 0; i < this._term.Length(); ++i) {
            const elem = this._term.GetElement(i);
            let subitem: Polynomial = new Polynomial();
            for(let j = 0; j < other.TermLength(); ++j) {
                const elem2 = other.Terms().GetElement(j);
                subitem.NewTerm(Math.round(elem.Coef * elem2.Coef), Math.round(elem.Exp + elem2.Exp));
            }

            if (rst === null) {
                rst = subitem;
            } else {
                rst = rst.Add(subitem);
            }
        }

        return rst;
    }

    /**
     * Eval will evaluate the whole polynomial when variable x contains value @param val
     * @param val The value of variable x
     */
    public Eval(val: number): number {
        let rst = 0;
        for (let i = 0; i < this._term.Length(); ++i) {
            const elem = this._term.GetElement(i);

            rst += elem.Coef * Math.pow(val, elem.Exp);
        }

        return rst;
    }

    /**
     * Print a readable string, in HTML5 format
     * In HTML5, <SUP>2</SUP> can be used for exp
     * And similiar, <SUB>2</SUB> use for sub.
     * For example: 4x^3- x^2+x-1, prints 4x<sup>3</sup>-x<sup>2</sup>+x-1
     */
    public Print(): string {
        const supbgn = '<sup>';
        const supend = '</sup>';

        const arexp: number[] = [];
        for (let i = 0; i < this._term.Length(); ++i) {
            arexp.push(this._term.GetElement(i).Exp);
        }
        if (arexp.length === 0) {
            return '';
        }

        // Need sort the exp
        QuickSort(arexp);

        let rst = '';
        let bfirst = false;
        for (let i: number = arexp.length - 1; i >= 0; --i) {
            for (let j = 0; j < this._term.Length(); j++) {
                if (this._term.GetElement(j).Exp === arexp[i]) {
                    if (!bfirst) {
                        bfirst = true;
                    } else {
                        rst += '+';
                    }
                    rst += this._term.GetElement(j).Coef.toString();
                    if (arexp[i] !== 0)  {
                        rst += 'X' + supbgn + arexp[i].toString() + supend;
                    }
                }
            }
        }

        return rst;
    }
}
