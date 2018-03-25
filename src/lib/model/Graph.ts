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
export class GraphVertex<T> implements IGraphVertex<T> {
  private _id: number;
  private _value: T;

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get value(): T {
    return this._value;
  }
  set value(data: T) {
    this._value = data;
  }
}

/**
 * Edge in the graph
 */
export class GraphEdge<T> implements IGraphEdge<T> {
  private _weight: T;
  private _from: number; // From node
  private _to: number;

  get weight(): T {
    return this._weight;
  }
  set weight(wgt: T) {
    this._weight = wgt;
  }
  get from(): number {
    return this._from;
  }
  set from(frm: number) {
    this._from = frm;
  }
  get to(): number {
    return this._to;
  }
  set to(to: number) {
    this._to = to;
  }
}

/**
 * Graph
 * X: Type of vertex
 * Y: Weight of edge
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
  public IsVertexExist(id: number): boolean {
    for (let i = 0; i < this._vertex.length; i ++) {
      if (this._vertex[i].id === id) {
        return true;
      }
    }
    return false;
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
  public AddVertex(id: number, data: X): number {
    if (id <= 0 || this.IsVertexExist(id)) {
      return -1;
    }

    const nnode: GraphVertex<X> = new GraphVertex<X>();
    nnode.value = data;
    nnode.id = id;
    this._vertex.push(nnode);
    return nnode.id;
  }

  public AddEdge(frm: number, to: number, weight: Y): boolean {
    if (frm <= 0 || to <= 0 || !this.IsVertexExist(frm) || !this.IsVertexExist(to)) {
      return false;
    }
    if (this.IsEdgeExist(frm, to)) {
      return false;
    }

    const edge: GraphEdge<Y> = new GraphEdge<Y>();
    edge.from = frm;
    edge.to = to;
    edge.weight = weight;
    this._edge.push(edge);
    return true;
  }

  public IsEdgeExist(frm: number, to: number): boolean {
    for (let i = 0; i < this._edge.length; i ++) {
      if (this._edge[i].from === frm && this._edge[i].to === to) {
        return true;
      }
    }

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

    for (let i = 0; i < this._vertex.length; i++) {
      this.DFSImpl(this._vertex[i], visited, rst);
    }

    return rst;
  }
  private DFSImpl(vex: GraphVertex<X>, visited: number[], rst: GraphVertex<X>[]) {
    let bvisited = false;

    for (let i = 0; i < visited.length; i++) {
      if (visited[i] === vex.id) {
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
      if (this._edge[i].from === vex.id) {
        // Get the to
        let tonode: GraphVertex<X> = null;
        for (let j = 0; j < this._vertex.length; j++) {
          if (this._vertex[j].id === this._edge[i].to) {
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
    // if (this._vertex.length <= 0) {
    //   return [];
    // }
    return [];
  }
}
