/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphAdjaceList.spec.ts
 *
 */

import { GraphAdjaceList } from '../../lib/model/AdjListGraph';

describe('Test AdjListGraph', () => {
  let _graph: GraphAdjaceList<string, number>;

  beforeEach(() => {
    _graph = new GraphAdjaceList<string, number>();
  });

  it('#1. Test constructor.', () => {
    expect(_graph).toBeTruthy();
    expect(_graph.VertexNumber()).toBe(0);
    expect(_graph.EdgeNumber()).toBe(0);
  });

  it('#2. Test normal case.', () => {
    expect(_graph).toBeTruthy();

    // A - 5 - B
    // | \     |
    // 2   6   4
    // |     \ |
    // C       D

    _graph.AddVertex(1, 'A');
    _graph.AddVertex(2, 'B');
    _graph.AddVertex(3, 'C');
    _graph.AddVertex(4, 'D');

    _graph.AddEdge(1, 2, 5);
    _graph.AddEdge(1, 3, 2);
    _graph.AddEdge(1, 4, 6);
    _graph.AddEdge(2, 4, 4);

    expect(_graph.VertexNumber()).toBe(4);
    expect(_graph.EdgeNumber()).toBe(4);

    let edgefrm1 = 0;
    let edgefrm2 = 0;
    let edgefrm3 = 0;
    let edgefrm4 = 0;
    let edgeto1 = 0;
    let edgeto2 = 0;
    let edgeto3 = 0;
    let edgeto4 = 0;
    for (let i = 0; i < _graph.EdgeNumber(); i++) {
      const edge = _graph.Edges()[i];
      if (edge.from === 1) {
        edgefrm1 ++;
      } else if (edge.from === 2) {
        edgefrm2 ++;
      } else if (edge.from === 3) {
        edgefrm3 ++;
      } else if (edge.from === 4) {
        edgefrm4 ++;
      }

      if (edge.to === 1) {
        edgeto1 ++;
      } else if (edge.to === 2) {
        edgeto2 ++;
      } else if (edge.to === 3) {
        edgeto3 ++;
      } else if (edge.to === 4) {
        edgeto4 ++;
      }
    }

    expect(edgefrm1).toBe(3);
    expect(edgefrm2).toBe(1);
    expect(edgefrm3).toBe(0);
    expect(edgefrm4).toBe(0);
    expect(edgeto1).toBe(0);
    expect(edgeto2).toBe(1);
    expect(edgeto3).toBe(1);
    expect(edgeto4).toBe(2);
  });

  it('#3. Test AddVertex()', () => {
    expect(_graph).toBeTruthy();

    _graph.AddVertex(1, 'A');
    let naddrst = _graph.AddVertex(2, 'B');
    expect(naddrst).toBe(2);
    naddrst = _graph.AddVertex(2, 'C');
    expect(naddrst).toBe(-1);
    expect(_graph.IsVertexExist(2)).toBe(true);
  });

  it('#4. Test AddEdge()', () => {
    expect(_graph).toBeTruthy();

    _graph.AddVertex(1, 'A');
    let brst = _graph.AddEdge(1, 2, 5);
    expect(brst).toBe(false);
    _graph.AddVertex(2, 'B');
    brst = _graph.AddEdge(1, 2, 5);
    expect(brst).toBe(true);
    brst = _graph.AddEdge(1, 2, 5);
    expect(brst).toBe(false);
    brst = _graph.IsEdgeExist(1, 2);
    expect(brst).toBe(true);
  });

  /**
   * Directed graph:
   *   A -> B, A -> C, A -> D, B -> D
   *
   * Vertices inserted as A(1), B(2), C(3), D(4).
   * Edges added in order: 1->2, 1->3, 1->4, 2->4.
   */
  const buildDirectedGraph = () => {
    _graph.AddVertex(1, 'A');
    _graph.AddVertex(2, 'B');
    _graph.AddVertex(3, 'C');
    _graph.AddVertex(4, 'D');

    _graph.AddEdge(1, 2, 5);
    _graph.AddEdge(1, 3, 2);
    _graph.AddEdge(1, 4, 6);
    _graph.AddEdge(2, 4, 4);
  };

  it('#5. Test DFS visits every reachable vertex.', () => {
    buildDirectedGraph();
    const rst = _graph.DFS().map(v => v.value);
    expect(rst.length).toBe(4);
    expect(rst).toContain('A');
    expect(rst).toContain('B');
    expect(rst).toContain('C');
    expect(rst).toContain('D');
  });

  it('#6. Test DFS starts at the first-inserted vertex.', () => {
    buildDirectedGraph();
    const rst = _graph.DFS().map(v => v.value);
    expect(rst[0]).toBe('A');
  });

  it('#7. Test BFS visits every reachable vertex and starts at A.', () => {
    buildDirectedGraph();
    const rst = _graph.BFS().map(v => v.value);
    expect(rst.length).toBe(4);
    expect(rst[0]).toBe('A');
    expect(rst.slice(1).sort()).toEqual(['B', 'C', 'D']);
  });

  it('#8. Test DFS and BFS on empty graph return [].', () => {
    expect(_graph.DFS()).toEqual([]);
    expect(_graph.BFS()).toEqual([]);
  });

  it('#9. Test DFS and BFS reach disconnected components.', () => {
    _graph.AddVertex(1, 'A');
    _graph.AddVertex(2, 'B'); // no edges
    expect(_graph.DFS().map(v => v.value).length).toBe(2);
    expect(_graph.BFS().map(v => v.value).length).toBe(2);
  });

  it('#10. Test BFS does not double-visit a vertex reachable via multiple paths.', () => {
    // A->B, A->C, B->D, C->D : D reachable two ways, must appear once.
    _graph.AddVertex(1, 'A');
    _graph.AddVertex(2, 'B');
    _graph.AddVertex(3, 'C');
    _graph.AddVertex(4, 'D');
    _graph.AddEdge(1, 2, 1);
    _graph.AddEdge(1, 3, 1);
    _graph.AddEdge(2, 4, 1);
    _graph.AddEdge(3, 4, 1);

    const rst = _graph.BFS().map(v => v.value);
    expect(rst.length).toBe(4);
    expect(rst.filter(v => v === 'D').length).toBe(1);

    const dfsRst = _graph.DFS().map(v => v.value);
    expect(dfsRst.length).toBe(4);
    expect(dfsRst.filter(v => v === 'D').length).toBe(1);
  });
});
