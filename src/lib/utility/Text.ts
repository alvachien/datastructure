/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Text.ts
 *
 */

// Selection position
export interface ISelectionPosition {
  start: number;
  end: number;
}

// Replace char 160 to space
export function replaceChar160ToSpace(text: string) {
  return text.replace(/\u00a0/g, ' ');
}

// Read element's text
export function readElementText(element: HTMLElement) {
  return replaceChar160ToSpace(`${element.textContent}\n`.replace(/\n\n$/, '\n'));
}

// Check whether the range is i
export function checkSelectInsideElement(element: HTMLElement, range?: Range) {
  let isEditor = false;
  if (!range) {
    if (window.getSelection().rangeCount === 0) {
      return isEditor;
    } else {
      range = window.getSelection().getRangeAt(0);
    }
  }

  let container = range.commonAncestorContainer;
  while (container) {
    if (element.isEqualNode(container)) {
      isEditor = true;
      container = undefined;
    }

    if (container) {
      if (container.nodeName === 'BODY') {
        container = undefined;
      } else {
        container = container.parentElement;
      }
    }
  }

  return isEditor;
}

// Reset selection range
export function resetSelectionRange(range: Range) {
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

export function setSelectionByPosition(editor: HTMLElement, positoin: ISelectionPosition) {
  let charIndex = 0;
  let line = 0;
  let pNode = editor.childNodes[line];
  let foundStart = false;
  let stop = false;
  let start = Math.max(0, positoin.start);
  let end = Math.max(0, positoin.end);

  const range = editor.ownerDocument.createRange();
  range.setStart(pNode, 0);
  range.collapse(true);

  while (!stop && pNode) {
    const nextCharIndex = charIndex + pNode.textContent.length;
    if (!foundStart && start >= charIndex && start <= nextCharIndex) {
      if (start === 0) {
        range.setStart(pNode, 0);
      } else {
        if (pNode.childNodes[0].nodeType === 3) {
          range.setStart(pNode.childNodes[0], start - charIndex);
        } else if (pNode.nextSibling) {
          range.setStartBefore(pNode.nextSibling);
        } else {
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
      } else {
        if (pNode.childNodes[0].nodeType === 3) {
          range.setEnd(pNode.childNodes[0], end - charIndex);
        } else if (pNode.nextSibling) {
          range.setEndBefore(pNode.nextSibling);
        } else {
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

export function setSelectionByInlineText(text: string, childNodes: NodeListOf<ChildNode>) {
  let offset = 0;
  let startIndex = 0;
  Array.from(childNodes).some((node: HTMLElement, index: number) => {
    startIndex = node.textContent.indexOf(text);
    if (startIndex > -1 && childNodes[index].childNodes[0].nodeType === 3) {
      offset = index;
      return true;
    }
  });
  if (startIndex < 0) {
    return;
  }
  const range = document.createRange();
  range.setStart(childNodes[offset].childNodes[0], startIndex);
  range.setEnd(childNodes[offset].childNodes[0], startIndex + text.length);

  resetSelectionRange(range);
}

// Get selection position
export function getSelectPosition(element: HTMLElement, range?: Range): ISelectionPosition {
  const position: ISelectionPosition = {
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
    const preSelectionRange = range.cloneRange();
    if (element.childNodes[0] && element.childNodes[0].childNodes[0]) {
      preSelectionRange.setStart(element.childNodes[0].childNodes[0], 0);
    } else {
      preSelectionRange.selectNodeContents(element);
    }
    if (range.startContainer.childNodes.length === 1 && range.startContainer.textContent.trim() === '') {
      preSelectionRange.setEnd(element.childNodes[0].childNodes[0], 0);
    } else {
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
    }
    position.start = preSelectionRange.toString().length;
    position.end = position.start + range.toString().length;
  }
  return position;
}

export function formatElementText(element: HTMLElement, content: string, position?: ISelectionPosition) {

  const textList = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  let html = '';
  const newLine = `<span><br><span style="display: none">\n</span></span>`;
  textList.forEach((text, index) => {
    if (index === textList.length - 1 && text === '') {
      return;
    }

    if (text) {
      html += `<span>${replaceChar160ToSpace(text.replace(/&/g, '&amp;').replace(/</g, '&lt;'))}</span>${newLine}`;
    } else {
      html += newLine;
    }
  });

  element.innerHTML = html || newLine;

  if (position) {
    setSelectionByPosition(element, position);
  }
}

export function insertTextIntoElement(element: HTMLElement, prefix: string, suffix: string,
  originrange: Range = undefined,
  replace: boolean = false,
  toggle: boolean = false) {
  let range: Range = window.getSelection().rangeCount === 0 ? undefined : window.getSelection().getRangeAt(0);
  if (!checkSelectInsideElement(element)) {
    if (originrange) {
      range = originrange;
    } else {
      range = element.ownerDocument.createRange();
      range.setStart(element, 0);
      range.collapse(true);
    }
  }

  const position = getSelectPosition(element, range);
  const content = readElementText(element);

  // select none || select something and need replace
  if (range.collapsed || (!range.collapsed && replace)) {
    const text = prefix + suffix;
    formatElementText(element, content.substring(0, position.start) + text + content.substring(position.end),
      {
        end: position.start + prefix.length,
        start: position.start + prefix.length,
      });
  } else {
    const selectText = content.substring(position.start, position.end);
    if (toggle && content.substring(position.start - prefix.length, position.start) === prefix
      && content.substring(position.end, position.end + suffix.length) === suffix) {
      formatElementText(element, content.substring(0, position.start - prefix.length)
        + selectText + content.substring(position.end + suffix.length),
        {
          end: position.start - prefix.length + selectText.length,
          start: position.start - prefix.length,
        });
    } else {
      const text = prefix + selectText + suffix;
      formatElementText(element, content.substring(0, position.start) + text + content.substring(position.end),
        {
          end: position.start + prefix.length + selectText.length,
          start: position.start + prefix.length,
        });
    }
  }
}
