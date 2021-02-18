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
export enum UIMode {
  ListView = 0,
  Create = 1,
  Update = 2,
  Display = 3,

  Invalid = 9,
}

export function isUIEditable(mode: UIMode): boolean {
  return mode === UIMode.Create || mode === UIMode.Update;
}

export function isCreateMode(mode: UIMode): boolean {
  return mode === UIMode.Create;
}

export function isDisplayMode(mode: UIMode): boolean {
  return mode === UIMode.Display;
}

export function isUpdateMode(mode: UIMode): boolean {
  return mode === UIMode.Update;
}

/**
 * UI Detail page interface
 */
export interface IUIDetailPage {
  IsUIEditable(): boolean;
  currentUIMode(): UIMode;
  currentUIModeString(): string;
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
export function getCanvasMouseEventPosition(canvas: any, evt: MouseEvent): CanvasMousePositionInf {
  const x: any = evt.clientX;
  const y: any = evt.clientY;

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
  return { x: x2, y: y2};
}

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
export function getCanvasCellPosition(cavpos: CanvasMousePositionInf, cellWidth: number, cellHeight: number): CanvasCellPositionInf {
  return {
    row: Math.floor(cavpos.y / cellHeight),
    column: Math.floor(cavpos.x / cellWidth),
  };
}
