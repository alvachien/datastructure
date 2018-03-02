/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.ts
 *
 * Implements the graph with Adjacement Matrix.
 */
import { IGraph, IGraphVertex, IGraphEdge } from './IGraph';
/**
 * Vertext in the graph
 */
export declare class GraphVertex<T> implements IGraphVertex<T> {
    private _id;
    private _data;
    ID: number;
    Data: T;
}
/**
 * Edge in the graph
 */
export declare class GraphEdge<T> implements IGraphEdge<T> {
    private _weight;
    private _from;
    private _to;
    Weight: number;
    From: number;
    To: number;
}
/**
 * Graph
 */
export declare class Graph<X, Y> implements IGraph<X, Y> {
    private _vertex;
    private _edge;
    constructor();
    VertexNumber(): number;
    EdgeNumber(): number;
    /**
     * Vertex
     */
    Vertexs(): GraphVertex<X>[];
    /**
     * Edges
     */
    Edges(): GraphEdge<Y>[];
    /**
     * Add Vertex
     */
    AddVertex(data: X): number;
    AddEdge(frm: number, to: number, weight: Y): boolean;
    /**
     * DFS
     */
    DFS(): GraphVertex<X>[];
    private DFSImpl(vex, visited, rst);
    /**
     * BFS
     */
    BFS(): GraphVertex<X>[];
}
