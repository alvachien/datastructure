"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIUtility = void 0;
var UIUtility = /** @class */ (function () {
    function UIUtility() {
    }
    UIUtility.getDocumentHead = function (doc) {
        var docinuse = doc || document;
        return docinuse.head || docinuse.getElementsByTagName('head')[0] || docinuse.documentElement;
    };
    UIUtility.createElement = function (tag, ns) {
        if (ns === void 0) { ns = 'http://www.w3.org/1999/xhtml'; }
        return document.createElementNS ?
            document.createElementNS(ns, tag) :
            document.createElement(tag);
    };
    UIUtility.hasCssClass = function (element, cssClassName) {
        var classes = (element.className + '').split(/\s+/g);
        return classes.indexOf(cssClassName) !== -1;
    };
    UIUtility.addCssClass = function (element, cssClassName) {
        if (!UIUtility.hasCssClass(element, cssClassName)) {
            element.className += ' ' + name;
        }
    };
    UIUtility.removeCssClass = function (element, cssClassName) {
        var classes = element.className.split(/\s+/g);
        while (true) {
            var classIdx = classes.indexOf(cssClassName);
            if (classIdx === -1) {
                break;
            }
            classes.splice(classIdx, 1);
        }
        element.className = classes.join(' ');
    };
    UIUtility.toggleCssClass = function (element, cssClassName) {
        var classes = element.className.split(/\s+/g);
        var needAdd = true;
        while (true) {
            var classIdx = classes.indexOf(cssClassName);
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
    };
    UIUtility.setCssClass = function (element, cssClassName, include) {
        if (include) {
            UIUtility.addCssClass(element, cssClassName);
        }
        else {
            UIUtility.removeCssClass(element, cssClassName);
        }
    };
    UIUtility.hasCssString = function (id, doc) {
        var index = 0, sheets;
        var docinuse = doc || document;
        var existingStyles = docinuse.getElementsByTagName('style');
        while (index < existingStyles.length) {
            if (existingStyles[index++].id === id) {
                return true;
            }
        }
        return false;
    };
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
    UIUtility.importCssStylsheet = function (uri) {
        var link = UIUtility.createElement('link');
        link.rel = 'stylesheet';
        link.href = uri;
        UIUtility.getDocumentHead().appendChild(link);
    };
    return UIUtility;
}());
exports.UIUtility = UIUtility;
//# sourceMappingURL=UIUtility.js.map