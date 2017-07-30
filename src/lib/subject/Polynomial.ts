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
     * Get Coef of specified exp
     * @param e specified exp
     */
    public Coef(e: number) : number | null {
        for(let i: number = 0; i < this._term.Length(); ++i) {
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

        let exp: number = 0;
        for(let i: number = 0; i < this._term.Length(); ++i) {
            let texp = this._term.GetElement(i).Exp; 
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
        for(let i: number = 0; i < this._term.Length(); ++i) {
            if (this._term.GetElement(i).Exp === exp) {
                return false;
            } 
        }

        let pt: PolynomialTerm = new PolynomialTerm();
        pt.Coef = coef;
        pt.Exp = Math.floor(exp); // Ensure the exp is not a floor
        this._term.AppendElement(pt);

        return true;
    }

    /**
     * Add two polynomials
     * @param other polynomal which apply to addition
     */
    public Add(other: Polynomial): Polynomial {
        return null;
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
    public Eval(val: number) {

    }

    /**
     * Print a readable string, for example: 4x^3- x^2+x-1
     */
    public Print(): string {
        return '';
    }
}
