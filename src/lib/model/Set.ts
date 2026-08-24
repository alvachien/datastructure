/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.ts
 *
 */

 /**
  * Class Set.
  *
  * Backed by a Map so that values are stored by identity (objects do not
  * collide via string coercion) and `values()` returns the original values.
  */
export class Set<T = any> {
  private _data: Map<T, T> = new Map<T, T>();

  constructor() {
  }

  public has(val: T): boolean {
    return this._data.has(val);
  }

  public add(val: T): boolean {
    if (!this.has(val)) {
      this._data.set(val, val);
      return true;
    }

    return false;
  }

  public remove(val: T): boolean {
    return this._data.delete(val);
  }

  public clear(): void {
    this._data.clear();
  }

  public size(): number {
    return this._data.size;
  }

  /**
   * @deprecated Alias kept for backward compatibility; prefer `size()`.
   */
  public sizeLegacy(): number {
    return this.size();
  }

  public values(): T[] {
    return Array.from(this._data.values());
  }

  /**
   * @deprecated Alias kept for backward compatibility; prefer `values()`.
   */
  public valuesLegacy(): T[] {
    return this.values();
  }

  public union(otherSet: Set<T>): Set<T> {
    const unionSet: Set<T> = new Set<T>();
    for (const v of this.values()) {
      unionSet.add(v);
    }
    for (const v of otherSet.values()) {
      unionSet.add(v);
    }

    return unionSet;
  }

  public intersection(otherSet: Set<T>): Set<T> {
    const intersectionSet: Set<T> = new Set<T>();
    for (const v of this.values()) {
      if (otherSet.has(v)) {
        intersectionSet.add(v);
      }
    }

    return intersectionSet;
  }

  public difference(otherSet: Set<T>): Set<T> {
    const differenceSet: Set<T> = new Set<T>();
    for (const v of this.values()) {
      if (!otherSet.has(v)) {
        differenceSet.add(v);
      }
    }

    return differenceSet;
  }

  /**
   * Returns true when every element of this set is also in `otherSet`.
   */
  public subset(otherSet: Set<T>): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }

    for (const v of this.values()) {
      if (!otherSet.has(v)) {
        return false;
      }
    }

    return true;
  }
}
