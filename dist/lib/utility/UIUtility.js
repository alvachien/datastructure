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
export class UIUtility {
    static getDocumentHead(doc) {
        let docinuse = doc || document;
        return docinuse.head || docinuse.getElementsByTagName('head')[0] || docinuse.documentElement;
    }
    static createElement(tag, ns = 'http://www.w3.org/1999/xhtml') {
        return document.createElementNS ?
            document.createElementNS(ns, tag) :
            document.createElement(tag);
    }
    static hasCssClass(element, cssClassName) {
        const classes = (element.className + '').split(/\s+/g);
        return classes.indexOf(cssClassName) !== -1;
    }
    static addCssClass(element, cssClassName) {
        if (!UIUtility.hasCssClass(element, cssClassName)) {
            element.className += ' ' + name;
        }
    }
    static removeCssClass(element, cssClassName) {
        const classes = element.className.split(/\s+/g);
        while (true) {
            const classIdx = classes.indexOf(cssClassName);
            if (classIdx === -1) {
                break;
            }
            classes.splice(classIdx, 1);
        }
        element.className = classes.join(' ');
    }
    static toggleCssClass(element, cssClassName) {
        const classes = element.className.split(/\s+/g);
        let needAdd = true;
        while (true) {
            const classIdx = classes.indexOf(cssClassName);
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
    static setCssClass(element, cssClassName, include) {
        if (include) {
            UIUtility.addCssClass(element, cssClassName);
        }
        else {
            UIUtility.removeCssClass(element, cssClassName);
        }
    }
    static hasCssString(id, doc) {
        let index = 0, sheets;
        let docinuse = doc || document;
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
    static importCssStylsheet(uri) {
        var link = UIUtility.createElement('link');
        link.rel = 'stylesheet';
        link.href = uri;
        UIUtility.getDocumentHead().appendChild(link);
    }
}
//# sourceMappingURL=UIUtility.js.map