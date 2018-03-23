/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.ts
 * Implements the graph with Adjacement List.
 *
 */
import { IGraph, IGraphVertex, IGraphEdge } from './IGraph';
/**
 * Vertex of adjace list graph
 */
export declare class GraphAdjaceListVertex<X> implements IGraphVertex<X> {
    private _id;
    private _value;
    id: number;
    value: X;
}
/**
 * Edge of adjace list graph
 */
export declare class GraphAdjaceListEdge<Y> implements IGraphEdge<Y> {
    private _from;
    private _to;
    private _weigth;
    from: number;
    to: number;
    weight: Y;
}
/**
 * Graph with adjace list
 * X: generic type of Vertex
 * Y: generic type of Edge
 */
export declare class GraphAdjaceList<X, Y> implements IGraph<X, Y> {
    private _vertex;
    private _adjList;
    constructor();
    /**
     * Number of vertext
     */
    VertexNumber(): number;
    /**
     * Number of edge
     */
    EdgeNumber(): number;
    /**
     * Vertex
     */
    Vertexs(): GraphAdjaceListVertex<X>[];
    /**
     * Edges
     */
    Edges(): GraphAdjaceListEdge<Y>[];
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
    BFS(): IGraphVertex<X>[];
}
