/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceQueue.ts
 *
 */

import { IQueue } from './IQueue';

export class SequenceQueue<T> implements IQueue<T> {
  private _data: T[] = [];

  constructor() {
  }

  /**
   * The length of the whole stack
   */
  public Length(): number {
    return this._data.length;
  }

  /**
   * Is empty? true means it is empty
   */
  public IsEmpty(): boolean {
    return this._data.length === 0;
  }

  /**
   * Enqueue the  element at the tailor of the queue, returns the result: true means success
   * @param elem the element to be inserted.
   */
  public Enqueue(elem: T): boolean {
    this._data.push(elem);
    return true;
  }

  /**
   * Peek the top element without remove it, returns the top element.
   */
  public Peek(): T {
    if (this._data.length === 0) {
      return undefined;
    }

    return this._data[0];
  }

  /**
   * Return the first element and remove it from the queue, returns the poped element.
   */
  public Dequeue(): T {
    if (this._data.length === 0) {
      return undefined;
    }

    return this._data.shift();
  }

  /**
   * Clear all elements, returns the result: true means suces
   */
  public ClearAll(): boolean {
    this._data = [];
    return true;
  }
}
