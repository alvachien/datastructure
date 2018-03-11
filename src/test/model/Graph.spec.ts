/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Graph.spec.ts
 *
 */

import { Graph } from '../../lib/model/Graph';

describe('Test Graph', () => {
  let _graph: Graph<number, number>;

  beforeEach(() => {
    _graph = new Graph<number, number>();
  });

  it("#1. Test create())", () => {
    expect(_graph).toBeTruthy();
  });
});
