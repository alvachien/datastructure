/**
 * @license
 * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: PanCakeSorting.ts
 *
 */

/**
 * Desp:
 * 把一摞大小不一的烙饼按顺序排好，大的在下面，小的在上面，要求只能用一只手去翻转烙饼位置，另一只手要端盘子，要求输出最优化的排序过程。
 */

function ArrayFlip<T>(arr: T[], i: number) {
    let tmp: T;
    let start = 0;

    while (start < i) {
        tmp = arr[start];
        arr[start] = arr[i];
        arr[i] = tmp;

        start++;
        i--;
    }
}

function FindMax<T>(arr: T[], n: number) {
    let max: number;
    let i = 0;

    for (; i < n; i++) {
        if (arr[i] > arr[max]) {
            max = i;
        }
    }
    return max;
}

export function PanCakeSorting<T>(arr: T[], n: number) {
    for (let currsize = n; currsize > 1; --currsize) {
        const max = FindMax(arr, currsize);

        if (max !== currsize - 1) {
            ArrayFlip(arr, max);
            ArrayFlip(arr, currsize - 1);
        }
    }
}

export class PanCakeAlgorithm {
    private _cakecount: number;
    private _maxswap: number;

    constructor() {
        this._cakecount = 0;
        this._maxswap = 0;
    }

    private UpBound(cnt: number): number {
        return cnt * 2;
    }

    // TBD.
}
