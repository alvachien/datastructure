/**
 * @license
 * (C) Alva Chien, 2017 - 2025. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.spec.ts
 *
 */

import { AVLTree } from '../../lib/model/AVLTree';
import { BinarySearchTreeNode } from '../../lib/model/BinarySearchTree';

describe('Test AVLTree', () => {
  let _avlTree: AVLTree<string>;

  beforeEach(() => {
    _avlTree = new AVLTree<string>();
  });

  it('#1. Test creation', () => {
    expect(_avlTree).toBeTruthy();
  });

  it('#2. Test insert single node', () => {
    const node = _avlTree.insert(10, 'ten');
    expect(node).toBeTruthy();
    expect(_avlTree.rootNode).toBe(node);
    expect(_avlTree.rootNode.key).toBe(10);
  });

  /**
   * Computes the height of a subtree (number of edges on the longest path).
   * Undefined/absent children have height -1 so a leaf is height 0.
   */
  const height = (node: BinarySearchTreeNode<string> | undefined): number => {
    if (!node) {
      return -1;
    }
    return 1 + Math.max(height(node.leftNode), height(node.rightNode));
  };

  /**
   * Walks the whole tree and asserts the AVL invariant: every node's balance
   * factor is in {-1, 0, 1}. Returns the number of nodes visited.
   */
  const assertAVLBalanced = (node: BinarySearchTreeNode<string> | undefined): number => {
    if (!node) {
      return 0;
    }
    const lh = height(node.leftNode);
    const rh = height(node.rightNode);
    expect(Math.abs(lh - rh)).toBeLessThanOrEqual(1);
    return 1 + assertAVLBalanced(node.leftNode) + assertAVLBalanced(node.rightNode);
  };

  /**
   * Asserts the BST ordering invariant via an in-order traversal that must
   * yield strictly increasing keys.
   */
  const assertBSTOrdered = () => {
    const keys: number[] = [];
    _avlTree.inOrderTraverse((n) => keys.push(n.key));
    for (let i = 1; i < keys.length; i++) {
      expect(keys[i]).toBeGreaterThan(keys[i - 1]);
    }
    return keys;
  };

  it('#3. Test ascending inserts stay balanced (Right-Right case).', () => {
    // Inserting 1..7 into a plain BST yields a right-leaning chain of height 6.
    // An AVL tree must rebalance so the height is logarithmic.
    for (let k = 1; k <= 7; k++) {
      _avlTree.insert(k, `v${k}`);
    }
    const count = assertAVLBalanced(_avlTree.rootNode);
    expect(count).toBe(7);
    const keys = assertBSTOrdered();
    expect(keys).toEqual([1, 2, 3, 4, 5, 6, 7]);
    // Root of a balanced 1..7 AVL tree is 4, and height is 2.
    expect(_avlTree.rootNode.key).toBe(4);
    expect(height(_avlTree.rootNode)).toBe(2);
  });

  it('#4. Test descending inserts stay balanced (Left-Left case).', () => {
    for (let k = 7; k >= 1; k--) {
      _avlTree.insert(k, `v${k}`);
    }
    const count = assertAVLBalanced(_avlTree.rootNode);
    expect(count).toBe(7);
    const keys = assertBSTOrdered();
    expect(keys).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(_avlTree.rootNode.key).toBe(4);
    expect(height(_avlTree.rootNode)).toBe(2);
  });

  it('#5. Test Left-Right case.', () => {
    // Insert 3, then 1, then 2 => Left-Right imbalance at 3.
    _avlTree.insert(3, 'c');
    _avlTree.insert(1, 'a');
    _avlTree.insert(2, 'b');
    expect(_avlTree.rootNode.key).toBe(2);
    assertAVLBalanced(_avlTree.rootNode);
    expect(assertBSTOrdered()).toEqual([1, 2, 3]);
  });

  it('#6. Test Right-Left case.', () => {
    // Insert 1, then 3, then 2 => Right-Left imbalance at 1.
    _avlTree.insert(1, 'a');
    _avlTree.insert(3, 'c');
    _avlTree.insert(2, 'b');
    expect(_avlTree.rootNode.key).toBe(2);
    assertAVLBalanced(_avlTree.rootNode);
    expect(assertBSTOrdered()).toEqual([1, 2, 3]);
  });

  it('#7. Test height is logarithmic for a larger ascending run.', () => {
    const n = 100;
    for (let k = 1; k <= n; k++) {
      _avlTree.insert(k, `v${k}`);
    }
    const count = assertAVLBalanced(_avlTree.rootNode);
    expect(count).toBe(n);
    const keys = assertBSTOrdered();
    expect(keys.length).toBe(n);
    expect(keys[0]).toBe(1);
    expect(keys[n - 1]).toBe(n);
    // An AVL tree of n nodes has height <= 1.44 * log2(n+2) - 0.328.
    // For n=100 that bound is ~9.2; assert a comfortable cap of 10.
    expect(height(_avlTree.rootNode)).toBeLessThanOrEqual(10);
  });

  it('#8. Test search still works after rebalancing.', () => {
    for (let k = 1; k <= 15; k++) {
      _avlTree.insert(k, `v${k}`);
    }
    for (let k = 1; k <= 15; k++) {
      const found = _avlTree.search(k);
      expect(found).toBeTruthy();
      expect(found!.key).toBe(k);
      expect(found!.data).toBe(`v${k}`);
    }
    expect(_avlTree.search(99)).toBeFalsy();
  });

  it('#9. Test duplicate key is a no-op.', () => {
    _avlTree.insert(10, 'ten');
    _avlTree.insert(10, 'ten-again');
    expect(_avlTree.rootNode.key).toBe(10);
    expect(_avlTree.rootNode.data).toBe('ten'); // original data kept
    // Count via in-order traversal.
    const keys: number[] = [];
    _avlTree.inOrderTraverse((n) => keys.push(n.key));
    expect(keys.length).toBe(1);
  });
});
