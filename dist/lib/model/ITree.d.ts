/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: ITree.ts
 *
 * This file provides a definition of tree.
 *
 */
/**
 * interface of tree node
 */
export interface ITreeNode<T> {
    key: number;
    data: T;
}
/**
 * interface of tree
 */
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
    Root(): ITreeNode<T>;
    /**
     * Insert a child
     */
    InsertChild(par: ITreeNode<T>, data: T): ITreeNode<T>;
}
/**
 * Binary tree node
 */
export interface IBinaryTreeNode<T> {
    key: number;
    data: T;
}
/**
 * Binary tree
 */
export interface IBinaryTree<T> {
    /**
     * Root node
     */
    rootNode: IBinaryTreeNode<T>;
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
     * @param key, the key of the node to be inserted
     * @param data, the data of the node to be inserted
     * Return false if the insertion is failed.
     * Return a reference to new created note if succeed.
     */
    InsertNode(parNode: IBinaryTreeNode<T>, key: number, data: T): IBinaryTreeNode<T>;
    /**
     * FindNode: Find the node
     * @param elem, the element with specified data
     * Return the node if found
     */
    FindNode(elem: T): IBinaryTreeNode<T>;
}
/**
 * Callback type for IBinarySearchTree
 */
export declare type BinarySearchTreeCallback<T> = (node: IBinaryTreeNode<T>) => void;
/**
 * Binary search tree
 */
export interface IBinarySearchTree<T> {
    /**
     * Root node
     */
    rootNode: IBinaryTreeNode<T>;
    /**
     * Inorder traverse: Inorder travere the whole tree
     * Returns an array of the element
     */
    inOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * preorder traversal: Inorder travere the whole tree
     * Returns an array of the element
     */
    preOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * postorder traversal: Inorder travere the whole tree
     * Returns an array of the element
     */
    postOrderTraverse(callback: BinarySearchTreeCallback<T>): void;
    /**
     * insert: Insert an node to the binary tree
     * @param key, the key of the new node
     * @param data, the data of the new node
     * Return a reference to new created note if succeed.
     */
    insert(key: number, data: T): IBinaryTreeNode<T>;
    /**
     * search: Find the node
     * @param key, the key to search
     * Return the node if found
     */
    search(key: number): IBinaryTreeNode<T>;
}
