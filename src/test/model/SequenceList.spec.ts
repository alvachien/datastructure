import { SequenceList } from '../../lib/model/SequenceList';

describe('Test SequenceList', () => {
  let _seqList: SequenceList<number>;

  beforeEach(() => {
    _seqList = new SequenceList<number>();    
  });

  it("#1. Check InitList()", () => {
    _seqList.InitList();
    expect(_seqList).toBeTruthy();
  });

  it("#2. Check empty list.", () => {
    _seqList.InitList();
    expect(_seqList.IsEmpty()).toBe(true);
    expect(_seqList.Length()).toBe(0);
  });

  it("#3. Check append of list.", () => {
    _seqList.InitList();
    _seqList.AppendElement(1);
    expect(_seqList.IsEmpty()).toBe(false);
    expect(_seqList.Length()).toBe(1);

    _seqList.AppendElement(2);
    expect(_seqList.IsEmpty()).toBe(false);
    expect(_seqList.Length()).toBe(2);
  });

  it("#4. Check insert of list.", () => {
    _seqList.InitList();
    _seqList.AppendElement(1);
    _seqList.AppendElement(2);
    expect(_seqList.IsEmpty()).toBe(false);
    expect(_seqList.Length()).toBe(2);
    
    _seqList.InsertElement(1, 3);
    expect(_seqList.IsEmpty()).toBe(false);
    expect(_seqList.Length()).toBe(3);

    expect(_seqList.GetElement(0)).toBe(1);
    expect(_seqList.GetElement(1)).toBe(3);
    expect(_seqList.GetElement(2)).toBe(2);
  });
});
