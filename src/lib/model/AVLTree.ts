/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: AVLTree.ts
 * AVL tree
 */

import { IBinaryTreeNode, IBinarySearchTree, BinarySearchTreeCallback } from './ITree';
import { BinarySearchTreeNode, BinarySearchTree } from './BinarySearchTree';

export enum AVLBalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5
}

export class AVLTree<T> extends BinarySearchTree<T> {
  constructor() {
    super();
  }

  /**
   * Insert node
   * @param key Key of the node
   * @param data Data of the node
   */
  public insert(key: number, data: T): BinarySearchTreeNode<T> {
    const newnode: BinarySearchTreeNode<T> = new BinarySearchTreeNode<T>(key, data);

    if (this._root === undefined) {
      this._root = newnode;
    } else {
      this.insertNode(this._root, newnode);
    }

    return newnode;
  }

  private getNodeHeight(node: BinarySearchTreeNode<T>): number {
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
  private rotationLL(node: BinarySearchTreeNode<T>) {
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
  private rotationRR(node: BinarySearchTreeNode<T>) {
    const tmp = node.rightNode;
    node.rightNode = tmp.leftNode;
    tmp.leftNode = node;
    return tmp;
  }

  /**
   * Left right case: rotate left then right
   * @param node Node<T>
   */
  private rotationLR(node: BinarySearchTreeNode<T>) {
    node.leftNode = this.rotationRR(node.leftNode);
    return this.rotationLL(node);
  }

  /**
   * Right left case: rotate right then left
   * @param node Node<T>
   */
  private rotationRL(node: BinarySearchTreeNode<T>) {
    node.rightNode = this.rotationLL(node.rightNode);
    return this.rotationRR(node);
  }

  private getBalanceFactor(node: BinarySearchTreeNode<T>) {
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

  // protected insertNode(node: Node<T>, key: T) {
  //   if (node == null) {
  //     return new Node(key);
  //   } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
  //     node.left = this.insertNode(node.left, key);
  //   } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
  //     node.right = this.insertNode(node.right, key);
  //   } else {
  //     return node; // duplicated key
  //   }

  //   // verify if tree is balanced
  //   const balanceState = this.getBalanceFactor(node);

  //   if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
  //     if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
  //       // Left left case
  //       node = this.rotationLL(node);
  //     } else {
  //       // Left right case
  //       return this.rotationLR(node);
  //     }
  //   }

  //   if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
  //     if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
  //       // Right right case
  //       node = this.rotationRR(node);
  //     } else {
  //       // Right left case
  //       return this.rotationRL(node);
  //     }
  //   }

  //   return node;
  // }

  // protected removeNode(node: Node<T>, key: T) {
  //   if (node == null) {
  //     return null;
  //   }

  //   if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
  //     // The key to be deleted is in the left sub-tree
  //     node.left = this.removeNode(node.left, key);
  //   } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
  //     // The key to be deleted is in the right sub-tree
  //     node.right = this.removeNode(node.right, key);
  //   } else {
  //     // node is the node to be deleted
  //     if (node.left == null && node.right == null) {
  //       node = null;
  //     } else if (node.left == null && node.right != null) {
  //       node = node.right;
  //     } else if (node.left != null && node.right == null) {
  //       node = node.left;
  //     } else {
  //       // node has 2 children, get the in-order successor
  //       const inOrderSuccessor = this.minNode(node.right);
  //       node.key = inOrderSuccessor.key;
  //       node.right = this.removeNode(node.right, inOrderSuccessor.key);
  //     }
  //   }

  //   if (node == null) {
  //     return node;
  //   }

  //   // verify if tree is balanced
  //   const balanceState = this.getBalanceFactor(node);

  //   if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
  //     // Left left case
  //     if (
  //       this.getBalanceFactor(node.left) === BalanceFactor.BALANCED ||
  //       this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
  //     ) {
  //       return this.rotationLL(node);
  //     }
  //     // Left right case
  //     if (this.getBalanceFactor(node.left) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
  //       return this.rotationLR(node.left);
  //     }
  //   }

  //   if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
  //     // Right right case
  //     if (
  //       this.getBalanceFactor(node.right) === BalanceFactor.BALANCED ||
  //       this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
  //     ) {
  //       return this.rotationRR(node);
  //     }
  //     // Right left case
  //     if (this.getBalanceFactor(node.right) === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
  //       return this.rotationRL(node.right);
  //     }
  //   }

  //   return node;
  // }  
}
