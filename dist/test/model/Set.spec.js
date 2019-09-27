/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Set.spec.ts
 *
 */
import { Set } from '../../lib/model/Set';
describe('Test Set', () => {
    let _set;
    beforeEach(() => {
        _set = new Set();
    });
    it('#1. Check add, values, has and size()', () => {
        expect(_set).toBeTruthy();
        _set.add(1);
        let vals = _set.values();
        expect(vals.length).toBe(1);
        //    expect(vals[0]).toBe(1);
        vals = _set.valuesLegacy();
        expect(vals.length).toBe(1);
        //    expect(vals[0]).toBe(1);
        expect(_set.has(1)).toBe(true);
        expect(_set.size()).toBe(1);
        _set.add(2);
        vals = _set.values();
        expect(vals.length).toBe(2);
        //    expect(vals[0]).toBe(1);
        //    expect(vals[1]).toBe(2);
    });
    it('#2. Check remove()', () => {
        _set.add(1);
        _set.add(2);
        let vals = _set.values();
        expect(vals.length).toBe(2);
        //    expect(vals[0]).toBe(1);
        //    expect(vals[1]).toBe(2);
        _set.remove(1);
        vals = _set.values();
        expect(vals.length).toBe(1);
        //    expect(vals[0]).toBe(2);
    });
    it('#3. Test union()', () => {
        _set.add(1);
        _set.add(2);
        _set.add(3);
        const set2 = new Set();
        set2.add(3);
        set2.add(4);
        set2.add(5);
        set2.add(6);
        const unset = _set.union(set2);
        const vals = unset.values();
        expect(vals.length).toBe(6);
        expect(unset.has(3)).toBe(true);
    });
    it('#4. Test intersection()', () => {
        _set.add(1);
        _set.add(2);
        _set.add(3);
        const set2 = new Set();
        set2.add(3);
        set2.add(4);
        set2.add(5);
        set2.add(6);
        const unset = _set.intersection(set2);
        const vals = unset.values();
        expect(vals.length).toBe(1);
        expect(unset.has(3)).toBe(true);
        expect(unset.has(2)).toBe(false);
    });
    it('#5. Test difference()', () => {
        _set.add(1);
        _set.add(2);
        _set.add(3);
        const set2 = new Set();
        set2.add(3);
        set2.add(4);
        set2.add(5);
        set2.add(6);
        const unset = _set.difference(set2);
        const vals = unset.values();
        expect(vals.length).toBe(2);
        expect(unset.has(3)).toBe(false);
        expect(unset.has(2)).toBe(true);
    });
    it('#6. Test subset()', () => {
        _set.add(1);
        _set.add(2);
        _set.add(3);
        const set2 = new Set();
        set2.add(1);
        set2.add(2);
        set2.add(3);
        set2.add(4);
        set2.add(5);
        set2.add(6);
        expect(_set.subset(set2)).toBe(true);
        _set.add(8);
        expect(_set.subset(set2)).toBe(false);
    });
});
//# sourceMappingURL=Set.spec.js.map