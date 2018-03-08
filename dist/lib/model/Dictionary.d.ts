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
export declare class Dictionary<X> {
    private _data;
    constructor();
    has(key: any): boolean;
    set(key: any, value: X): void;
    remove(key: any): boolean;
    get(key: any): X;
    values(): X[];
    keys(): any[];
    clear(): void;
    size(): number;
    sizeLegacy(): number;
}
