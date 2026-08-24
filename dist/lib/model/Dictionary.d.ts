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
export declare class Dictionary<X> {
    private _data;
    constructor();
    has(key: string): boolean;
    set(key: string, value: X): void;
    remove(key: string): boolean;
    get(key: string): X | undefined;
    /**
     * Get the value for a key, asserting it exists.
     * @param key Key
     * @returns The value, or undefined if the key is absent
     * @deprecated Prefer `get` and handle the `undefined` case explicitly.
     */
    getOrThrow(key: string): X;
    values(): X[];
    keys(): string[];
    clear(): void;
    size(): number;
    sizeLegacy(): number;
}
