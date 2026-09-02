/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
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

  public get(key: string): X | undefined {
    return this.has(key) ? this._data[key] : undefined;
  }

  /**
   * Get the value for a key, asserting it exists.
   * @param key Key
   * @returns The value, or undefined if the key is absent
   * @deprecated Prefer `get` and handle the `undefined` case explicitly.
   */
  public getOrThrow(key: string): X {
    if (!this.has(key)) {
      throw new Error(`Key not found: ${key}`);
    }
    return this._data[key];
  }

  public values(): X[] {
    const ret: any[] = [];
    for (const key in this._data) {
      if (this.has(key)) {
        ret.push(this._data[key]);
      }
    }

    return ret;
  }

  public keys(): string[] {
    const ret: any[] = [];
    for (const key in this._data) {
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
    for (const prop in this._data) {
      if (Object.hasOwn(this._data, prop)) {
        ++ count;
      }
    }
    return count;
  }
}
