"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphAdjaceList.spec.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var uimodel_1 = require("../../lib/uimodel");
describe('Test UIMode', function () {
    beforeEach(function () {
    });
    it('#1. Test UIModel.', function () {
        var mode = uimodel_1.UIMode.Create;
        expect(uimodel_1.isUIEditable(mode)).toBeTruthy();
        mode = uimodel_1.UIMode.Update;
        expect(uimodel_1.isUIEditable(mode)).toBeTruthy();
        mode = uimodel_1.UIMode.Display;
        expect(uimodel_1.isUIEditable(mode)).toBeFalsy();
        mode = uimodel_1.UIMode.Invalid;
        expect(uimodel_1.isUIEditable(mode)).toBeFalsy();
        mode = uimodel_1.UIMode.ListView;
        expect(uimodel_1.isUIEditable(mode)).toBeFalsy();
    });
});
//# sourceMappingURL=uimode.spec.js.map