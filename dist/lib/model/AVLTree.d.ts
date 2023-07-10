/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.ts
 * AVL tree
 */
import { BinarySearchTreeNode, BinarySearchTree } from './BinarySearchTree';
export declare enum AVLBalanceFactor {
    UNBALANCED_RIGHT = 1,
    SLIGHTLY_UNBALANCED_RIGHT = 2,
    BALANCED = 3,
    SLIGHTLY_UNBALANCED_LEFT = 4,
    UNBALANCED_LEFT = 5
}
export declare class AVLTree<T> extends BinarySearchTree<T> {
    constructor();
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    insert(key: number, data: T): BinarySearchTreeNode<T>;
    private getNodeHeight;
    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     */
    private rotationLL;
    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    private rotationRR;
    /**
     * Left right case: rotate left then right
     * @param node Node<T>
     */
    private rotationLR;
    /**
     * Right left case: rotate right then left
     * @param node Node<T>
     */
    private rotationRL;
    private getBalanceFactor;
}
