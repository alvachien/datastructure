import { Matrix } from '../../lib/subject/Matrix';

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

  it("#2. Check default output()", () => {
    _matrix = new Matrix<number>(2, 3);
    _matrix.init();
    expect(_matrix).toBeTruthy();

    expect(_matrix.RowCount).toBe(2);
    expect(_matrix.ColumnCount).toBe(3);
  });

  it("#3. Check slash()", () => {
    _matrix = new Matrix<number>(2, 3);
    _matrix.init();
    expect(_matrix).toBeTruthy();

    _matrix.setElement({x: 0, y: 0}, 1);
    _matrix.setElement({x: 0, y: 1}, 2);
    _matrix.setElement({x: 0, y: 2}, 3);
    _matrix.setElement({x: 1, y: 0}, 4);
    _matrix.setElement({x: 1, y: 1}, 5);
    _matrix.setElement({x: 1, y: 2}, 6);

    let arOut = _matrix.getSlashOutput();
    for(let arrow of arOut) {
      for(let arcell of arrow) {
        console.log(arcell);
      }
    }
    expect(_matrix.RowCount).toBe(2);
    expect(_matrix.ColumnCount).toBe(3);
  });
});

