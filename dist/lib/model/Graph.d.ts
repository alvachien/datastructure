/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
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
    private _value;
    get id(): number;
    set id(id: number);
    get value(): T;
    set value(data: T);
}
/**
 * Edge in the graph
 */
export declare class GraphEdge<T> implements IGraphEdge<T> {
    private _weight;
    private _from;
    private _to;
    get weight(): T;
    set weight(wgt: T);
    get from(): number;
    set from(frm: number);
    get to(): number;
    set to(to: number);
}
/**
 * Graph
 * X: Type of vertex
 * Y: Weight of edge
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
    IsVertexExist(id: number): boolean;
    /**
     * Edges
     */
    Edges(): GraphEdge<Y>[];
    /**
     * Add Vertex
     */
    AddVertex(id: number, data: X): number;
    AddEdge(frm: number, to: number, weight: Y): boolean;
    IsEdgeExist(frm: number, to: number): boolean;
    /**
     * DFS
     */
    DFS(): GraphVertex<X>[];
    private DFSImpl;
    /**
     * BFS
     */
    BFS(): GraphVertex<X>[];
}
