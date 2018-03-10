"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphWithAdjList.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GraphWithAdjList_1 = require("../../lib/model/GraphWithAdjList");
describe('Test GraphWithAdjList', function () {
    var _graph;
    beforeEach(function () {
        _graph = new GraphWithAdjList_1.GraphWithAdjList();
    });
    it("#1. Test init()", function () {
        expect(_graph).toBeTruthy();
        // TBD.
    });
});
//# sourceMappingURL=GraphWithAdjList.spec.js.map