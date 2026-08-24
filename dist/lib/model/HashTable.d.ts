/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: HashTable.ts
 *
 */
/**
 * Hash table with separate chaining for collision resolution.
 *
 * Each bucket is an array of entries; keys that hash to the same bucket
 * coexist instead of overwriting each other. Lookups match by exact key,
 * not just by bucket.
 */
export declare class HashTable {
    private _table;
    private _size;
    constructor();
    /**
     * Insert or update a value under `key`. Collisions (distinct keys hashing to
     * the same bucket) are resolved by chaining: a new entry is appended rather
     * than overwriting the existing one.
     */
    put(key: string, value: unknown): void;
    /**
     * Remove the entry for `key`. Returns true if an entry was removed.
     */
    remove(key: string): boolean;
    /**
     * Get the value stored under `key`, or `undefined` if absent. Distinct keys
     * that collide on the bucket are disambiguated by exact-key comparison.
     */
    get(key: string): unknown;
    /**
     * Number of stored entries (not bucket count).
     */
    size(): number;
    /**
     * djb2 string hash (Daniel J. Bernstein). Better distribution than the simple
     * lose-sum hash (which assigned the same bucket to anagrams like "ab"/"ba").
     */
    private hashCode;
}
