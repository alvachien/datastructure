"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Dictionary.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Dictionary_1 = require("../../lib/model/Dictionary");
describe('Test Dictionary', function () {
    var _dict;
    beforeEach(function () {
        _dict = new Dictionary_1.Dictionary();
    });
    it("#1. Test set, values, has and size()", function () {
        expect(_dict).toBeTruthy();
        _dict.set('test1', 'test1');
        _dict.set('test2', 'test2');
        _dict.set('test3', 'test3');
        expect(_dict.size()).toBe(3);
        expect(_dict.sizeLegacy()).toBe(3);
        expect(_dict.has('test1')).toBe(true);
        expect(_dict.has('test4')).toBe(false);
        var vals = _dict.values();
        expect(vals.length).toBe(3);
        vals = _dict.keys();
        expect(vals.length).toBe(3);
    });
    it("#2. Test remove()", function () {
        expect(_dict).toBeTruthy();
        _dict.set('test1', 'test1');
        _dict.set('test2', 'test2');
        _dict.set('test3', 'test3');
        expect(_dict.size()).toBe(3);
        expect(_dict.has('test1')).toBe(true);
        _dict.remove('test1');
        expect(_dict.size()).toBe(2);
        expect(_dict.has('test1')).toBe(false);
        expect(_dict.has('test3')).toBe(true);
        _dict.remove('test3');
        expect(_dict.has('test3')).toBe(false);
    });
});
//# sourceMappingURL=Dictionary.spec.js.map