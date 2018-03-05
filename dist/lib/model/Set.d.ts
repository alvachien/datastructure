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
export declare class Set {
    private _data;
    constructor();
    has(val: any): any;
    add(val: any): boolean;
    remove(val: any): boolean;
    clean(): void;
    size(): number;
    sizeLegacy(): number;
    values(): any[];
    valuesLegacy(): any[];
    union(otherSet: Set): Set;
    intersection(otherSet: Set): Set;
    difference(otherSet: Set): Set;
    subset(otherSet: Set): boolean;
}
