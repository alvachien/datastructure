/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.ts
 *
 */

export class Set {
  private _data: any;

  constructor() {
    this._data = {};
  }

  public has(val: any) {
    return this._data.hasOwnProperty(val);
  }

  public add(val: any): boolean {
    if (!this.has(val)) {
      this._data[val] = val;
      return true;
    }

    return false;
  }

  public remove(val: any): boolean {
    if (this.has(val)) {
      delete this._data[val];
      return true;
    }

    return false;
  }

  public clear(): void {
    this._data = {};
  }

  public size(): number {
    return Object.keys(this._data).length;
  }

  public sizeLegacy(): number {
    let count: number = 0;
    for(let prop in this._data) {
      if (this._data.hasOwnProperty(prop)) {
        ++ count;
      }
    }
    return count;
  }

  public values(): any[] {
    return Object.keys(this._data);
  }

  public valuesLegacy(): any[] {
    let keys: any[] = [];
    for(let key in this._data) {
      keys.push(key);
    }
    return keys;
  }

  public union(otherSet: Set): Set {
    let unionSet: Set = new Set();
    let vals = this.values();
    for(let i = 0; i < vals.length; i ++) {
      unionSet.add(vals[i]);
    }

    vals = otherSet.values();
    for(let i = 0; i < vals.length; i ++) {
      unionSet.add(vals[i]);
    }

    return unionSet;
  }

  public intersection(otherSet: Set): Set {
    let intersectionSet: Set = new Set();
    let vals = this.values();
    for(let i = 0; i < vals.length; i ++) {
      if (otherSet.has(vals[i])) {
        intersectionSet.add(vals[i]);
      }
    }

    return intersectionSet;
  }

  public difference(otherSet: Set): Set {
    let differenceSet: Set = new Set();
    let vals = this.values();
    for(let i = 0; i < vals.length; i ++) {
      if (!otherSet.has(vals[i])) {
        differenceSet.add(vals[i]);
      }
    }

    return differenceSet;
  }

  public subset(otherSet: Set): boolean {
    if (this.size > otherSet.size) {
      return false;
    } else {
      let vals = this.values();
      for(let i = 0; i < vals.length; i ++) {
        if (!otherSet.has(vals[i])) {
          return false;
        }
      }
    }
    
    return true;
  }
}
