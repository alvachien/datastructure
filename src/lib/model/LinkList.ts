/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.ts
 *
 */

import { IList } from './IList';

/**
 * Node in Link list
 */
export class LinkListNode<T> {
  private _data: T;
  private _next: LinkListNode<T>;

  /**
   * Constructor
   */
  constructor() {
    this._next = undefined;
  }

  get Data(): T {
    return this._data;
  }
  set Data(data: T) {
    this._data = data;
  }
  get Next(): LinkListNode<T> {
    return this._next;
  }
  set Next(next: LinkListNode<T>) {
    this._next = next;
  }
}

/**
 * Link list
 */
export class LinkList<T> implements IList<T> {
  private _head: LinkListNode<T>;
  private _length = 0;

  /**
   * Constructor
   */
  constructor() {
  }

  /**
   * Head
   */
  get Head(): LinkListNode<T> {
    return this._head;
  }
  
  /**
   * Initialize the list
   * @param hval Head value
   */
  public InitList(hval: T) {
    this._head = new LinkListNode<T>();
    this._head.Data = hval;
    this._length = 1;
  }

  /** 
   * Length
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
   * Get element
   * @param index index of element
   */
  public GetElement(index: number): T | undefined {
    if (this._length === 0
      || this._head === undefined
      || index < 0
      || index >= this._length) {
      return undefined;
    }

    let cur = this._head;
    let i = 0;
    while (cur !== undefined && i < index) {
      cur = cur.Next;
      i ++;
    }

    return cur.Data;
  }

  /**
   * Insert an element
   * @param index Index to insert
   * @param elem Element to insert
   */
  public InsertElement(index: number, elem: T): boolean {
    if (index < 0 || index > this._length || this._head === undefined
      || elem === undefined) {
      return false;
    }

    if (index === 0) {
      const nnode: LinkListNode<T> = new LinkListNode<T>();
      nnode.Data = elem;
      nnode.Next = this._head.Next;
      this._head = nnode;

      return true;
    }

    let cur: LinkListNode<T> = this._head;
    let i = 0;
    while (cur !== undefined && i < index) {
      cur = cur.Next;
      i ++;
    }

    let nnode: LinkListNode<T> = new LinkListNode<T>();
    nnode.Data = elem;
    nnode.Next = cur.Next;
    cur.Next = nnode;
    this._length++;

    return true;
  }

  /**
   * Append element
   * @param elem Element to append
   */
  public AppendElement(elem: T): number {
    if (this._head === undefined || this._length <= 0) {
      throw new Error('Invalid list');
    }

    let cur: LinkListNode<T> = this._head;
    while (cur.Next !== undefined) {
      cur = cur.Next;
    }

    let newnode: LinkListNode<T> = new LinkListNode<T>();
    newnode.Data = elem;
    newnode.Next = undefined;

    cur.Next = newnode;

    return ++this._length;
  }

  /**
   * Delete an element
   * @param index Index to delete
   */
  public DeleteElement(index: number): boolean {
    if (index < 0 || index > this._length || this._head === undefined) {
      return false;
    }

    let cur: LinkListNode<T> = this._head;
    if (index === 0) {
      this._head = cur.Next;
      this._length--;
      return true;
    }

    let i = 0;
    while (cur !== undefined && i < index) {
      cur = cur.Next;
      i ++;
    }

    cur.Next = cur.Next.Next;
    this._length--;

    if (this._length === 0) {
      this._head = undefined;
    }

    return true;
  }

  /** 
   * Clear all elements 
   */
  public ClearAll(): boolean {
    this._head = undefined;
    this._length = 0;
    return true;
  }

  /**
   * Print out full array
   * @param splitter Splitter
   */
  public Print(splitter?: string): string {
    // TBD
    return '';
  }
}
