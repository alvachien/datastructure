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
    get id(): number;
    set id(id: number);
    get value(): X;
    set value(data: X);
}
/**
 * Edge of adjace list graph
 */
export declare class GraphAdjaceListEdge<Y> implements IGraphEdge<Y> {
    private _from;
    private _to;
    private _weigth;
    get from(): number;
    set from(from: number);
    get to(): number;
    set to(to: number);
    get weight(): Y;
    set weight(wght: Y);
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
    IsVertexExist(id: number): boolean;
    /**
     * Edges
     */
    Edges(): GraphAdjaceListEdge<Y>[];
    IsEdgeExist(from: number, to: number): boolean;
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
