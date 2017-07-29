/**
 * @license
 * Polynomial.ts
 * (C) Alva Chien, 2017
 */

import { SequenceList } from '../model';

/**
 * Polynomial
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
    private _degree: number;
    private _term: SequenceList<PolynomialTerm>;

    constructor() {
        this._term = new SequenceList<PolynomialTerm>();
    }

    public Coef(e: number) {

    }
    public LeadExp(): number {
        return 0;
    }

    public NewTerm(coef: number, exp: number): boolean {
        return false;
    }

    public Add(other: Polynomial): Polynomial {
        return null;
    }

    public Multiply(other: Polynomial): Polynomial {
        return null;
    }

    public Eval(val: number) {

    }
}
