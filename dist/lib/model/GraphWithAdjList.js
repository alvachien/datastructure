"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceList_1 = require("./SequenceList");
var Dictionary_1 = require("./Dictionary");
var GraphWithAdjList = /** @class */ (function () {
    function GraphWithAdjList() {
        this._vertices = new SequenceList_1.SequenceList();
        this._adjList = new Dictionary_1.Dictionary();
    }
    GraphWithAdjList.prototype.Vertices = function () {
        return this._vertices;
    };
    GraphWithAdjList.prototype.addVertex = function (vertex) {
        this._vertices.AppendElement(vertex);
        this._adjList.set(vertex, undefined);
    };
    return GraphWithAdjList;
}());
exports.GraphWithAdjList = GraphWithAdjList;
//# sourceMappingURL=GraphWithAdjList.js.map