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
export var AVLBalanceFactor;
(function (AVLBalanceFactor) {
    AVLBalanceFactor[AVLBalanceFactor["UNBALANCED_RIGHT"] = 1] = "UNBALANCED_RIGHT";
    AVLBalanceFactor[AVLBalanceFactor["SLIGHTLY_UNBALANCED_RIGHT"] = 2] = "SLIGHTLY_UNBALANCED_RIGHT";
    AVLBalanceFactor[AVLBalanceFactor["BALANCED"] = 3] = "BALANCED";
    AVLBalanceFactor[AVLBalanceFactor["SLIGHTLY_UNBALANCED_LEFT"] = 4] = "SLIGHTLY_UNBALANCED_LEFT";
    AVLBalanceFactor[AVLBalanceFactor["UNBALANCED_LEFT"] = 5] = "UNBALANCED_LEFT";
})(AVLBalanceFactor || (AVLBalanceFactor = {}));
export class AVLTree extends BinarySearchTree {
    constructor() {
        super();
    }
    /**
     * Insert node
     * @param key Key of the node
     * @param data Data of the node
     */
    insert(key, data) {
        const newnode = new BinarySearchTreeNode(key, data);
        if (this._root === undefined) {
            this._root = newnode;
        }
        else {
            this.insertNode(this._root, newnode);
        }
        return newnode;
    }
    getNodeHeight(node) {
        if (!node) {
            return -1;
        }
        return Math.max(this.getNodeHeight(node.leftNode), this.getNodeHeight(node.rightNode)) + 1;
    }
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
    rotationLL(node) {
        const tmp = node.leftNode;
        node.leftNode = tmp.rightNode;
        tmp.rightNode = node;
        return tmp;
    }
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
    rotationRR(node) {
        const tmp = node.rightNode;
        node.rightNode = tmp.leftNode;
        tmp.leftNode = node;
        return tmp;
    }
    /**
     * Left right case: rotate left then right
     * @param node Node<T>
     */
    rotationLR(node) {
        node.leftNode = this.rotationRR(node.leftNode);
        return this.rotationLL(node);
    }
    /**
     * Right left case: rotate right then left
     * @param node Node<T>
     */
    rotationRL(node) {
        node.rightNode = this.rotationLL(node.rightNode);
        return this.rotationRR(node);
    }
    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.leftNode) - this.getNodeHeight(node.rightNode);
        switch (heightDifference) {
            case -2:
                return AVLBalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return AVLBalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return AVLBalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return AVLBalanceFactor.UNBALANCED_LEFT;
            default:
                return AVLBalanceFactor.BALANCED;
        }
    }
}
//# sourceMappingURL=AVLTree.js.map