/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: IGraph.ts
 * Define the interface of the Graph
 */

/**
 * Vertex in the graph
 */
export interface IGraphVertex<T> {
  // ID: number
  id: number;
}

/**
 * Edge in the graph
 */
export interface IGraphEdge<T> {
  // From
  from: number;
  // To
  to: number;
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
  AddVertex(id: number, data: X): number;
  /**
   * Add Edge
   */
  AddEdge(frm: number, to: number, weight: Y): boolean;
  /**
   * DFS: Depth First Search
   */
  DFS(): IGraphVertex<X>[];
  /**
   * BFS: Breadth First Search
   */
  BFS(): IGraphVertex<Y>[];
}

