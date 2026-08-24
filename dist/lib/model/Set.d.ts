/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.ts
 *
 */
/**
 * Class Set.
 *
 * Backed by a Map so that values are stored by identity (objects do not
 * collide via string coercion) and `values()` returns the original values.
 */
export declare class Set<T = any> {
    private _data;
    constructor();
    has(val: T): boolean;
    add(val: T): boolean;
    remove(val: T): boolean;
    clear(): void;
    size(): number;
    /**
     * @deprecated Alias kept for backward compatibility; prefer `size()`.
     */
    sizeLegacy(): number;
    values(): T[];
    /**
     * @deprecated Alias kept for backward compatibility; prefer `values()`.
     */
    valuesLegacy(): T[];
    union(otherSet: Set<T>): Set<T>;
    intersection(otherSet: Set<T>): Set<T>;
    difference(otherSet: Set<T>): Set<T>;
    /**
     * Returns true when every element of this set is also in `otherSet`.
     */
    subset(otherSet: Set<T>): boolean;
}
