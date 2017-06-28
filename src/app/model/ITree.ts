/**
 * ITree.ts
 * (C) Copyright, Alva Chien
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
    InsertChild(par: ITreeNode<T>, data: T): boolean;
}
