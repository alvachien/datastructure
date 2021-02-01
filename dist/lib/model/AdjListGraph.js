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
exports.GraphAdjaceList = exports.GraphAdjaceListEdge = exports.GraphAdjaceListVertex = void 0;
var SequenceList_1 = require("./SequenceList");
var Dictionary_1 = require("./Dictionary");
var LinkList_1 = require("./LinkList");
/**
 * Vertex of adjace list graph
 */
var GraphAdjaceListVertex = /** @class */ (function () {
    function GraphAdjaceListVertex() {
    }
    Object.defineProperty(GraphAdjaceListVertex.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListVertex.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (data) {
            this._value = data;
        },
        enumerable: false,
        configurable: true
    });
    return GraphAdjaceListVertex;
}());
exports.GraphAdjaceListVertex = GraphAdjaceListVertex;
/**
 * Edge of adjace list graph
 */
var GraphAdjaceListEdge = /** @class */ (function () {
    function GraphAdjaceListEdge() {
    }
    Object.defineProperty(GraphAdjaceListEdge.prototype, "from", {
        get: function () {
            return this._from;
        },
        set: function (from) {
            this._from = from;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "to", {
        get: function () {
            return this._to;
        },
        set: function (to) {
            this._to = to;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GraphAdjaceListEdge.prototype, "weight", {
        get: function () {
            return this._weigth;
        },
        set: function (wght) {
            this._weigth = wght;
        },
        enumerable: false,
        configurable: true
    });
    return GraphAdjaceListEdge;
}());
exports.GraphAdjaceListEdge = GraphAdjaceListEdge;
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
        for (var i = 0; i < this._vertex.Length(); i++) {
            en += this._adjList.get(this._vertex.GetElement(i).id.toString()).Length();
        }
        return en;
    };
    /**
     * Vertex
     */
    GraphAdjaceList.prototype.Vertexs = function () {
        var rst = [];
        for (var i = 0; i < this._vertex.Length(); i++) {
            var elem = this._vertex.GetElement(i);
            rst.push(elem);
        }
        return rst;
    };
    GraphAdjaceList.prototype.IsVertexExist = function (id) {
        for (var i = 0; i < this._vertex.Length(); i++) {
            if (this._vertex.GetElement(i).id === id) {
                return true;
            }
        }
        return false;
    };
    /**
     * Edges
     */
    GraphAdjaceList.prototype.Edges = function () {
        var rst = [];
        if (this._adjList.size() > 0) {
            var vers = this._adjList.values();
            for (var i = 0; i < vers.length; i++) {
                var edges = vers[i];
                for (var j = 0; j < edges.Length(); j++) {
                    rst.push(edges.GetElement(j));
                }
            }
        }
        return rst;
    };
    GraphAdjaceList.prototype.IsEdgeExist = function (from, to) {
        if (this.IsVertexExist(from) && this.IsVertexExist(to)) {
            var llist = this._adjList.get(from.toString());
            for (var i = 0; i < llist.Length(); i++) {
                if (llist.GetElement(i).to === to) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Add Vertex
     */
    GraphAdjaceList.prototype.AddVertex = function (id, data) {
        if (id <= 0 || this.IsVertexExist(id)) {
            return -1;
        }
        var vetx = new GraphAdjaceListVertex();
        vetx.value = data;
        vetx.id = id;
        this._vertex.AppendElement(vetx);
        this._adjList.set(id.toString(), new LinkList_1.LinkList());
        return id;
    };
    /**
     * Add Edge
     */
    GraphAdjaceList.prototype.AddEdge = function (frm, to, weight) {
        if (frm <= 0 || to <= 0 || !this.IsVertexExist(frm) || !this.IsVertexExist(to)) {
            return false;
        }
        if (this.IsEdgeExist(frm, to)) {
            return false;
        }
        var nedge = new GraphAdjaceListEdge();
        nedge.from = frm;
        nedge.to = to;
        nedge.weight = weight;
        var llist = this._adjList.get(frm.toString());
        if (llist.Length() === 0) {
            llist.InitList(nedge);
        }
        else {
            llist.AppendElement(nedge);
        }
        // nedge = new GraphAdjaceListEdge<Y>();
        // nedge.To = frm;
        // nedge.Weight = weight;
        // this._adjList.get(to.toString()).AppendElement(nedge);
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