/**
 * @license
 * 
 * Graph.ts
 * (C) Alva Chien, 2017
 * 
 * Implements the graph with Adjacement List.
 * 
 */

import { IGraph, IGraphVertex, IGraphEdge, IGraphAdjaceListVertex } from './IGraph';
import { LinkList } from './LinkList';

export class GraphAdjaceListEdge<T> {
    private _to: number;
    private _weight: T;

    get To(): number {
        return this._to;
    }
    set ID(to: number) {
        this._to = to;
    }

    get Weight(): T {
        return this._weight;
    }
    set Data(weight: T) {
        this._weight = weight;
    }
}

export class GraphAdjaceListVertex<X, Y> implements IGraphAdjaceListVertex<X> {
    private _id: number;
    private _data: X;
    private _linkAdjList: LinkList<GraphAdjaceListEdge<Y>> = new LinkList<GraphAdjaceListEdge<Y>>();

    get ID(): number {
        return this._id;
    }
    set ID(id: number) {
        this._id = id;
    }

    get Data(): X {
        return this._data;
    }
    set Data(data: X) {
        this._data = data;
    }

    get AdjaceList(): LinkList<GraphAdjaceListEdge<Y>> {
        return this._linkAdjList;
    }
}

export class GraphAdjaceList<X, Y> implements IGraph<X, Y> {
    private _vertex : GraphAdjaceListVertex<X, Y>;

    /**
     * Vertex
     */
    Vertexs(): IGraphVertex<X>[] {
        return [];
    }

    /**
     * Edges
     */
    Edges(): IGraphEdge<Y>[] {
        return [];
    }

    /**
     * Add Vertex
     */
    AddVertex(data: X): number {
        return -1;
    }

    /**
     * Add Edge
     */
    AddEdge(frm: number, to: number, weight: Y) : boolean {
        return false;
    }

    /**
     * DFS: Depth First Search
     */
    DFS() : IGraphVertex<X>[] {
        return [];
    }

    /**
     * BFS: Breadth First Search
     */
    BFS(): IGraphVertex<Y>[] {
        return [];
    }
}

