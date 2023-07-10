/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.spec.ts
 *
 */
import { AVLTree } from '../../lib/model/AVLTree';
describe('Test AVLTree', () => {
    let _avlTree;
    beforeEach(() => {
        _avlTree = new AVLTree();
    });
    it('#1. Test creation', () => {
        expect(_avlTree).toBeTruthy();
    });
});
//# sourceMappingURL=AVLTree.spec.js.map