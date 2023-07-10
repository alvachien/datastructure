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
export declare class PolynomialTerm {
    private _coef;
    private _exp;
    constructor();
    get Coef(): number;
    set Coef(coef: number);
    get Exp(): number;
    set Exp(exp: number);
}
/**
 * Polynomial
 */
export declare class Polynomial {
    private _term;
    /**
     * Constructor
     */
    constructor();
    /**
     * Term length
     */
    TermLength(): number;
    /**
     * Terms
     */
    Terms(): SequenceList<PolynomialTerm>;
    /**
     * Get Coef of specified exp
     * @param e specified exp
     */
    Coef(e: number): number | null;
    /**
     * The lead or the maximum exp
     */
    LeadExp(): number;
    /**
     * Reset
     */
    Reset(): void;
    /**
     * Add a new term to the polynomial, return false when failed, for instance, the
     * @param coef The value of Coef
     * @param exp The value of Exp
     */
    NewTerm(coef: number, exp: number): boolean;
    /**
     * Add two polynomials, returns a new Polynomial
     * @param other polynomal which apply to addition
     */
    Add(other: Polynomial): Polynomial;
    /**
     * Multiply two polynomials
     * @param other polynomial which apply to multiply
     */
    Multiply(other: Polynomial): Polynomial;
    /**
     * Eval will evaluate the whole polynomial when variable x contains value @param val
     * @param val The value of variable x
     */
    Eval(val: number): number;
    /**
     * Print a readable string, in HTML5 format
     * In HTML5, <SUP>2</SUP> can be used for exp
     * And similiar, <SUB>2</SUB> use for sub.
     * For example: 4x^3- x^2+x-1, prints 4x<sup>3</sup>-x<sup>2</sup>+x-1
     */
    Print(): string;
}
