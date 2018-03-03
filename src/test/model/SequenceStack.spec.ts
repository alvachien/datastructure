/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: SequenceStack.spec.ts
 *
 */

import { SequenceStack } from '../../lib/model/SequenceStack';

describe('Test SequenceStack', () => {
  let _seqStack: SequenceStack<number>;

  beforeEach(() => {
    _seqStack = new SequenceStack<number>();    
  });

  it("#1. Check InitStack()", () => {
    // _seqStack.InitList();
    expect(_seqStack).toBeTruthy();
  });

  it("#2. Check empty stack.", () => {
    // _seqStack.InitList();
    expect(_seqStack.IsEmpty()).toBe(true);
    expect(_seqStack.Length()).toBe(0);
  });

  it("#3. Check push on Stack.", () => {
    // _seqStack.InitList();
    _seqStack.Push(1);
    expect(_seqStack.IsEmpty()).toBe(false);
    expect(_seqStack.Length()).toBe(1);

    _seqStack.Push(2);
    expect(_seqStack.IsEmpty()).toBe(false);
    expect(_seqStack.Length()).toBe(2);
  });

  it("#4. Check pop of Stack.", () => {
    // _seqStack.InitList();
    _seqStack.Push(1);
    _seqStack.Push(2);
    _seqStack.Push(3);
    expect(_seqStack.IsEmpty()).toBe(false);
    expect(_seqStack.Length()).toBe(3);

    expect(_seqStack.Pop()).toBeTruthy();
    expect(_seqStack.Length()).toBe(2);

    expect(_seqStack.Pop()).toBeTruthy();
    expect(_seqStack.Length()).toBe(1);

    expect(_seqStack.Pop()).toBeTruthy();
    expect(_seqStack.Length()).toBe(0);

    expect(_seqStack.Pop()).toBeFalsy();
  });

  it("#5. Check empty stack.", () => {
    // _seqStack.InitList();
    _seqStack.Push(1);
    _seqStack.Push(2);
    _seqStack.Push(3);
    expect(_seqStack.IsEmpty()).toBe(false);
    expect(_seqStack.Length()).toBe(3);

    _seqStack.ClearAll();
    expect(_seqStack.Length()).toBe(0);
  });

  it("#6. Check IsExist.", () => {
    // _seqStack.InitList();
    // _seqStack.AppendElement(1);
    // _seqStack.AppendElement(2);
    // _seqStack.AppendElement(2);

    // expect(_seqStack.IsExist(1)).toBe(true);
    // expect(_seqStack.IsExist(2)).toBe(true);
    // expect(_seqStack.IsExist(3)).toBe(false);
  });

  it("#7. Check Print.", () => {
    // _seqStack.InitList();
    // _seqStack.AppendElement(1);
    // _seqStack.AppendElement(2);
    // _seqStack.AppendElement(3);

    // expect(_seqStack.Print(',')).toBe('1,2,3');
    // expect(_seqStack.Print('-')).toBe('1-2-3');
    // expect(_seqStack.Print()).toBe('1,2,3');
  });
});
