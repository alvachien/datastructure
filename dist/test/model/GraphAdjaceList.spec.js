"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var AdjListGraph_1 = require("../../lib/model/AdjListGraph");
describe('Test GraphAdjaceList', function () {
    var _graph;
    beforeEach(function () {
        _graph = new AdjListGraph_1.GraphAdjaceList();
    });
    it("#1. Test create())", function () {
        expect(_graph).toBeTruthy();
    });
});
//# sourceMappingURL=GraphAdjaceList.spec.js.map