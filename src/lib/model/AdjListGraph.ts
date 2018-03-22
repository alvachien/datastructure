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
import { SequenceList } from './SequenceList';
import { Dictionary } from './Dictionary';
import { LinkList } from './LinkList';

/**
 * Vertex of graph
 */
export class GraphAdjaceListVertex<X> implements IGraphAdjaceListVertex<X> {
  private _id: number;
  private _data: X;

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
}

class GraphAdjaceListEdge<Y> {
  private _to: number;
  private _weigth: Y;

  get To(): number {
    return this._to;
  }
  get Weight(): Y {
    return this._weigth;
  }
  set To(to: number) {
    this._to = to;
  }
  set Weight(wght: Y) {
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
      en += this._adjList.get(this._vertex.GetElement(i).ID.toString()).Length();
    }

    return en;
  }

  /**
   * Vertex
   */
  Vertexs(): IGraphVertex<X>[] {
    let rst: IGraphVertex<X>[] = [];
    for (let i = 0; i < this._vertex.Length(); i ++) {
      let elem = this._vertex.GetElement(i);
      rst.push({
        id: elem.ID
      });
    }
    
    return rst;
  }

  /**
   * Edges
   */
  Edges(): IGraphEdge<Y>[] {
    let rst: IGraphEdge<Y>[] = [];

    if (this._adjList.size() > 0) {
      let vers = this._adjList.keys();
      for(let ver of vers) {
        let edges = this._adjList.get(ver);
        for(let i = 0; i < edges.Length(); i++) {
          let elem = edges.GetElement(i);
          rst.push({
            from: +ver,
            to: elem.To
          });
        }
      }
    }

    return rst;
  }

  /**
   * Add Vertex
   */
  AddVertex(id: number, data: X): number {
    let vetx: GraphAdjaceListVertex<X> = new GraphAdjaceListVertex<X>();
    vetx.Data = data;
    vetx.ID = id;

    this._vertex.AppendElement(vetx);
    this._adjList.set(id.toString(), new LinkList<GraphAdjaceListEdge<Y>>());

    return id;
  }

  /**
   * Add Edge
   */
  AddEdge(frm: number, to: number, weight: Y): boolean {
    let nedge: GraphAdjaceListEdge<Y> = new GraphAdjaceListEdge<Y>();
    nedge.To = to;
    nedge.Weight = weight;
    let llist = this._adjList.get(frm.toString());
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
  BFS(): IGraphVertex<Y>[] {
    return [];
  }
}

