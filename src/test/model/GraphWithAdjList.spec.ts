/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphWithAdjList.spec.ts
 *
 */

import { GraphWithAdjList } from '../../lib/model/GraphWithAdjList';

describe('Test GraphWithAdjList', () => {
  let _graph: GraphWithAdjList<string, number>;

  beforeEach(() => {
    _graph = new GraphWithAdjList<string, number>();
  });

  it("#1. Test init()", () => {
    expect(_graph).toBeTruthy();

    // TBD.
  });
});
