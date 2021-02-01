"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCanvasCellPosition = exports.getCanvasMouseEventPosition = exports.isUIEditable = exports.UIMode = void 0;
/**
 * UI mode
 */
var UIMode;
(function (UIMode) {
    UIMode[UIMode["ListView"] = 0] = "ListView";
    UIMode[UIMode["Create"] = 1] = "Create";
    UIMode[UIMode["Update"] = 2] = "Update";
    UIMode[UIMode["Display"] = 3] = "Display";
    UIMode[UIMode["Invalid"] = 9] = "Invalid";
})(UIMode = exports.UIMode || (exports.UIMode = {}));
function isUIEditable(mode) {
    return mode === UIMode.Create || mode === UIMode.Update;
}
exports.isUIEditable = isUIEditable;
/**
 * Get canvas mouse event position
 * @param canvas Canvas
 * @param evt Event
 */
function getCanvasMouseEventPosition(canvas, evt) {
    var x = evt.clientX;
    var y = evt.clientY;
    // const rect = canvas.getBoundingClientRect();
    // x -= rect.left;
    // y -= rect.top;
    // return { x: x, y: y };
    // ?!!!?
    // TBD: get the difference!!!
    //
    var bbox = canvas.getBoundingClientRect();
    var x2 = (x - bbox.left) * (canvas.width / bbox.width);
    var y2 = (y - bbox.top) * (canvas.height / bbox.height);
    return { x: x2, y: y2 };
}
exports.getCanvasMouseEventPosition = getCanvasMouseEventPosition;
/**
 * Get canvas cell position
 * @param cavpos Position in the canvas
 * @param cellWidth Width of each cell
 * @param cellHeight Height of each cell
 */
function getCanvasCellPosition(cavpos, cellWidth, cellHeight) {
    return {
        row: Math.floor(cavpos.y / cellHeight),
        column: Math.floor(cavpos.x / cellWidth),
    };
}
exports.getCanvasCellPosition = getCanvasCellPosition;
//# sourceMappingURL=uimodel.js.map