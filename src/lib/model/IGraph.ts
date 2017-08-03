/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: IGraph.ts
 * 
 */

 /**
  * Vertex in the graph
  */
export interface IGraphVertex<T> {
}

/**
 * Edge in the graph
 */
export interface IGraphEdge<T> {
}

/**
 * Adjact list
 */
export interface IGraphAdjaceListVertex<T> {
}

/**
 * Interface for the graph
 */
export interface IGraph<X, Y> {
    /**
     * Vertex
     */
    Vertexs(): IGraphVertex<X>[];
    /**
     * Edges
     */
    Edges(): IGraphEdge<Y>[];
    /**
     * Add Vertex
     */
    AddVertex(data: X): number;
    /**
     * Add Edge
     */
    AddEdge(frm: number, to: number, weight: Y) : boolean;
    /**
     * DFS: Depth First Search
     */
    DFS() : IGraphVertex<X>[];
    /**
     * BFS: Breadth First Search
     */
    BFS(): IGraphVertex<Y>[];
}

