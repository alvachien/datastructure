/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphWithAdjList.ts
 * Implements the graph with Adjacement List.
 *
 */

import { SequenceList } from './SequenceList';
import { Dictionary } from './Dictionary';

export class GraphWithAdjList<X, Y> {
  private _vertices: SequenceList<X>;
  private _adjList: Dictionary<Y>;

  constructor() {
    this._vertices = new SequenceList<X>();
    this._adjList = new Dictionary<Y>();
  }
  
  public Vertices(): SequenceList<X> {
    return this._vertices;
  }
  
  public addVertex(vertex: X) {
    this._vertices.AppendElement(vertex);
    this._adjList.set(vertex.toString(), undefined);
  }
  public addEdge(vertex1: X, vertex2: X, weight?: Y) {
    // this._adjList.get(vertex1.toString()).push()
  }
}
