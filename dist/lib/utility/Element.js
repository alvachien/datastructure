"use strict";
/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Element.ts
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Replace char 160 to space
function replaceChar160ToSpace(text) {
    return text.replace(/\u00a0/g, ' ');
}
exports.replaceChar160ToSpace = replaceChar160ToSpace;
// Read element's text
function readElementText(element) {
    return replaceChar160ToSpace((element.textContent + "\n").replace(/\n\n$/, '\n'));
}
exports.readElementText = readElementText;
// Check whether the range is i
function checkSelectInsideElement(element, range) {
    var isEditor = false;
    if (!range) {
        if (window.getSelection().rangeCount === 0) {
            return isEditor;
        }
        else {
            range = window.getSelection().getRangeAt(0);
        }
    }
    var container = range.commonAncestorContainer;
    while (container) {
        if (element.isEqualNode(container)) {
            isEditor = true;
            container = undefined;
        }
        if (container) {
            if (container.nodeName === 'BODY') {
                container = undefined;
            }
            else {
                container = container.parentElement;
            }
        }
    }
    return isEditor;
}
exports.checkSelectInsideElement = checkSelectInsideElement;
// Reset selection range
function resetSelectionRange(range) {
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
exports.resetSelectionRange = resetSelectionRange;
function setSelectionByPosition(editor, positoin) {
    var charIndex = 0;
    var line = 0;
    var pNode = editor.childNodes[line];
    var foundStart = false;
    var stop = false;
    var start = Math.max(0, positoin.start);
    var end = Math.max(0, positoin.end);
    var range = editor.ownerDocument.createRange();
    range.setStart(pNode, 0);
    range.collapse(true);
    while (!stop && pNode) {
        var nextCharIndex = charIndex + pNode.textContent.length;
        if (!foundStart && start >= charIndex && start <= nextCharIndex) {
            if (start === 0) {
                range.setStart(pNode, 0);
            }
            else {
                if (pNode.childNodes[0].nodeType === 3) {
                    range.setStart(pNode.childNodes[0], start - charIndex);
                }
                else if (pNode.nextSibling) {
                    range.setStartBefore(pNode.nextSibling);
                }
                else {
                    range.setStartAfter(pNode);
                }
            }
            foundStart = true;
            if (start === end) {
                stop = true;
                break;
            }
        }
        if (foundStart && end >= charIndex && end <= nextCharIndex) {
            if (end === 0) {
                range.setEnd(pNode, 0);
            }
            else {
                if (pNode.childNodes[0].nodeType === 3) {
                    range.setEnd(pNode.childNodes[0], end - charIndex);
                }
                else if (pNode.nextSibling) {
                    range.setEndBefore(pNode.nextSibling);
                }
                else {
                    range.setEndAfter(pNode);
                }
            }
            stop = true;
        }
        charIndex = nextCharIndex;
        pNode = editor.childNodes[++line];
    }
    if (!stop && editor.childNodes[line - 1]) {
        range.setStartBefore(editor.childNodes[line - 1]);
    }
    resetSelectionRange(range);
    return range;
}
exports.setSelectionByPosition = setSelectionByPosition;
function setSelectionByInlineText(text, childNodes) {
    var offset = 0;
    var startIndex = 0;
    Array.from(childNodes).some(function (node, index) {
        startIndex = node.textContent.indexOf(text);
        if (startIndex > -1 && childNodes[index].childNodes[0].nodeType === 3) {
            offset = index;
            return true;
        }
    });
    if (startIndex < 0) {
        return;
    }
    var range = document.createRange();
    range.setStart(childNodes[offset].childNodes[0], startIndex);
    range.setEnd(childNodes[offset].childNodes[0], startIndex + text.length);
    resetSelectionRange(range);
}
exports.setSelectionByInlineText = setSelectionByInlineText;
// Get selection position
function getSelectPosition(element, range) {
    var position = {
        end: 0,
        start: 0,
    };
    if (!range) {
        if (window.getSelection().rangeCount === 0) {
            return position;
        }
        range = window.getSelection().getRangeAt(0);
    }
    if (checkSelectInsideElement(element, range)) {
        var preSelectionRange = range.cloneRange();
        if (element.childNodes[0] && element.childNodes[0].childNodes[0]) {
            preSelectionRange.setStart(element.childNodes[0].childNodes[0], 0);
        }
        else {
            preSelectionRange.selectNodeContents(element);
        }
        if (range.startContainer.childNodes.length === 1 && range.startContainer.textContent.trim() === '') {
            preSelectionRange.setEnd(element.childNodes[0].childNodes[0], 0);
        }
        else {
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
        }
        position.start = preSelectionRange.toString().length;
        position.end = position.start + range.toString().length;
    }
    return position;
}
exports.getSelectPosition = getSelectPosition;
function getElementSelectionText(element, range) {
    if (!range) {
        if (window.getSelection().rangeCount === 0) {
            return '';
        }
        else {
            range = window.getSelection().getRangeAt(0);
        }
    }
    if (checkSelectInsideElement(element, range)) {
        return window.getSelection().toString();
    }
    return '';
}
exports.getElementSelectionText = getElementSelectionText;
function formatElementText(element, content, position) {
    var textList = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
    var newLine = "<span><br><span style=\"display: none\">\n</span></span>";
    var html = '';
    textList.forEach(function (text, index) {
        if (index === textList.length - 1 && text === '') {
            return;
        }
        if (text) {
            html += "<span>" + replaceChar160ToSpace(text.replace(/&/g, '&amp;').replace(/</g, '&lt;')) + "</span>" + newLine;
        }
        else {
            html += newLine;
        }
    });
    element.innerHTML = html || newLine;
    if (position) {
        setSelectionByPosition(element, position);
    }
}
exports.formatElementText = formatElementText;
// Insert text into element
function insertTextIntoElement(element, prefix, suffix, originrange, replace, toggle) {
    if (originrange === void 0) { originrange = undefined; }
    if (replace === void 0) { replace = false; }
    if (toggle === void 0) { toggle = false; }
    var range = window.getSelection().rangeCount === 0 ? undefined : window.getSelection().getRangeAt(0);
    if (!checkSelectInsideElement(element)) {
        if (originrange) {
            range = originrange;
        }
        else {
            range = element.ownerDocument.createRange();
            range.setStart(element, 0);
            range.collapse(true);
        }
    }
    var position = getSelectPosition(element, range);
    var content = readElementText(element);
    // select none || select something and need replace
    if (range.collapsed || (!range.collapsed && replace)) {
        var text = prefix + suffix;
        formatElementText(element, content.substring(0, position.start) + text + content.substring(position.end), {
            end: position.start + prefix.length,
            start: position.start + prefix.length,
        });
    }
    else {
        var selectText = content.substring(position.start, position.end);
        if (toggle && content.substring(position.start - prefix.length, position.start) === prefix
            && content.substring(position.end, position.end + suffix.length) === suffix) {
            formatElementText(element, content.substring(0, position.start - prefix.length)
                + selectText + content.substring(position.end + suffix.length), {
                end: position.start - prefix.length + selectText.length,
                start: position.start - prefix.length,
            });
        }
        else {
            var text = prefix + selectText + suffix;
            formatElementText(element, content.substring(0, position.start) + text + content.substring(position.end), {
                end: position.start + prefix.length + selectText.length,
                start: position.start + prefix.length,
            });
        }
    }
}
exports.insertTextIntoElement = insertTextIntoElement;
function isSafari() {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
        return true;
    }
    else {
        return false;
    }
}
function getCursorPositionInElement(element) {
    if (!element || !element.parentElement) {
        return;
    }
    var parentRect = element.parentElement.getBoundingClientRect();
    var range = window.getSelection().getRangeAt(0);
    var startNode = range.startContainer.childNodes[range.startOffset];
    var cursorRect;
    if (startNode) {
        if (startNode.nodeType === 3 && startNode.textContent === "") {
            cursorRect = startNode.nextElementSibling.getClientRects()[0];
        }
        else if (startNode.getClientRects) {
            cursorRect = startNode.getClientRects()[0];
        }
        else if (startNode.parentElement) {
            cursorRect = startNode.parentElement.getClientRects()[0];
        }
    }
    else {
        var startOffset = range.startOffset;
        if (isSafari()) {
            range.setStart(range.startContainer, startOffset - 1);
        }
        cursorRect = range.getBoundingClientRect();
        if (isSafari()) {
            range.setStart(range.startContainer, startOffset);
        }
    }
    return {
        left: cursorRect.left - parentRect.left,
        top: cursorRect.top - parentRect.top,
    };
}
exports.getCursorPositionInElement = getCursorPositionInElement;
function scrollToElementCenter(editorElement) {
    var cursorTop = getCursorPositionInElement(editorElement).top;
    var center = editorElement.clientHeight / 2;
    if (cursorTop > center) {
        editorElement.scrollTop = editorElement.scrollTop + (cursorTop - center);
    }
}
exports.scrollToElementCenter = scrollToElementCenter;
function getCurrentLinePosition(position, text) {
    var start = position.start - 1;
    var findStart = false;
    var end = position.end;
    var findEnd = false;
    while (!findStart && start > -1) {
        if (text.charAt(start) === '\n' && text.length !== start + 1) {
            start++;
            findStart = true;
        }
        else if (start === 0) {
            findStart = true;
        }
        else {
            start--;
        }
    }
    while (!findEnd && end <= text.length) {
        if (text.charAt(end) === '\n') {
            end++;
            findEnd = true;
        }
        else if (end === text.length) {
            findEnd = true;
        }
        else {
            end++;
        }
    }
    return {
        end: Math.min(end, text.length),
        start: Math.max(0, start),
    };
}
exports.getCurrentLinePosition = getCurrentLinePosition;
//# sourceMappingURL=Element.js.map