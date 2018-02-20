import { Matrix } from '../lib/subject/Matrix';

describe('Test Matrix', () => {
  let _matrix: Matrix<number>;

  beforeEach(() => {
    _matrix = new Matrix<number>(10, 10);
  });

  it("#1. Check init()", () => {
    _matrix.init();
    expect(_matrix).toBeTruthy();

    expect(_matrix.RowCount).toBe(10);
  });
});

