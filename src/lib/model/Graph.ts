/**
 * IGraph.ts
 * (C) Copyright, Alva Chien, 2017
 */

 import { IGraph, IGraphVertex, IGraphEdge } from './IGraph';

 /**
  * Vertext in the graph
  */
export class GraphVertex<T> implements IGraphVertex<T> {
    private _id: number;
    private _data: T;

    get ID(): number {
        return this._id;
    }
    set ID(id: number) {
        this._id = id;
    }

    get Data(): T {
        return this._data;
    }
    set Data(data: T) {
        this._data = data;
    }
}

/**
 * Edge in the graph
 */
export class GraphEdge<T> implements IGraphEdge<T> {
    private _weight: number;
    private _from: number; // From node
    private _to: number;

    get Weight(): number {
        return this._weight;
    }
    set Weight(wgt: number) {
        this._weight = wgt;
    }
    get From(): number {
        return this._from;
    }
    set From(frm: number) {
        this._from = frm;
    }
    get To(): number {
        return this._to;
    }
    set To(to: number) {
        this._to = to;
    }
}

/**
 * Graph
 */
export class Graph<X, Y> implements IGraph<X, Y> {
    private _vertex: GraphVertex<X>[];
    private _edge: GraphEdge<Y>[];

    constructor() {
        this._vertex = [];
        this._edge = [];
    }

    public VertexNumber(): number {
        return this._vertex.length;
    }
    public EdgeNumber(): number {
        return this._edge.length;
    }

    public DFS(): GraphVertex<X>[] {
        return [];
    }

    public BFS(): GraphVertex<X>[] {
        return [];        
    }
}
