/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Dictionary.ts
 *
 */

export class Dictionary<X> {
  private _data: any;

  constructor() {
    this._data = {};
  }

  public has(key: any): boolean {
    return key in this._data;
  }

  public set(key: any, value: X) {
    this._data[key] = value;
  }

  public remove(key: any): boolean {
    if (this.has(key)) {
      delete this._data[key];
      return true;
    }

    return false;
  }

  public get(key: any): X {
    return this.has(key) ? this._data[key] : undefined;
  }

  public values(): X[] {
    let ret: any[] = [];
    for(let key in this._data) {
      if (this.has(key)) {
        ret.push(this._data[key]);
      }
    }

    return ret;
  }

  public keys(): any[] {
    let ret: any[] = [];
    for(let key in this._data) {
      if (this.has(key)) {
        ret.push(key);
      }
    }

    return ret;
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
}
