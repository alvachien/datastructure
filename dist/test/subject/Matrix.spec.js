/**
 * @license
 * (C) Alva Chien, 2017 - 2018. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: Matrix.spec.ts
 *
 */
import { Matrix } from '../../lib/subject/Matrix';
describe('Test Matrix', () => {
    let _matrix;
    beforeEach(() => {
        _matrix = new Matrix(10, 10);
    });
    it("#1. Check init()", () => {
        _matrix.init();
        expect(_matrix).toBeTruthy();
        expect(_matrix.RowCount).toBe(10);
    });
    it("#2. Check default output()", () => {
        _matrix = new Matrix(2, 3);
        _matrix.init();
        expect(_matrix).toBeTruthy();
        expect(_matrix.RowCount).toBe(2);
        expect(_matrix.ColumnCount).toBe(3);
    });
    it("#3. Check getSlashOutputPos()", () => {
        _matrix = new Matrix(2, 3);
        _matrix.init();
        expect(_matrix).toBeTruthy();
        _matrix.setElement({ row: 0, column: 0 }, 1);
        _matrix.setElement({ row: 0, column: 1 }, 2);
        _matrix.setElement({ row: 0, column: 2 }, 3);
        _matrix.setElement({ row: 1, column: 0 }, 4);
        _matrix.setElement({ row: 1, column: 1 }, 5);
        _matrix.setElement({ row: 1, column: 2 }, 6);
        // Matrix
        // |1  2  3|
        // |4  5  6|
        // 
        // Expected:
        // [[1]]
        // [[2, 4]]
        // [[3, 5]]
        // [[6]]
        let arOut = _matrix.getSlashOutputPos();
        expect(arOut.length).toBe(2 + 3 - 1);
        // Row 0
        expect(arOut[0].length).toBe(1);
        expect(arOut[0][0].row).toBe(0);
        expect(arOut[0][0].column).toBe(0);
        expect(_matrix.getElement(arOut[0][0])).toBe(1);
        // Row 1
        expect(arOut[1].length).toBe(2);
        expect(arOut[1][0].row).toBe(0);
        expect(arOut[1][0].column).toBe(1);
        expect(_matrix.getElement(arOut[1][0])).toBe(2);
        expect(arOut[1][1].row).toBe(1);
        expect(arOut[1][1].column).toBe(0);
        expect(_matrix.getElement(arOut[1][1])).toBe(4);
        // Row 2
        expect(arOut[2].length).toBe(2);
        expect(arOut[2][0].row).toBe(0);
        expect(arOut[2][0].column).toBe(2);
        expect(_matrix.getElement(arOut[2][0])).toBe(3);
        expect(arOut[2][1].row).toBe(1);
        expect(arOut[2][1].column).toBe(1);
        expect(_matrix.getElement(arOut[2][1])).toBe(5);
        // Row 3
        expect(arOut[3].length).toBe(1);
        expect(arOut[3][0].row).toBe(1);
        expect(arOut[3][0].column).toBe(2);
        expect(_matrix.getElement(arOut[3][0])).toBe(6);
    });
    it("#3. Check getBackSlashOutputPos()", () => {
        _matrix = new Matrix(3, 3);
        _matrix.init();
        expect(_matrix).toBeTruthy();
        _matrix.setElement({ row: 0, column: 0 }, 1);
        _matrix.setElement({ row: 0, column: 1 }, 2);
        _matrix.setElement({ row: 0, column: 2 }, 3);
        _matrix.setElement({ row: 1, column: 0 }, 4);
        _matrix.setElement({ row: 1, column: 1 }, 5);
        _matrix.setElement({ row: 1, column: 2 }, 6);
        _matrix.setElement({ row: 2, column: 0 }, 7);
        _matrix.setElement({ row: 2, column: 1 }, 8);
        _matrix.setElement({ row: 2, column: 2 }, 9);
        // Matrix
        // |1  2  3|
        // |4  5  6|
        // |7  8  9|
        // Expected:
        // [[3]]
        // [[2, 6]]
        // [[1, 5, 9]]
        // [[4, 8]]
        // [[7]]
        let arOut = _matrix.getBackSlashOutputPos();
        expect(arOut.length).toBe(3 + 3 - 1);
        // Row 0
        expect(arOut[0].length).toBe(1);
        expect(arOut[0][0].row).toBe(0);
        expect(arOut[0][0].column).toBe(2);
        expect(_matrix.getElement(arOut[0][0])).toBe(3);
        // Row 1
        expect(arOut[1].length).toBe(2);
        expect(arOut[1][0].row).toBe(0);
        expect(arOut[1][0].column).toBe(1);
        expect(_matrix.getElement(arOut[1][0])).toBe(2);
        expect(arOut[1][1].row).toBe(1);
        expect(arOut[1][1].column).toBe(2);
        expect(_matrix.getElement(arOut[1][1])).toBe(6);
        // Row 2
        expect(arOut[2].length).toBe(3);
        expect(arOut[2][0].row).toBe(0);
        expect(arOut[2][0].column).toBe(0);
        expect(_matrix.getElement(arOut[2][0])).toBe(1);
        expect(arOut[2][1].row).toBe(1);
        expect(arOut[2][1].column).toBe(1);
        expect(_matrix.getElement(arOut[2][1])).toBe(5);
        expect(arOut[2][2].row).toBe(2);
        expect(arOut[2][2].column).toBe(2);
        expect(_matrix.getElement(arOut[2][2])).toBe(9);
        // Row 3
        expect(arOut[3].length).toBe(2);
        expect(arOut[3][0].row).toBe(1);
        expect(arOut[3][0].column).toBe(0);
        expect(_matrix.getElement(arOut[3][0])).toBe(4);
        expect(arOut[3][1].row).toBe(2);
        expect(arOut[3][1].column).toBe(1);
        expect(_matrix.getElement(arOut[3][1])).toBe(8);
        // Row 4
        expect(arOut[4].length).toBe(1);
        expect(arOut[4][0].row).toBe(2);
        expect(arOut[4][0].column).toBe(0);
        expect(_matrix.getElement(arOut[4][0])).toBe(7);
    });
});
//# sourceMappingURL=Matrix.spec.js.map