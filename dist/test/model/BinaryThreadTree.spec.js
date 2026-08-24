/**
 * @license
 * (C) Alva Chien, 2017 - 2025. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryThreadTree.spec.ts
 *
 */
import { BinaryThreadTree } from '../../lib/model/BinaryThreadTree';
describe('Test BinaryThreadTree', () => {
    let _tree;
    beforeEach(() => {
        _tree = new BinaryThreadTree();
    });
    /**
     * Builds (InsertNode fills left first, then right):
     *        root('A')
     *        /     \
     *     'B'       'C'
     *     / \       /
     *   'D'  'E'  'F'
     */
    const buildTestTree = () => {
        const root = _tree.InsertNode(null, 1, 'A');
        const b = _tree.InsertNode(root, 2, 'B');
        const c = _tree.InsertNode(root, 3, 'C');
        _tree.InsertNode(b, 4, 'D');
        _tree.InsertNode(b, 5, 'E');
        _tree.InsertNode(c, 6, 'F');
    };
    it('#1. Test creation', () => {
        expect(_tree).toBeTruthy();
    });
    it('#2. Test InsertNode root', () => {
        const node = _tree.InsertNode(null, 1, 'A');
        expect(node).toBeTruthy();
        expect(_tree.rootNode).toBe(node);
        expect(node.data).toBe('A');
    });
    it('#3. Test InsertNode cannot add second root', () => {
        _tree.InsertNode(null, 1, 'A');
        expect(_tree.InsertNode(null, 2, 'B')).toBeNull();
    });
    it('#4. Test InsertNode full parent returns null', () => {
        const root = _tree.InsertNode(null, 1, 'A');
        _tree.InsertNode(root, 2, 'B');
        _tree.InsertNode(root, 3, 'C');
        expect(_tree.InsertNode(root, 4, 'D')).toBeNull();
    });
    it('#5. Test traversals on empty tree (must not throw).', () => {
        // Previously the `!== null` guard against `undefined` roots/children threw.
        expect(() => _tree.InorderTraversal()).not.toThrow();
        expect(() => _tree.PreorderTraversal()).not.toThrow();
        expect(() => _tree.PostorderTraversal()).not.toThrow();
        expect(_tree.InorderTraversal()).toEqual([]);
        expect(_tree.PreorderTraversal()).toEqual([]);
        expect(_tree.PostorderTraversal()).toEqual([]);
    });
    it('#6. Test InorderTraversal', () => {
        buildTestTree();
        const rst = _tree.InorderTraversal().map(n => n.data);
        expect(rst).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
    });
    it('#7. Test PreorderTraversal', () => {
        buildTestTree();
        const rst = _tree.PreorderTraversal().map(n => n.data);
        expect(rst).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
    });
    it('#8. Test PostorderTraversal', () => {
        buildTestTree();
        const rst = _tree.PostorderTraversal().map(n => n.data);
        expect(rst).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
    });
    it('#9. Test FindNode finds existing element', () => {
        buildTestTree();
        const found = _tree.FindNode('E');
        expect(found).not.toBeNull();
        expect(found.data).toBe('E');
    });
    it('#10. Test FindNode returns null when not found', () => {
        buildTestTree();
        expect(_tree.FindNode('Z')).toBeNull();
    });
    it('#11. Test FindNode on empty tree returns null', () => {
        expect(_tree.FindNode('A')).toBeNull();
    });
});
//# sourceMappingURL=BinaryThreadTree.spec.js.map