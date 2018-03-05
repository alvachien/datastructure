/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BaseConverter.spec.ts
 * Base convert
 *
 */

import { NumberBaseEnum, baseConverter } from '../../lib/subject/BaseConverter';

describe('Test baseConverter', () => {

  beforeEach(() => {
    // Do nothing
  });

  it("#1. 10 => 2()", () => {
    let rst = baseConverter(10, NumberBaseEnum.binary);
    expect(rst).toBe('1010');

    rst = baseConverter(233, 2);
    expect(rst).toBe('11101001');
  });

  it("#2. 10 => 8", () => {
    let rst = baseConverter(100345, NumberBaseEnum.octal);

    expect(rst).toBe('303771');
  });

  it("#3. 10 => 16", () => {
    let rst = baseConverter(100345, NumberBaseEnum.hexadecimal);

    expect(rst).toBe('187F9');
  });
});
