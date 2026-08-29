/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FisherYatesShuffle.ts
 *
 */
/**
 * Shuffle a list with the Fisher-Yates (Knuth) algorithm.
 *
 * Walks the array from the last element to the first, swapping each
 * position with a uniformly random one from the not-yet-visited prefix.
 * Runs in O(n) time and produces an unbiased permutation. The input array
 * is never modified; a shuffled copy is returned.
 * @param array The list to shuffle (accepted as readonly)
 * @returns A new array holding the shuffled elements
 */
export function FisherYatesShuffle(array) {
    const result = array.slice();
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
//# sourceMappingURL=FisherYatesShuffle.js.map