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

export class UIUtility {
  public static getDocumentHead(doc?: any): any {
    let docinuse = doc || document;

    return docinuse.head || docinuse.getElementsByTagName('head')[0] || docinuse.documentElement;
  }
  public static createElement(tag: string, ns: string = 'http://www.w3.org/1999/xhtml'): Element | HTMLElement {
    return document.createElementNS ?
      document.createElementNS(ns, tag) :
      document.createElement(tag);
  }
  public static hasCssClass(element: HTMLElement, cssClassName: string): boolean {
    const classes: string[] = (element.className + '').split(/\s+/g);
    return classes.indexOf(cssClassName) !== -1;
  }
  public static addCssClass(element: HTMLElement, cssClassName: string) {
    if (!UIUtility.hasCssClass(element, cssClassName)) {
      element.className += ' ' + name;
    }
  }
  public static removeCssClass(element: HTMLElement, cssClassName: string): void {
    const classes: string[] = element.className.split(/\s+/g);
    while (true) {
      const classIdx = classes.indexOf(name);
      if (classIdx === -1) {
        break;
      }
      classes.splice(classIdx, 1);
    }
    element.className = classes.join(' ');
  }
  public static toggleCssClass(element: HTMLElement, cssClassName: string): boolean {
    const classes: string[] = element.className.split(/\s+/g);
    let needAdd = true;
    while (true) {
      const classIdx = classes.indexOf(name);
      if (classIdx === -1) {
        break;
      }
      needAdd = false;
      classes.splice(classIdx, 1);
    }
    if (needAdd) {
      classes.push(cssClassName);
    }

    element.className = classes.join(' ');
    return needAdd;
  }
  public static setCssClass(element: HTMLElement, cssClassName: string, include: boolean) {
    if (include) {
      UIUtility.addCssClass(element, cssClassName);
    } else {
      UIUtility.removeCssClass(element, cssClassName);
    }
  }
  public static hasCssString(id: string, doc?: HTMLDocument): boolean {
    let index = 0, sheets;
    let docinuse: HTMLDocument = doc || document;
    let existingStyles = docinuse.getElementsByTagName('style');

    while (index < existingStyles.length) {
      if (existingStyles[index++].id === id) {
        return true;
      }
    }

    return false;
  }
  // public static importCssString(cssText: string, id: string, doc?: HTMLDocument): void {
  //   let docinuse: HTMLDocument = doc || document;
  //   if (id && UIUtility.hasCssString(id, docinuse))
  //     return;

  //   var style;

  //   if (id)
  //       cssText += "\n/*# sourceURL=ace/css/" + id + " */";

  //   if (doc.createStyleSheet) {
  //       style = doc.createStyleSheet();
  //       style.cssText = cssText;
  //       if (id)
  //           style.owningElement.id = id;
  //   } else {
  //       style = exports.createElement("style");
  //       style.appendChild(doc.createTextNode(cssText));
  //       if (id)
  //           style.id = id;

  //       exports.getDocumentHead(doc).appendChild(style);
  //   }
  // }
  public static importCssStylsheet(uri: string) {
    var link = UIUtility.createElement('link') as HTMLLinkElement;
    link.rel = 'stylesheet';
    link.href = uri;

    UIUtility.getDocumentHead().appendChild(link);
  }
}
