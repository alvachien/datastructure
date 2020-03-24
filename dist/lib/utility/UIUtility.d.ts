/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: UIUtility.ts
 *
 */
export declare class UIUtility {
    static getDocumentHead(doc?: any): any;
    static createElement(tag: string, ns?: string): Element | HTMLElement;
    static hasCssClass(element: HTMLElement, cssClassName: string): boolean;
    static addCssClass(element: HTMLElement, cssClassName: string): void;
    static removeCssClass(element: HTMLElement, cssClassName: string): void;
    static toggleCssClass(element: HTMLElement, cssClassName: string): boolean;
    static setCssClass(element: HTMLElement, cssClassName: string, include: boolean): void;
    static hasCssString(id: string, doc?: HTMLDocument): boolean;
    static importCssStylsheet(uri: string): void;
}
