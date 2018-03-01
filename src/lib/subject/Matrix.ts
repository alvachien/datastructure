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
 * Matrix position
 */
export interface MatrixPosIntf {
  x: number;
  y: number;
}

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

  /**
   * Is a valid position
   * @param pos Position
   */
  public isValidPosition(pos: MatrixPosIntf): boolean {
    if (pos.x >= 0 && pos.x < this._maxrow && pos.y >= 0 && pos.y < this._maxcol) {
      return true;
    }

    return false;
  }

  /**
   * Get element
   * @param pos Position
   */
  public getElement(pos: MatrixPosIntf): T {
    if (!this.isValidPosition(pos)) {
      return undefined;
    }

    return this._cells[pos.x][pos.y];
  }

  /**
   * Set element
   * @param pos Position
   */
  public setElement(pos: MatrixPosIntf, elem: T): void {
    if (!this.isValidPosition(pos)) {
      return undefined;
    }

    this._cells[pos.x][pos.y] = elem;
  }

  /** 
   * Get slash output
   */
  public getSlashOutput(): T[][] {
    const arrst: T[][] = [];
    for (let i = 0; i < this._maxrow + this._maxcol - 1; i++) {
      const arpos: T[] = [];
  
      for (let j = 0; j <= i; j++) {
        if (j <= this._maxcol - 1 && i <= this._maxrow + j - 1) {
          arpos.push(this._cells[j][i - j]);
        }
      }
  
      if (arpos.length > 0) {
        arrst.push(arpos);
      }
    }
  
    return arrst;      
  }
}
