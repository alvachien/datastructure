/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: HashTable.ts
 *
 */

export class HashTable {
  private _table = [];

  constructor() {    
  }

  public put(key: string, value: any) {
    let pos = this.generateLoseHashCode(key);
    this._table[pos] = value;
  }

  public remove(key: any) {
    this._table[this.generateLoseHashCode(key)] = undefined;
  }

  public get(key: any) {
    return this._table[this.generateLoseHashCode(key)];
  }

  private generateLoseHashCode(key: string) {
    let hash = 0;
    for(let i = 0; i < key.length; i ++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }

  private generatedjb2HashCode(key: string) {
    let hash = 5381;
    for(let i = 0; i < key.length; i ++) {
      hash = hash * 33 + key.charCodeAt(i);
    }

    return hash % 1013;
  }
}
