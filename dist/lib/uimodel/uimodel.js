/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: UIUtility.ts
 *
 */
/**
 * UI mode
 */
export var UIMode;
(function (UIMode) {
    UIMode[UIMode["ListView"] = 0] = "ListView";
    UIMode[UIMode["Create"] = 1] = "Create";
    UIMode[UIMode["Update"] = 2] = "Update";
    UIMode[UIMode["Display"] = 3] = "Display";
    UIMode[UIMode["Invalid"] = 9] = "Invalid";
})(UIMode || (UIMode = {}));
export function isUIEditable(mode) {
    return mode === UIMode.Create || mode === UIMode.Update;
}
export function isCreateMode(mode) {
    return mode === UIMode.Create;
}
export function isDisplayMode(mode) {
    return mode === UIMode.Display;
}
export function isUpdateMode(mode) {
    return mode === UIMode.Update;
}
/**
 * UI Display string
 */
export class UIDisplayString {
}
/**
 * Get canvas mouse event position
 * @param canvas Canvas
 * @param evt Event
 */
export function getCanvasMouseEventPosition(canvas, evt) {
    const x = evt.clientX;
    const y = evt.clientY;
    // const rect = canvas.getBoundingClientRect();
    // x -= rect.left;
    // y -= rect.top;
    // return { x: x, y: y };
    // ?!!!?
    // TBD: get the difference!!!
    //
    const bbox = canvas.getBoundingClientRect();
    const x2 = (x - bbox.left) * (canvas.width / bbox.width);
    const y2 = (y - bbox.top) * (canvas.height / bbox.height);
    return { x: x2, y: y2 };
}
/**
 * Get canvas cell position
 * @param cavpos Position in the canvas
 * @param cellWidth Width of each cell
 * @param cellHeight Height of each cell
 */
export function getCanvasCellPosition(cavpos, cellWidth, cellHeight) {
    return {
        row: Math.floor(cavpos.y / cellHeight),
        column: Math.floor(cavpos.x / cellWidth),
    };
}
//# sourceMappingURL=uimodel.js.map