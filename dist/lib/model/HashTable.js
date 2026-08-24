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
export class HashTable {
    _table = [];
    _size = 0;
    constructor() {
    }
    /**
     * Insert or update a value under `key`. Collisions (distinct keys hashing to
     * the same bucket) are resolved by chaining: a new entry is appended rather
     * than overwriting the existing one.
     */
    put(key, value) {
        const pos = this.hashCode(key);
        let bucket = this._table[pos];
        if (bucket === undefined) {
            bucket = [];
            this._table[pos] = bucket;
        }
        // If the key already exists in the bucket, update it in place.
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket[i].value = value;
                return;
            }
        }
        bucket.push({ key, value });
        this._size++;
    }
    /**
     * Remove the entry for `key`. Returns true if an entry was removed.
     */
    remove(key) {
        const pos = this.hashCode(key);
        const bucket = this._table[pos];
        if (bucket === undefined) {
            return false;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                bucket.splice(i, 1);
                this._size--;
                // Drop an empty bucket so the slot goes back to undefined (not []).
                if (bucket.length === 0) {
                    delete this._table[pos];
                }
                return true;
            }
        }
        return false;
    }
    /**
     * Get the value stored under `key`, or `undefined` if absent. Distinct keys
     * that collide on the bucket are disambiguated by exact-key comparison.
     */
    get(key) {
        const pos = this.hashCode(key);
        const bucket = this._table[pos];
        if (bucket === undefined) {
            return undefined;
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i].key === key) {
                return bucket[i].value;
            }
        }
        return undefined;
    }
    /**
     * Number of stored entries (not bucket count).
     */
    size() {
        return this._size;
    }
    /**
     * djb2 string hash (Daniel J. Bernstein). Better distribution than the simple
     * lose-sum hash (which assigned the same bucket to anagrams like "ab"/"ba").
     */
    hashCode(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }
}
//# sourceMappingURL=HashTable.js.map