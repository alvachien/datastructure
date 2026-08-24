/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FakedGuid.spec.ts
 * Fake Guid
 *
 */

import { FakedGuid } from '../../lib/model/FakedGuid';

describe('Test FakedGuid', () => {
  beforeEach(() => {
  });

  it('#1. Test creation', () => {
    const nid = FakedGuid.newGuid();
    expect(nid).toBeTruthy();
    const nid2 = FakedGuid.newGuid();
    expect(nid2).toBeTruthy();
  });
});
