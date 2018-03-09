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
export declare class GraphWithAdjList<X, Y> {
    private _vertices;
    private _adjList;
    constructor();
    Vertices(): SequenceList<X>;
    addVertex(vertex: X): void;
    addEdge(vertex1: X, vertex2: X, weight?: Y): void;
}
