/**
 * @license
 * subject-demo.component.ts
 * (C) Alva Chien, 2017
 */

import { Component, OnInit } from '@angular/core';
import { Polynomial } from '../../lib';

@Component({
  selector: 'demoapp-subject-demo',
  templateUrl: './subject-demo.component.html',
  styleUrls: ['./subject-demo.component.scss']
})
export class SubjectDemoComponent implements OnInit {
  /**
   * Polynomial part
   */
  private _polynomial: Polynomial;
  PolynomialDisplayStrings: string[];
  polAddCoef: number;
  polAddExp: number;
  polEval: number;

  constructor() {
    this._polynomial = new Polynomial();
    this.PolynomialDisplayStrings = [];
    this.polAddCoef = 0;
    this.polAddExp = 0;
    this.polEval = 0;
  }

  ngOnInit() {
  }

  /**
   * Polynomial part
   */
  public OnPolynomialRandomGenerate(): void {
    this._polynomial.Reset();
    this.PolynomialDisplayStrings = [];

    let nterms: number = Math.floor(Math.random() * 10) + 1;
    for(let i: number = 0; i <= nterms; i++) {
      let cof: number = Math.floor(Math.random() * 20 + 1);
      this._polynomial.NewTerm(cof, i);
    }
    
    this.PolynomialDisplayStrings.push(this._polynomial.Print());
  }
  public OnPolynomialNewTerm(): void {
    if (this.polAddCoef !== 0) {
      this._polynomial.NewTerm(this.polAddCoef, this.polAddExp);
      this.PolynomialDisplayStrings.push(this._polynomial.Print());
    }
  }
  public OnPolynomialEval(): void {
    let rst: number = this._polynomial.Eval(this.polEval);
    this.PolynomialDisplayStrings.push(this._polynomial.Print() + ' = ' + rst.toString() + ' when x = ' + this.polEval.toString());
  }
}
