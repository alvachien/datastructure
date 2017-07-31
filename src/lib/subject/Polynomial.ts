/**
 * @license
 * Polynomial.ts
 * (C) Alva Chien, 2017
 */

import { SequenceList } from '../model';

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
        pt.Exp = Math.floor(exp); // Ensure the exp is not a floor
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

        let othlen: number = other.TermLength();
        let visoth: SequenceList<number> = new SequenceList<number>();
        let rst: Polynomial = new Polynomial();
        for (let i = 0; i < this._term.Length(); ++i) {
            let elem = this._term.GetElement(i);
            for(let j: number = 0; j < othlen; ++j) {
                let elemj = other.Terms().GetElement(j);
                if (elem.Exp === elemj.Exp) {
                    if (elem.Coef + elemj.Coef !== 0) {
                        // When the Coef's addition meets zero, 
                        rst.NewTerm(elem.Coef + elemj.Coef, elem.Exp);
                    }

                    visoth.AppendElement(elem.Exp);
                }
            }
        }
        if (othlen > visoth.Length()) {
            for(let j: number = 0; j < othlen; ++j) {
                let elemj = other.Terms().GetElement(j);
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
        return null;
    }

    /**
     * Eval will evaluate the whole polynomial when variable x contains value @param val
     * @param val The value of variable x
     */
    public Eval(val: number): number {
        let rst: number = 0;
        for (let i = 0; i < this._term.Length(); ++i) {
            let elem = this._term.GetElement(i);

            rst += elem.Coef * Math.pow(val, elem.Exp);
        }

        return rst;
    }

    /**
     * Print a readable string, for example: 4x^3- x^2+x-1
     */
    public Print(): string {
        return '';
    }
}
