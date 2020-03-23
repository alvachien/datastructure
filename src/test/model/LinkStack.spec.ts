/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkStack.spec.ts
 *
 */

import { LinkStack } from '../../lib/model/LinkStack';

describe('Test LinkStack', () => {
  let _linkStack: LinkStack<number>;

  beforeEach(() => {
    _linkStack = new LinkStack<number>();
  });

  it('#1. Check InitStack()', () => {
    expect(_linkStack).toBeTruthy();
  });

  it('#2. Check empty stack.', () => {
    expect(_linkStack.IsEmpty()).toBe(true);
    expect(_linkStack.Length()).toBe(0);
  });

  it('#3. Check push on Stack.', () => {
    _linkStack.Push(1);
    expect(_linkStack.IsEmpty()).toBe(false);
    expect(_linkStack.Length()).toBe(1);

    _linkStack.Push(2);
    expect(_linkStack.IsEmpty()).toBe(false);
    expect(_linkStack.Length()).toBe(2);
  });

  it('#4. Check pop of Stack.', () => {
    _linkStack.Push(1);
    _linkStack.Push(2);
    _linkStack.Push(3);
    expect(_linkStack.IsEmpty()).toBe(false);
    expect(_linkStack.Length()).toBe(3);

    expect(_linkStack.Pop()).toBeTruthy();
    expect(_linkStack.Length()).toBe(2);

    expect(_linkStack.Pop()).toBeTruthy();
    expect(_linkStack.Length()).toBe(1);

    expect(_linkStack.Pop()).toBeTruthy();
    expect(_linkStack.Length()).toBe(0);

    expect(_linkStack.Pop()).toBeFalsy();
  });

  it('#5. Check empty stack.', () => {
    // _linkStack.InitList();
    _linkStack.Push(1);
    _linkStack.Push(2);
    _linkStack.Push(3);
    expect(_linkStack.IsEmpty()).toBe(false);
    expect(_linkStack.Length()).toBe(3);

    _linkStack.ClearAll();
    expect(_linkStack.Length()).toBe(0);
  });

  xit('#6. Check IsExist.', () => {
    // _linkStack.InitList();
    // _linkStack.AppendElement(1);
    // _linkStack.AppendElement(2);
    // _linkStack.AppendElement(2);

    // expect(_linkStack.IsExist(1)).toBe(true);
    // expect(_linkStack.IsExist(2)).toBe(true);
    // expect(_linkStack.IsExist(3)).toBe(false);
  });

  xit('#7. Check Print.', () => {
    // _linkStack.InitList();
    // _linkStack.AppendElement(1);
    // _linkStack.AppendElement(2);
    // _linkStack.AppendElement(3);

    // expect(_linkStack.Print(',')).toBe('1,2,3');
    // expect(_linkStack.Print('-')).toBe('1-2-3');
    // expect(_linkStack.Print()).toBe('1,2,3');
  });
});
