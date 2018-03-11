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
var SequenceList_1 = require("./SequenceList");
var Dictionary_1 = require("./Dictionary");
var LinkList_1 = require("./LinkList");
/**
 * Vertex of graph
 */
var GraphAdjaceListVertex = /** @class */ (function () {
    function GraphAdjaceListVertex() {
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
    return GraphAdjaceListVertex;
}());
exports.GraphAdjaceListVertex = GraphAdjaceListVertex;
var GraphAdjaceListEdge = /** @class */ (function () {
    function GraphAdjaceListEdge() {
    }
    Object.defineProperty(GraphAdjaceListEdge.prototype, "To", {
        get: function () {
            return this._to;
        },
        set: function (to) {
            this._to = to;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "Weight", {
        get: function () {
            return this._weigth;
        },
        set: function (wght) {
            this._weigth = wght;
        },
        enumerable: true,
        configurable: true
    });
    return GraphAdjaceListEdge;
}());
/**
 * Graph with adjace list
 * X: generic type of Vertex
 * Y: generic type of Edge
 */
var GraphAdjaceList = /** @class */ (function () {
    function GraphAdjaceList() {
        this._vertex = new SequenceList_1.SequenceList();
        this._adjList = new Dictionary_1.Dictionary();
    }
    /**
     * Number of vertext
     */
    GraphAdjaceList.prototype.VertexNumber = function () {
        return this._vertex.Length();
    };
    /**
     * Number of edge
     */
    GraphAdjaceList.prototype.EdgeNumber = function () {
        var en = 0;
        // for (const vtx of this._vertex) {
        //   en += vtx.AdjaceList.Length();
        // }
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
    GraphAdjaceList.prototype.AddVertex = function (id, data) {
        var vetx = new GraphAdjaceListVertex();
        vetx.Data = data;
        vetx.ID = id;
        this._vertex.AppendElement(vetx);
        this._adjList.set(id.toString(), new LinkList_1.LinkList());
        return id;
    };
    /**
     * Add Edge
     */
    GraphAdjaceList.prototype.AddEdge = function (frm, to, weight) {
        var nedge = new GraphAdjaceListEdge();
        nedge.To = to;
        nedge.Weight = weight;
        this._adjList.get(frm.toString()).AppendElement(nedge);
        nedge = new GraphAdjaceListEdge();
        nedge.To = frm;
        nedge.Weight = weight;
        this._adjList.get(to.toString()).AppendElement(nedge);
        return true;
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