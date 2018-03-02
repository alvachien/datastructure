/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: LinkList.spec.ts
 *
 */

 import { LinkList } from '../../lib/model/LinkList';

describe('Test LinkList', () => {
  let _linkList: LinkList<number>;

  beforeEach(() => {
    _linkList = new LinkList<number>();    
  });

  it("#1. Check InitList()", () => {
    _linkList.InitList();
    expect(_linkList.Head).toBeTruthy();
  });

  it("#2. Check empty list.", () => {
    _linkList.InitList();
    expect(_linkList.IsEmpty()).toBe(true);
    expect(_linkList.Length()).toBe(0);
  });

  it("#3. Check append of list.", () => {
    _linkList.InitList();
    _linkList.AppendElement(1);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(1);

    _linkList.AppendElement(2);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(2);
  });

  it("#4. Check insert of list.", () => {
    _linkList.InitList();
    _linkList.AppendElement(1);
    _linkList.AppendElement(2);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(2);
    
    _linkList.InsertElement(1, 3);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(3);

    expect(_linkList.GetElement(0)).toBe(1);
    expect(_linkList.GetElement(1)).toBe(3);
    expect(_linkList.GetElement(2)).toBe(2);
  });

  it("#5. Check delete of list.", () => {
    _linkList.InitList();
    _linkList.AppendElement(1);
    _linkList.AppendElement(2);
    _linkList.AppendElement(3);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(3);

    expect(_linkList.DeleteElement(1)).toBe(true);
    expect(_linkList.Length()).toBe(2);
    expect(_linkList.GetElement(0)).toBe(1);
    expect(_linkList.GetElement(1)).toBe(3);

    expect(_linkList.DeleteElement(0)).toBe(true);
    expect(_linkList.Length()).toBe(1);
    expect(_linkList.GetElement(0)).toBe(3);

    expect(_linkList.DeleteElement(0)).toBe(true);
    expect(_linkList.Length()).toBe(0);

    expect(_linkList.DeleteElement(0)).toBe(false);
  });

  it("#6. Check empty.", () => {
    _linkList.InitList();
    _linkList.AppendElement(1);
    _linkList.AppendElement(2);
    _linkList.AppendElement(3);
    expect(_linkList.IsEmpty()).toBe(false);
    expect(_linkList.Length()).toBe(3);

    _linkList.ClearAll();
    expect(_linkList.Length()).toBe(0);
  });

  // it("#7. Check IsExist.", () => {
  //   _linkList.InitList();
  //   _linkList.AppendElement(1);
  //   _linkList.AppendElement(2);
  //   _linkList.AppendElement(2);

  //   expect(_linkList.IsExist(1)).toBe(true);
  //   expect(_linkList.IsExist(2)).toBe(true);
  //   expect(_linkList.IsExist(3)).toBe(false);
  // });

  it("#8. Check Print.", () => {
    // _linkList.InitList();
    _linkList.AppendElement(1);
    _linkList.AppendElement(2);
    _linkList.AppendElement(3);

    expect(_linkList.Print(',')).toBe('1,2,3');
    expect(_linkList.Print('-')).toBe('1-2-3');
    expect(_linkList.Print()).toBe('1,2,3');
  });
});
