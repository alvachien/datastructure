/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: rpn.spec.ts
 *
 */
import { rpn1 } from '../../lib/subject/rpn';
describe('Test rpn', () => {
    beforeEach(() => {
    });
    it("#1. Check rpn1, part I", () => {
        let rst = rpn1('12+');
        expect(rst).toBe(3);
        rst = rpn1('92-');
        expect(rst).toBe(7);
    });
    it("#2. Check rpn1, part II", () => {
        let rst = rpn1('12+');
        expect(rst).toBe(3);
        rst = rpn1('92-');
        expect(rst).toBe(7);
    });
});
//# sourceMappingURL=rpn.spec.js.map