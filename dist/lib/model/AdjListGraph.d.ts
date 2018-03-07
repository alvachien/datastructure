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
import { IGraph, IGraphVertex, IGraphEdge, IGraphAdjaceListVertex } from './IGraph';
import { LinkList } from './LinkList';
export declare class GraphAdjaceListEdge<T> {
    private _to;
    private _weight;
    To: number;
    Weight: T;
}
export declare class GraphAdjaceListVertex<X, Y> implements IGraphAdjaceListVertex<X> {
    private _id;
    private _data;
    private _linkAdjList;
    ID: number;
    Data: X;
    readonly AdjaceList: LinkList<GraphAdjaceListEdge<Y>>;
}
export declare class GraphAdjaceList<X, Y> implements IGraph<X, Y> {
    private _vertex;
    constructor();
    VertexNumber(): number;
    /**
     * Edge number
     */
    EdgeNumber(): number;
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
