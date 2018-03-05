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
export declare class Dictionary {
    private _data;
    constructor();
    has(key: any): boolean;
    set(key: any, value: any): void;
    remove(key: any): boolean;
    get(key: any): any;
    values(): any[];
    keys(): any[];
    clear(): void;
    size(): number;
    sizeLegacy(): number;
}
