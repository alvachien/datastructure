/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.ts
 *
 */

import { IStack } from './IStack';

/**
 * Sequence Stack
 */
export class SequenceStack<T> implements IStack<T> {
  private _data: T[] = [];

  /** 
   * Constructor
   */
  constructor() {
  }

  /** 
   * Length
   */
  public Length(): number {
    return this._data.length;
  }

  /** 
   * Is empty 
   */
  public IsEmpty(): boolean {
    return this._data.length === 0;
  }

  /**
   * Push
   * @param elem Element to push
   */
  public Push(elem: T): number {
    return this._data.push(elem);
  }

  /**
   * Pop an element
   * 
   */
  public Pop(): T | null {
    if (this._data.length === 0) {
      return null;
    }

    const pi: T = this._data[this._data.length - 1];
    this._data.splice(this._data.length - 1, 1);
    return pi;
  }

  /** 
   * Peek the stack 
   */
  public Peek(): T | null {
    if (this._data.length === 0) {
      return null;
    }

    const pi: T = this._data[this._data.length - 1];
    return pi;
  }

  /** 
   * Clear all 
   */
  public ClearAll(): boolean {
    this._data = [];
    return true;
  }
}
