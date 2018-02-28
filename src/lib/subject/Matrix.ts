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

import { SequenceList } from '../model';

/**
 * Matrix
 */
export class Matrix<T> {
  private _cells: T[][];
  private _maxcol: number;
  private _maxrow: number;
  private _inited: boolean;

  /**
   * Constructor
   * @param rowcount: Count of rows
   * @param colcount: Count of columns
   */
  constructor(rowcount: number, colcount: number) {
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
  get RowCount(): number {
    return this._maxrow;
  }

  /**
   * Columns
   */
  get ColumnCount(): number {
    return this._maxcol;
  }

  /**
   * Is inited
   */
  get isInited(): boolean {
    return this._inited;
  }

  /** 
   * init
   * Initialize the current Matrix 
   */
  public init(): void {
    if (this._inited) {
      throw new Error('already inited');
    }

    this._cells = [];
    for (let r: number = 0; r < this._maxrow; r++) {
      let nrow: T[] = [];

      for(let j: number = 0; j < this._maxcol; j++) {
        let ncell: any = undefined;
        nrow.push(ncell);
      }

      this._cells.push(nrow);
    }

    this._inited = true;
  }

  public getSlashOutput(): T[][] {
    const arrst: T[][] = [];
    for (let i = 0; i < this.RowCount + this.ColumnCount - 1; i++) {
      const arpos: T[] = [];
  
      for (let j = 0; j <= i; j++) {
        if (j <= this.ColumnCount - 1 && i <= this.RowCount + j - 1) {
          arpos.push({x: j, y: i - j});
        }
      }
  
      arpos.sort((a, b) => {
        return a.x - b.x;
      });
  
      if (arpos.length > 0) {
        arrst.push(arpos);
      }
    }
  
    return arrst;      
  }
}
