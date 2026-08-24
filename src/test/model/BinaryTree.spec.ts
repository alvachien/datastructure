/**
 * @license
 * (C) Alva Chien, 2017 - 2025. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BinaryTree.spec.ts
 *
 */

import { BinaryTree, BinaryTreeNode } from '../../lib/model/BinaryTree';

describe('Test BinaryTree', () => {
  let _tree: BinaryTree<string>;

  beforeEach(() => {
    _tree = new BinaryTree<string>();
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
    const root = _tree.InsertNode(null, 'A')!;
    const b = _tree.InsertNode(root, 'B')!;
    const c = _tree.InsertNode(root, 'C')!;
    _tree.InsertNode(b, 'D');
    _tree.InsertNode(b, 'E');
    _tree.InsertNode(c, 'F');
  };

  it('#1. Test creation', () => {
    expect(_tree).toBeTruthy();
    expect(_tree.Root).toBeNull();
  });

  it('#2. Test InsertNode root', () => {
    const node = _tree.InsertNode(null, 'A');
    expect(node).toBeTruthy();
    expect(_tree.Root).toBe(node);
    expect(node!.Data).toBe('A');
  });

  it('#3. Test InsertNode cannot add second root', () => {
    _tree.InsertNode(null, 'A');
    const second = _tree.InsertNode(null, 'B');
    expect(second).toBeNull();
  });

  it('#4. Test InsertNode full parent returns null', () => {
    const root = _tree.InsertNode(null, 'A')!;
    _tree.InsertNode(root, 'B');
    _tree.InsertNode(root, 'C');
    // Parent is full now
    const third = _tree.InsertNode(root, 'D');
    expect(third).toBeNull();
  });

  it('#5. Test InorderTraversal', () => {
    buildTestTree();
    const rst = _tree.InorderTraversal().map(n => n.Data);
    expect(rst).toEqual(['D', 'B', 'E', 'A', 'F', 'C']);
  });

  it('#6. Test PreorderTraversal', () => {
    buildTestTree();
    const rst = _tree.PreorderTraversal().map(n => n.Data);
    expect(rst).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('#7. Test PostorderTraversal', () => {
    buildTestTree();
    const rst = _tree.PostorderTraversal().map(n => n.Data);
    expect(rst).toEqual(['D', 'E', 'B', 'F', 'C', 'A']);
  });

  it('#8. Test FindNode finds existing element', () => {
    buildTestTree();
    const found = _tree.FindNode('E');
    expect(found).not.toBeNull();
    expect(found!.Data).toBe('E');
  });

  it('#9. Test FindNode finds root', () => {
    buildTestTree();
    const found = _tree.FindNode('A');
    expect(found).not.toBeNull();
    expect(found!.Data).toBe('A');
  });

  it('#10. Test FindNode returns null when not found', () => {
    buildTestTree();
    const found = _tree.FindNode('Z');
    expect(found).toBeNull();
  });

  it('#11. Test FindNode on empty tree returns null', () => {
    const found = _tree.FindNode('A');
    expect(found).toBeNull();
  });
});
