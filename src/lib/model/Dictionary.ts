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

export class Dictionary {
  private _data: any;

  constructor() {
    this._data = {};
  }

  public has(key: any): boolean {
    return key in this._data;
  }
}
