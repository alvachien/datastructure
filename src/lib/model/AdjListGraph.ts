/**
 * @license
 * 
 * Graph.ts
 * (C) Alva Chien, 2017
 * 
 * Implements the graph with Adjacement List.
 */

import { IGraph, IGraphAdjaceListVertex } from './IGraph';

export class GraphAdjaceListVertex<T> implements IGraphAdjaceListVertex<T> {
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
