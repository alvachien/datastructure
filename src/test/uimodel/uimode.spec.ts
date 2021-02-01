/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphAdjaceList.spec.ts
 *
 */

import { UIMode, isUIEditable, } from '../../lib/uimodel';

describe('Test UIMode', () => {
  beforeEach(() => {
  });

  it('#1. Test UIModel.', () => {
    let mode: UIMode = UIMode.Create;
    expect(isUIEditable(mode)).toBeTruthy();

    mode = UIMode.Update;
    expect(isUIEditable(mode)).toBeTruthy();

    mode = UIMode.Display;
    expect(isUIEditable(mode)).toBeFalsy();

    mode = UIMode.Invalid;
    expect(isUIEditable(mode)).toBeFalsy();

    mode = UIMode.ListView;
    expect(isUIEditable(mode)).toBeFalsy();
  });
});
