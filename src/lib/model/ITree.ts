/**
 * @license
  * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: ITree.ts
 *
 * This file provides a definition of tree.
 *
 */

export interface ITreeNode<T> {
}

export interface ITree<T> {
    /**
     * Is empty? true means it is empty
     */
    IsEmpty(): boolean;

    /**
     * Depth of the tree
     */
    Depth(): number;

    /**
     * Root of the tree
     */
    Root() : ITreeNode<T>;

    /**
     * Insert a child
     */
    InsertChild(par: ITreeNode<T>, data: T): ITreeNode<T>;
}


export interface IBinaryTreeNode<T> {

}

export interface IBinaryTree<T> {
    /**
     * Inorder traversal: Inorder travere the whole tree
     * Returns an array of the element
     */
    InorderTraversal(): Array<IBinaryTreeNode<T>>;

    /**
     * Preorder traversal: Inorder travere the whole tree
     * Returns an array of the element
     */
    PreorderTraversal(): Array<IBinaryTreeNode<T>>;

    /**
     * Postorder traversal: Inorder travere the whole tree
     * Returns an array of the element
     */
    PostorderTraversal(): Array<IBinaryTreeNode<T>>;

    /**
     * InsertNode: Insert an node to the binary tree
     * @param parNode, the parent node. If it is null, it means add it as the root node.
     * Return false if the insertion is failed.
     * Return a reference to new created note if succeed.
     */
    InsertNode(parNode: IBinaryTreeNode<T>, data: T): IBinaryTreeNode<T>;

    /**
     * FindNode: Find the node
     * @param elem, the element with specified data
     * Return the node if found
     */
    FindNode(elem: T): IBinaryTreeNode<T>;
}
