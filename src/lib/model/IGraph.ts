/**
 * IGraph.ts
 * (C) Copyright, Alva Chien, 2017
 */

export interface IGraphVertex<T> {
}

export interface IGraphEdge<T> {
}

export interface IGraphAdjaceList<T> {    
}

export interface IGraph<X, Y> {
    /**
     * DFS: Depth First Search
     */
    DFS() : IGraphVertex<X>[];
    /**
     * BFS: Breadth First Search
     */
    BFS(): IGraphVertex<Y>[];    
}

