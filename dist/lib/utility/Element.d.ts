/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Element.ts
 *
 */
export interface IElementSelectionPosition {
    start: number;
    end: number;
}
export declare function replaceChar160ToSpace(text: string): string;
export declare function readElementText(element: HTMLElement): string;
export declare function checkSelectInsideElement(element: HTMLElement, range?: Range): boolean;
export declare function resetSelectionRange(range: Range): void;
export declare function setSelectionByPosition(editor: HTMLElement, positoin: IElementSelectionPosition): Range;
export declare function setSelectionByInlineText(text: string, childNodes: NodeListOf<ChildNode>): void;
export declare function getSelectPosition(element: HTMLElement, range?: Range): IElementSelectionPosition;
export declare function getElementSelectionText(element: HTMLElement, range?: Range): string;
export declare function formatElementText(element: HTMLElement, content: string, position?: IElementSelectionPosition): void;
export declare function insertTextIntoElement(element: HTMLElement, prefix: string, suffix: string, originrange?: Range, replace?: boolean, toggle?: boolean): void;
export declare function getCursorPositionInElement(element: HTMLElement): any;
export declare function scrollToElementCenter(editorElement: HTMLElement): void;
export declare function getCurrentLinePosition(position: IElementSelectionPosition, text: string): IElementSelectionPosition;
