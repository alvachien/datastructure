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
import { SequenceList } from './SequenceList';
import { Dictionary } from './Dictionary';
import { LinkList } from './LinkList';

/**
 * Vertex of adjace list graph
 */
export class GraphAdjaceListVertex<X> implements IGraphVertex<X> {
  private _id: number;
  private _value: X;

  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get value(): X {
    return this._value;
  }
  set value(data: X) {
    this._value = data;
  }
}

/**
 * Edge of adjace list graph
 */
export class GraphAdjaceListEdge<Y> implements IGraphEdge<Y> {
  private _from: number;
  private _to: number;
  private _weigth: Y;

  get from(): number {
    return this._from;
  }
  set from(from: number) {
    this._from = from;
  }
  get to(): number {
    return this._to;
  }
  set to(to: number) {
    this._to = to;
  }
  get weight(): Y {
    return this._weigth;
  }
  set weight(wght: Y) {
    this._weigth = wght;
  }
}

/**
 * Graph with adjace list
 * X: generic type of Vertex
 * Y: generic type of Edge
 */
export class GraphAdjaceList<X, Y> implements IGraph<X, Y> {
  private _vertex: SequenceList<GraphAdjaceListVertex<X>>;
  private _adjList: Dictionary<LinkList<GraphAdjaceListEdge<Y>>>;

  constructor() {
    this._vertex = new SequenceList<GraphAdjaceListVertex<X>>();
    this._adjList = new Dictionary<LinkList<GraphAdjaceListEdge<Y>>>();
  }

  /**
   * Number of vertext
   */
  public VertexNumber(): number {
    return this._vertex.Length();
  }

  /**
   * Number of edge
   */
  public EdgeNumber(): number {
    let en = 0;
    for (let i = 0; i < this._vertex.Length(); i ++) {
      en += this._adjList.get(this._vertex.GetElement(i).id.toString()).Length();
    }

    return en;
  }

  /**
   * Vertex
   */
  Vertexs(): GraphAdjaceListVertex<X>[] {
    const rst: GraphAdjaceListVertex<X>[] = [];
    for (let i = 0; i < this._vertex.Length(); i ++) {
      const elem = this._vertex.GetElement(i);
      rst.push(elem);
    }

    return rst;
  }

  IsVertexExist(id: number): boolean {
    for (let i = 0; i < this._vertex.Length(); i ++) {
      if (this._vertex.GetElement(i).id === id) {
        return true;
      }
    }

    return false;
  }

  /**
   * Edges
   */
  Edges(): GraphAdjaceListEdge<Y>[] {
    const rst: GraphAdjaceListEdge<Y>[] = [];

    if (this._adjList.size() > 0) {
      const vers = this._adjList.values();
      for (let i = 0; i < vers.length; i ++) {
        const edges = vers[i];
        for (let j = 0; j < edges.Length(); j++) {
          rst.push(edges.GetElement(j));
        }
      }
    }

    return rst;
  }

  IsEdgeExist(from: number, to: number): boolean {
    if (this.IsVertexExist(from) && this.IsVertexExist(to)) {
      const llist = this._adjList.get(from.toString());
      for (let i = 0; i < llist.Length(); i ++) {
        if (llist.GetElement(i).to === to) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Add Vertex
   */
  AddVertex(id: number, data: X): number {
    if (id <= 0 || this.IsVertexExist(id)) {
      return -1;
    }

    const vetx: GraphAdjaceListVertex<X> = new GraphAdjaceListVertex<X>();
    vetx.value = data;
    vetx.id = id;

    this._vertex.AppendElement(vetx);
    this._adjList.set(id.toString(), new LinkList<GraphAdjaceListEdge<Y>>());

    return id;
  }

  /**
   * Add Edge
   */
  AddEdge(frm: number, to: number, weight: Y): boolean {
    if (frm <= 0 || to <= 0 || !this.IsVertexExist(frm) || !this.IsVertexExist(to)) {
      return false;
    }
    if (this.IsEdgeExist(frm, to)) {
      return false;
    }

    const nedge: GraphAdjaceListEdge<Y> = new GraphAdjaceListEdge<Y>();
    nedge.from = frm;
    nedge.to = to;
    nedge.weight = weight;
    const llist = this._adjList.get(frm.toString());
    if (llist.Length() === 0)  {
      llist.InitList(nedge);
    } else {
      llist.AppendElement(nedge);
    }

    // nedge = new GraphAdjaceListEdge<Y>();
    // nedge.To = frm;
    // nedge.Weight = weight;
    // this._adjList.get(to.toString()).AppendElement(nedge);
    return true;
  }

  /**
   * DFS: Depth First Search
   */
  DFS(): IGraphVertex<X>[] {
    return [];
  }

  /**
   * BFS: Breadth First Search
   */
  BFS(): IGraphVertex<X>[] {
    return [];
  }
}

