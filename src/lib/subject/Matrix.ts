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
  row: number;
  column: number;
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
    if (pos.row >= 0 && pos.row < this._maxrow && pos.column >= 0 && pos.column < this._maxcol) {
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

    return this._cells[pos.row][pos.column];
  }

  /**
   * Set element
   * @param pos Position
   */
  public setElement(pos: MatrixPosIntf, elem: T): void {
    if (!this.isValidPosition(pos)) {
      return undefined;
    }

    this._cells[pos.row][pos.column] = elem;
  }

  /** 
   * Get slash output
   */
  public getSlashOutputPos(): MatrixPosIntf[][] {
    if (this._maxrow <= 1 || this._maxcol <= 1) {
      throw new Error('Wrong parameter');
    }
  
    const arrst: MatrixPosIntf[][] = [];
    for (let i = 0; i < this._maxrow + this._maxcol - 1; i++) {
      const arpos: MatrixPosIntf[] = [];
  
      for (let j = 0; j <= i; j++) {
        if (j <= this._maxrow - 1 && i <= this._maxcol + j - 1) {
          arpos.push({row: j, column: i - j});
        }
      }
  
      arpos.sort((a, b) => {
        return a.row - b.row;
      });
  
      if (arpos.length > 0) {
        arrst.push(arpos);
      }
    }
  
    return arrst;
  }
  
  /** 
   * Get backslash positions 
   */
  public getBackSlashOutputPos(): MatrixPosIntf[][] {
    if (this._maxrow != this._maxcol || this._maxrow <= 1) {
      throw new Error('Wrong parameter');
    }

    const arrst: MatrixPosIntf[][] = [];

    for (let i = 0; i <= this._maxrow - 1; i ++) {
      const arpos: MatrixPosIntf[] = [];
      for (let j = 0; j <= i; j++) {
        arpos.push({row: i - j, column: this._maxrow - 1 - j});
      }
  
      if (arpos.length > 0) {
        arrst.push(arpos);
      }
    }
  
    for (let i = 1; i <= this._maxrow - 1; i ++) {
      const arpos: MatrixPosIntf[] = [];
      for (let j = 0; j <= this._maxrow - 1 - i; j++) {
        arpos.push({row: i + j, column: j});
      }
  
      if (arpos.length > 0) {
        arrst.push(arpos);
      }
    }
  
    return arrst;
  }
}
