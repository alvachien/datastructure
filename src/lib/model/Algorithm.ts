/**
 * Algorithm.ts
 * (C) Copyright, Alva Chien
 * 
 * This file try to provide a set of algorithm
 * Including:
 * 1. KMP
 * 2. 
 * 
 */

function KMP_MakeNext(arr: string) : number[] {
    let q : number  = 0;
    let k: number = 0;
    let len: number = 0;
    len = arr.length;
    let next: number[] = [];

    next.push(0);
    for(q = 1, k = 0; q < len; ++q) {
        while(k > 0 && arr.charAt(q) !== arr.charAt(k)) {
            k = next[k-1];
        }

        if (arr.charAt(q) === arr.charAt(k)) {
            k++;
        }

        next[q] = k;
    }

    return next;
}

export function KMP(arr1: string, arr2: string): number | null {
    let n: number = arr1.length;
    let m: number = arr2.length;
    let next: number[] = KMP_MakeNext(arr2);

    for(let i = 0, q = 0; i < n; ++i) {
        while (q > 0 && arr2.charAt(q) !== arr1.charAt(i)) {
            q = next[q - 1];
        }

        if (arr2.charAt(q) === arr1.charAt(i)) {
            q ++;
        }

        if (q === m) {
            return i - m + 1;
        }
    }

    return null;
}
