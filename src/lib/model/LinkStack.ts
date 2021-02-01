/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkStack.ts
 *
 */

import { IStack } from './IStack';

export class LinkStackNode<T> {
  private _data: T;
  private _next: LinkStackNode<T> | null;

  constructor() {
    this._next = null;
  }

  get Data(): T {
    return this._data;
  }
  set Data(data: T) {
    this._data = data;
  }
  get Next(): LinkStackNode<T> | null {
    return this._next;
  }
  set Next(next: LinkStackNode<T> | null) {
    this._next = next;
  }
}

export class LinkStack<T> implements IStack<T> {
  private _head: LinkStackNode<T> | null = null;
  private _length = 0;

  constructor() {
    this._head = null;
  }

  /**
   * Head
   */
  get Head(): LinkStackNode<T> | null {
    return this._head;
  }

  /**
   * Length of the stack
   */
  public Length(): number {
    return this._length;
  }

  /**
   * Is empty
   */
  public IsEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Push new element, return the new length
   * @param elem Element to push
   */
  public Push(elem: T): number {
    if (this._head === null) {
      this._head = new LinkStackNode<T>();
      this._head.Data = elem;
      return this._length++;
    }

    const node: LinkStackNode<T> = new LinkStackNode<T>();
    node.Data = elem;
    node.Next = this._head;
    this._head = node;

    return this._length++;
  }

  /**
   * Pop an item out
   */
  public Pop(): T | null {
    if (this._head === null) {
      return null;
    }

    const pi: T = this._head.Data;

    this._head = this._head.Next;
    this._length --;

    return pi;
  }

  /**
   * Peek the first element
   */
  public Peek(): T | null {
    if (this._head === null) {
      return null;
    }

    return this._head.Data;
  }

  /**
   * Clear all
   */
  public ClearAll(): boolean {
    this._head = null;
    this._length = 0;

    return true;
  }
}
