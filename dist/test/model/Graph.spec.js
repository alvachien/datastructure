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
    it("#1. Test create())", function () {
        expect(_graph).toBeTruthy();
    });
});
//# sourceMappingURL=Graph.spec.js.map