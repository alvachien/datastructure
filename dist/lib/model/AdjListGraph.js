"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var LinkList_1 = require("./LinkList");
var GraphAdjaceListEdge = /** @class */ (function () {
    function GraphAdjaceListEdge() {
    }
    Object.defineProperty(GraphAdjaceListEdge.prototype, "To", {
        get: function () {
            return this._to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "ID", {
        set: function (to) {
            this._to = to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "Weight", {
        get: function () {
            return this._weight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "Data", {
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    return GraphAdjaceListEdge;
}());
exports.GraphAdjaceListEdge = GraphAdjaceListEdge;
var GraphAdjaceListVertex = /** @class */ (function () {
    function GraphAdjaceListVertex() {
        this._linkAdjList = new LinkList_1.LinkList();
    }
    Object.defineProperty(GraphAdjaceListVertex.prototype, "ID", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListVertex.prototype, "Data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListVertex.prototype, "AdjaceList", {
        get: function () {
            return this._linkAdjList;
        },
        enumerable: true,
        configurable: true
    });
    return GraphAdjaceListVertex;
}());
exports.GraphAdjaceListVertex = GraphAdjaceListVertex;
var GraphAdjaceList = /** @class */ (function () {
    function GraphAdjaceList() {
        this._vertex = [];
    }
    GraphAdjaceList.prototype.VertexNumber = function () {
        return this._vertex.length;
    };
    /**
     * Edge number
     */
    GraphAdjaceList.prototype.EdgeNumber = function () {
        var en = 0;
        for (var _i = 0, _a = this._vertex; _i < _a.length; _i++) {
            var vtx = _a[_i];
            en += vtx.AdjaceList.Length();
        }
        return en;
    };
    /**
     * Vertex
     */
    GraphAdjaceList.prototype.Vertexs = function () {
        return [];
    };
    /**
     * Edges
     */
    GraphAdjaceList.prototype.Edges = function () {
        return [];
    };
    /**
     * Add Vertex
     */
    GraphAdjaceList.prototype.AddVertex = function (data) {
        return -1;
    };
    /**
     * Add Edge
     */
    GraphAdjaceList.prototype.AddEdge = function (frm, to, weight) {
        return false;
    };
    /**
     * DFS: Depth First Search
     */
    GraphAdjaceList.prototype.DFS = function () {
        return [];
    };
    /**
     * BFS: Breadth First Search
     */
    GraphAdjaceList.prototype.BFS = function () {
        return [];
    };
    return GraphAdjaceList;
}());
exports.GraphAdjaceList = GraphAdjaceList;
//# sourceMappingURL=AdjListGraph.js.map