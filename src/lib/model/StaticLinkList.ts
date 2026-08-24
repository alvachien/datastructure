/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StaticLinkList.ts
 *
 * A static (array-backed) linked list. A fixed-size array of nodes is used;
 * each node carries a `Cursor` that points to the index of the next node.
 *
 * Convention (common for static link lists):
 *   - `_data[0]` is the *free list* header; `_data[0].Cursor` is the index
 *     of the first free slot (or -1 when the pool is exhausted).
 *   - The list's logical head lives at `_data[1]`; `_data[1].Cursor` is the
 *     index of the first real element (or -1 when the list is empty).
 *   - Real elements occupy indices `[2 .. capacity-1]`.
 */

import { IList } from './IList';

/**
 * Node in static link list
 */
export class StaticLinkListNode<T> {
  private _data: T | null = null;
  private _cursor: number = -1;

  get Data(): T | null {
    return this._data;
  }
  set Data(data: T | null) {
    this._data = data;
  }
  get Cursor(): number {
    return this._cursor;
  }
  set Cursor(cur: number) {
    this._cursor = cur;
  }
}

export class StaticLinkList<T> implements IList<T> {
  private static readonly HeaderIndex = 0;   // free-list header
  private static readonly HeadIndex = 1;      // logical list head
  private static readonly DefaultCapacity = 200;

  private _data: StaticLinkListNode<T>[];
  private _length = 0;
  private _cursor = -1; // iterator position (-1 = not started)

  constructor(capacity: number = StaticLinkList.DefaultCapacity) {
    // Need at least the two header slots + one element slot.
    const cap = Math.max(capacity, StaticLinkList.HeadIndex + 1);
    this._data = new Array<StaticLinkListNode<T>>(cap);
    for (let i = 0; i < cap; i++) {
      this._data[i] = new StaticLinkListNode<T>();
    }
    this.initFreeList();
  }

  private initFreeList() {
    const cap = this._data.length;
    // Free list: [0] -> 2 -> 3 -> ... -> cap-1 -> -1.
    // Index HeadIndex (1) is reserved as the list head.
    this._data[StaticLinkList.HeaderIndex].Cursor = StaticLinkList.HeadIndex + 1;
    for (let i = StaticLinkList.HeadIndex + 1; i < cap - 1; i++) {
      this._data[i].Cursor = i + 1;
    }
    this._data[cap - 1].Cursor = -1;

    // Empty list: head's cursor is -1.
    this._data[StaticLinkList.HeadIndex].Cursor = -1;
    this._length = 0;
  }

  /**
   * Allocate a node index from the free list. Returns -1 if the pool is
   * exhausted.
   */
  private malloc(): number {
    const freeHead = this._data[StaticLinkList.HeaderIndex].Cursor;
    if (freeHead === -1) {
      return -1;
    }
    const idx = freeHead;
    this._data[StaticLinkList.HeaderIndex].Cursor = this._data[idx].Cursor;
    this._data[idx].Cursor = -1;
    return idx;
  }

  /**
   * Return a node index to the free list.
   */
  private free(idx: number) {
    this._data[idx].Data = null;
    this._data[idx].Cursor = this._data[StaticLinkList.HeaderIndex].Cursor;
    this._data[StaticLinkList.HeaderIndex].Cursor = idx;
  }

  next(...args: [] | [undefined]): IteratorResult<T> {
    if (this._cursor === -1) {
      // Start at the first real element.
      const head = this._data[StaticLinkList.HeadIndex].Cursor;
      this._cursor = head;
    } else {
      this._cursor = this._data[this._cursor].Cursor;
    }

    if (this._cursor === -1) {
      return { done: true, value: undefined };
    }
    const value = this._data[this._cursor].Data as T;
    return { done: false, value };
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this;
  }
  return?(value?: any): IteratorResult<T, any> {
    this._cursor = -1;
    return { done: true, value: value as any };
  }
  throw?(e?: any): IteratorResult<T, any> {
    throw e;
  }

  public Length(): number {
    return this._length;
  }

  public IsEmpty(): boolean {
    return this._length === 0;
  }

  public ClearAll(): boolean {
    this.initFreeList();
    return true;
  }

  /**
   * Get the element at the specified zero-based position; null if out of range.
   * @param index zero-based position
   */
  public GetElement(index: number): T | null {
    if (index < 0 || index >= this._length) {
      return null;
    }

    let cur = this._data[StaticLinkList.HeadIndex].Cursor;
    let i = 0;
    while (cur !== -1 && i < index) {
      cur = this._data[cur].Cursor;
      i++;
    }

    return cur === -1 ? null : this._data[cur].Data;
  }

  /**
   * Insert the element at the specified zero-based index; index === length
   * appends to the tail. Returns false if the index is out of range or the
   * pool is exhausted.
   * @param index zero-based position
   * @param elem element to insert
   */
  public InsertElement(index: number, elem: T): boolean {
    if (index < 0 || index > this._length) {
      return false;
    }

    const newNode = this.malloc();
    if (newNode === -1) {
      return false;
    }
    this._data[newNode].Data = elem;

    // Walk to the node that should precede the new one. The head slot acts as
    // a sentinel preceding index 0, so inserting at position `index` means
    // splicing after the node reached by walking `index` steps from the head.
    let prev = StaticLinkList.HeadIndex;
    let i = 0;
    while (i < index) {
      prev = this._data[prev].Cursor;
      i++;
    }

    this._data[newNode].Cursor = this._data[prev].Cursor;
    this._data[prev].Cursor = newNode;
    this._length++;
    return true;
  }

  /**
   * Append the element to the tail of the list. Returns the new length, or
   * -1 if the pool is exhausted.
   */
  public AppendElement(elem: T): number {
    if (!this.InsertElement(this._length, elem)) {
      return -1;
    }
    return this._length;
  }

  /**
   * Remove the element at the specified zero-based position.
   * @param index zero-based position
   */
  public DeleteElement(index: number): boolean {
    if (index < 0 || index >= this._length) {
      return false;
    }

    // Walk to the predecessor of the node to delete.
    let prev = StaticLinkList.HeadIndex;
    let i = 0;
    while (i < index) {
      prev = this._data[prev].Cursor;
      i++;
    }

    const target = this._data[prev].Cursor;
    if (target === -1) {
      return false;
    }

    this._data[prev].Cursor = this._data[target].Cursor;
    this.free(target);
    this._length--;
    return true;
  }

  /**
   * Print all elements joined by `splitter` (default ',').
   */
  public Print(splitter?: string): string {
    const sep = splitter === undefined ? ',' : splitter;
    const ar: T[] = [];
    let cur = this._data[StaticLinkList.HeadIndex].Cursor;
    while (cur !== -1) {
      const d = this._data[cur].Data;
      if (d !== null) {
        ar.push(d);
      }
      cur = this._data[cur].Cursor;
    }
    return ar.join(sep);
  }
}
