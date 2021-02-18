/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: NumberUtility.ts
 *
 */
export class NumberUtility {
  /**
   * Round a number to 2 digits
   * @param num Number to do the rounding
   */
  public static Round2Two(num: number): number {
    // return +(Math.round(num + "e+2")  + "e-2");
    return Math.round(num * 100) / 100;
  }

  /**
   * Provide a number with prefix
   * @param num Number to be work
   * @param length Length specified in prefix
   * @returns a string
   * @example Input: num=2,length=3; Output: 002
   */
  public static prefixInteger(num: number, length: number): string {
    return (Array(length).join('0') + num).slice(-length);
  }
}
