/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Element.spec.ts
 *
 */

import { IElementSelectionPosition, replaceChar160ToSpace, readElementText, checkSelectInsideElement } from '../../lib/utility/Element';

describe('Test Utility Text', () => {

  beforeEach(() => {
  });

  it("#1. Check replaceChar160ToSpace", () => {
    let rst = replaceChar160ToSpace('92-');
    expect(rst).toBe('92-');

    rst = replaceChar160ToSpace('');
    expect(rst).toBe('');

    rst = replaceChar160ToSpace(`\u00a0`);
    expect(rst).toBe(' ');
  });
});
