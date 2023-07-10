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
export declare enum UIMode {
    ListView = 0,
    Create = 1,
    Update = 2,
    Display = 3,
    Invalid = 9
}
export declare function isUIEditable(mode: UIMode): boolean;
export declare function isCreateMode(mode: UIMode): boolean;
export declare function isDisplayMode(mode: UIMode): boolean;
export declare function isUpdateMode(mode: UIMode): boolean;
/**
 * UI Detail page interface
 */
export interface IUIDetailPage {
    IsUIEditable(): boolean;
    currentUIMode(): UIMode;
    currentUIModeString(): string;
}
/**
 * UI Display string
 */
export declare class UIDisplayString {
    value: any;
    i18nterm: string;
    displaystring: string;
}
/**
 * Position of mouse event in Canvas
 */
export interface CanvasMousePositionInf {
    x: number;
    y: number;
}
/**
 * Get canvas mouse event position
 * @param canvas Canvas
 * @param evt Event
 */
export declare function getCanvasMouseEventPosition(canvas: any, evt: MouseEvent): CanvasMousePositionInf;
/**
 * Cell position
 */
export interface CanvasCellPositionInf {
    row: number;
    column: number;
}
/**
 * Get canvas cell position
 * @param cavpos Position in the canvas
 * @param cellWidth Width of each cell
 * @param cellHeight Height of each cell
 */
export declare function getCanvasCellPosition(cavpos: CanvasMousePositionInf, cellWidth: number, cellHeight: number): CanvasCellPositionInf;
