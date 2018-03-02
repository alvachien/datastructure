"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Vertext in the graph
 */
var GraphVertex = /** @class */ (function () {
    function GraphVertex() {
    }
    Object.defineProperty(GraphVertex.prototype, "ID", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphVertex.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    return GraphVertex;
}());
exports.GraphVertex = GraphVertex;
/**
 * Edge in the graph
 */
var GraphEdge = /** @class */ (function () {
    function GraphEdge() {
    }
    Object.defineProperty(GraphEdge.prototype, "Weight", {
        get: function () {
            return this._weight;
        },
        set: function (wgt) {
            this._weight = wgt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphEdge.prototype, "From", {
        get: function () {
            return this._from;
        },
        set: function (frm) {
            this._from = frm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphEdge.prototype, "To", {
        get: function () {
            return this._to;
        },
        set: function (to) {
            this._to = to;
        },
        enumerable: true,
        configurable: true
    });
    return GraphEdge;
}());
exports.GraphEdge = GraphEdge;
/**
 * Graph
 */
var Graph = /** @class */ (function () {
    function Graph() {
        this._vertex = [];
        this._edge = [];
    }
    Graph.prototype.VertexNumber = function () {
        return this._vertex.length;
    };
    Graph.prototype.EdgeNumber = function () {
        return this._edge.length;
    };
    /**
     * Vertex
     */
    Graph.prototype.Vertexs = function () {
        return this._vertex;
    };
    /**
     * Edges
     */
    Graph.prototype.Edges = function () {
        return this._edge;
    };
    /**
     * Add Vertex
     */
    Graph.prototype.AddVertex = function (data) {
        var nnode = new GraphVertex();
        nnode.Data = data;
        if (this._vertex.length === 0) {
            nnode.ID = 1;
        }
        else {
            var mid = 1;
            for (var _i = 0, _a = this._vertex; _i < _a.length; _i++) {
                var vex = _a[_i];
                if (mid < vex.ID) {
                    mid = vex.ID;
                }
            }
            nnode.ID = mid;
        }
        this._vertex.push(nnode);
        return nnode.ID;
    };
    Graph.prototype.AddEdge = function (frm, to, weight) {
        // Check from and to
        for (var _i = 0, _a = this._vertex; _i < _a.length; _i++) {
            var vex = _a[_i];
        }
        // Check existence of the edge
        // TBD
        return false;
    };
    /**
     * DFS
     */
    Graph.prototype.DFS = function () {
        if (this._vertex.length <= 0) {
            return [];
        }
        var visited = [];
        var rst = [];
        for (var i = 0; i < this._vertex.length; i++) {
            this.DFSImpl(this._vertex[i], visited, rst);
        }
        return rst;
    };
    Graph.prototype.DFSImpl = function (vex, visited, rst) {
        var bvisited = false;
        for (var i = 0; i < visited.length; i++) {
            if (visited[i] === vex.ID) {
                bvisited = true;
                break;
            }
        }
        if (!bvisited) {
            rst.push(vex);
        }
        else {
            return;
        }
        for (var i = 0; i < this._edge.length; i++) {
            if (this._edge[i].From === vex.ID) {
                // Get the to
                var tonode = null;
                for (var j = 0; j < this._vertex.length; j++) {
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
    };
    /**
     * BFS
     */
    Graph.prototype.BFS = function () {
        if (this._vertex.length <= 0) {
            return [];
        }
    };
    return Graph;
}());
exports.Graph = Graph;
//# sourceMappingURL=Graph.js.map