"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Graph_1 = require("../../lib/model/Graph");
describe('Test Graph', function () {
    var _graph;
    beforeEach(function () {
        _graph = new Graph_1.Graph();
    });
    it('#1. Test constructor.', function () {
        expect(_graph).toBeTruthy();
        expect(_graph.VertexNumber()).toBe(0);
        expect(_graph.EdgeNumber()).toBe(0);
    });
    it('#2. Test normal case.', function () {
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
        var edgefrm1 = 0;
        var edgefrm2 = 0;
        var edgefrm3 = 0;
        var edgefrm4 = 0;
        var edgeto1 = 0;
        var edgeto2 = 0;
        var edgeto3 = 0;
        var edgeto4 = 0;
        for (var i = 0; i < _graph.EdgeNumber(); i++) {
            var edge = _graph.Edges()[i];
            if (edge.from === 1) {
                edgefrm1++;
            }
            else if (edge.from === 2) {
                edgefrm2++;
            }
            else if (edge.from === 3) {
                edgefrm3++;
            }
            else if (edge.from === 4) {
                edgefrm4++;
            }
            if (edge.to === 1) {
                edgeto1++;
            }
            else if (edge.to === 2) {
                edgeto2++;
            }
            else if (edge.to === 3) {
                edgeto3++;
            }
            else if (edge.to === 4) {
                edgeto4++;
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
    it('#3. Test AddVertex()', function () {
        expect(_graph).toBeTruthy();
        _graph.AddVertex(1, 'A');
        var naddrst = _graph.AddVertex(2, 'B');
        expect(naddrst).toBe(2);
        naddrst = _graph.AddVertex(2, 'C');
        expect(naddrst).toBe(-1);
        expect(_graph.IsVertexExist(2)).toBe(true);
    });
    it('#4. Test AddEdge()', function () {
        expect(_graph).toBeTruthy();
        _graph.AddVertex(1, 'A');
        var brst = _graph.AddEdge(1, 2, 5);
        expect(brst).toBe(false);
        _graph.AddVertex(2, 'B');
        brst = _graph.AddEdge(1, 2, 5);
        expect(brst).toBe(true);
        brst = _graph.AddEdge(1, 2, 5);
        expect(brst).toBe(false);
        brst = _graph.IsEdgeExist(1, 2);
        expect(brst).toBe(true);
    });
});
//# sourceMappingURL=Graph.spec.js.map