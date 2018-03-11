/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: GraphAdjaceList.spec.ts
 *
 */

import { GraphAdjaceList } from '../../lib/model/AdjListGraph';

describe('Test GraphAdjaceList', () => {
  let _graph: GraphAdjaceList<number, number>;

  beforeEach(() => {
    _graph = new GraphAdjaceList<number, number>();
  });

  it("#1. Test create())", () => {
    expect(_graph).toBeTruthy();
  });
});
