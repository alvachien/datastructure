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
export declare class HashTable {
    private _table;
    constructor();
    put(key: string, value: any): void;
    remove(key: any): void;
    get(key: any): any;
    private generateLoseHashCode;
    private generatedjb2HashCode;
}
