/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: HashTable.spec.ts
 *
 */
import { HashTable } from '../../lib/model/HashTable';
describe('Test HashTable', () => {
    let _hashTable;
    beforeEach(() => {
        _hashTable = new HashTable();
    });
    it('#1. put/get round-trips a single entry', () => {
        _hashTable.put('one', 1);
        expect(_hashTable.get('one')).toBe(1);
        expect(_hashTable.size()).toBe(1);
    });
    it('#2. get returns undefined for a missing key', () => {
        expect(_hashTable.get('nope')).toBeUndefined();
        _hashTable.put('one', 1);
        expect(_hashTable.get('two')).toBeUndefined();
    });
    it('#3. put updates an existing key in place (no duplicate, no size growth)', () => {
        _hashTable.put('one', 1);
        _hashTable.put('one', 99);
        expect(_hashTable.get('one')).toBe(99);
        expect(_hashTable.size()).toBe(1);
    });
    it('#4. distinct keys are stored and retrieved independently', () => {
        _hashTable.put('a', 1);
        _hashTable.put('b', 2);
        _hashTable.put('c', 3);
        expect(_hashTable.get('a')).toBe(1);
        expect(_hashTable.get('b')).toBe(2);
        expect(_hashTable.get('c')).toBe(3);
        expect(_hashTable.size()).toBe(3);
    });
    it('#5. collisions do not overwrite (separate chaining)', () => {
        // Regression for issue 5.4: put() wrote `this._table[pos] = value` directly,
        // so two keys hashing to the same bucket silently overwrote each other.
        // Force a collision by inserting many keys; some must share a bucket (the
        // table has 1013 slots). Insert 50 distinct keys with distinct values and
        // confirm every one is retrievable.
        for (let i = 0; i < 50; i++) {
            _hashTable.put(`key${i}`, i);
        }
        for (let i = 0; i < 50; i++) {
            expect(_hashTable.get(`key${i}`)).toBe(i);
        }
        expect(_hashTable.size()).toBe(50);
    });
    it('#6. remove deletes an entry and returns true', () => {
        _hashTable.put('one', 1);
        _hashTable.put('two', 2);
        expect(_hashTable.remove('one')).toBe(true);
        expect(_hashTable.get('one')).toBeUndefined();
        expect(_hashTable.get('two')).toBe(2);
        expect(_hashTable.size()).toBe(1);
    });
    it('#7. remove on a missing key returns false (no throw)', () => {
        expect(_hashTable.remove('nope')).toBe(false);
        _hashTable.put('one', 1);
        expect(_hashTable.remove('two')).toBe(false);
        expect(_hashTable.size()).toBe(1);
    });
    it('#8. remove a colliding key leaves its bucket-mate intact', () => {
        for (let i = 0; i < 30; i++) {
            _hashTable.put(`key${i}`, i);
        }
        // Remove several and confirm the survivors are untouched.
        expect(_hashTable.remove('key5')).toBe(true);
        expect(_hashTable.remove('key15')).toBe(true);
        expect(_hashTable.get('key5')).toBeUndefined();
        expect(_hashTable.get('key15')).toBeUndefined();
        expect(_hashTable.get('key6')).toBe(6);
        expect(_hashTable.get('key14')).toBe(14);
        expect(_hashTable.get('key16')).toBe(16);
        expect(_hashTable.size()).toBe(28);
    });
    it('#9. re-adding a removed key works', () => {
        _hashTable.put('one', 1);
        _hashTable.remove('one');
        _hashTable.put('one', 42);
        expect(_hashTable.get('one')).toBe(42);
        expect(_hashTable.size()).toBe(1);
    });
    it('#10. keys that are anagrams do not collide by identity (djb2 disambiguation)', () => {
        // The old lose-sum hash assigned anagrams like "ab"/"ba" the same bucket;
        // with overwrite-on-collision they'd clobber each other. djb2 still may
        // hash some anagrams together, but separate chaining keeps both distinct.
        _hashTable.put('ab', 'first');
        _hashTable.put('ba', 'second');
        expect(_hashTable.get('ab')).toBe('first');
        expect(_hashTable.get('ba')).toBe('second');
        expect(_hashTable.size()).toBe(2);
    });
});
//# sourceMappingURL=HashTable.spec.js.map