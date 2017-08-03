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
    /**
     * Vertex
     */
    public Vertexs(): GraphVertex<X>[] {
        return this._vertex;
    }

    /**
     * Edges
     */
    public Edges(): GraphEdge<Y>[] {
        return this._edge;
    }

    /**
     * Add Vertex
     */
    public AddVertex(data: X): number {
        const nnode: GraphVertex<X> = new GraphVertex<X>();
        nnode.Data = data;
        if (this._vertex.length === 0) {
            nnode.ID = 1;
        } else {
            let mid = 1;
            for (const vex of this._vertex) {
                if (mid < vex.ID) {
                    mid = vex.ID;
                }
            }

            nnode.ID = mid;
        }

        this._vertex.push(nnode);
        return nnode.ID;
    }

    public AddEdge(frm: number, to: number, weight: Y): boolean {
        // Check from and to
        for (const vex of this._vertex) {

        }
        // Check existence of the edge

        // TBD


        return false;
    }

    /**
     * DFS
     */
    public DFS(): GraphVertex<X>[] {
        if (this._vertex.length <= 0) {
            return [];
        }

        const visited: number[] = [];
        const rst: GraphVertex<X>[] = [];

        for (let i = 0; i < this._vertex.length; i ++) {
            this.DFSImpl(this._vertex[i], visited, rst);
        }

        return rst;
    }
    private DFSImpl(vex: GraphVertex<X>, visited: number[], rst: GraphVertex<X>[]) {
        let bvisited = false;

        for (let i = 0; i < visited.length; i ++) {
            if (visited[i] === vex.ID) {
                bvisited = true;
                break;
            }
        }

        if (!bvisited) {
            rst.push(vex);
        } else {
            return;
        }

        for (let i = 0; i < this._edge.length; i++) {
            if (this._edge[i].From === vex.ID) {
                // Get the to
                let tonode: GraphVertex<X> = null;
                for (let j = 0; j < this._vertex.length; j++) {
                    if (this._vertex[j].ID === this._edge[i].To) {
                        tonode = this._vertex[j];
                        break;
                    }
                }

                this.DFSImpl(tonode, visited, rst);
            }
            // Not necessary??
            // else if (this._edge[i].To === vex.ID) {
            //     // Get the to
            //     let fromnode: GraphVertex<X> = null;
            //     for(let j: number = 0; j < this._vertex.length; j++) {
            //         if (this._vertex[j].ID === this._edge[i].From) {
            //             fromnode = this._vertex[j];
            //             break;
            //         }
            //     }

            //     this.DFSImpl(fromnode, visited, rst);
            // }
        }
    }

    /**
     * BFS
     */
    public BFS(): GraphVertex<X>[] {
        if (this._vertex.length <= 0) {
            return [];
        }
    }
}
