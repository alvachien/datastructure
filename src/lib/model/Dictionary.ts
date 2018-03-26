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

 /**
  * Dictionary
  * Key: string
  * Value: Template X
  */
export class Dictionary<X> {
  private _data: any;

  constructor() {
    this._data = {};
  }

  public has(key: string): boolean {
    return key in this._data;
  }

  public set(key: string, value: X) {
    this._data[key] = value;
  }

  public remove(key: string): boolean {
    if (this.has(key)) {
      delete this._data[key];
      return true;
    }

    return false;
  }

  public get(key: string): X {
    return this.has(key) ? this._data[key] : undefined;
  }

  public values(): X[] {
    const ret: any[] = [];
    for (let key in this._data) {
      if (this.has(key)) {
        ret.push(this._data[key]);
      }
    }

    return ret;
  }

  public keys(): string[] {
    const ret: any[] = [];
    for (let key in this._data) {
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
    let count = 0;
    for (let prop in this._data) {
      if (this._data.hasOwnProperty(prop)) {
        ++ count;
      }
    }
    return count;
  }
}
