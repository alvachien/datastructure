/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: StringUtility.ts
 *
 */
export class StringUtility {
  /**
   * Check the length of string
   * @param strField String to be checked
   * @param minlength Min. length allowed
   * @param maxLength Max. length allowed
   * @returns true if the string meet the length check
   */
  public static CheckStringLength(strField: string, minlength: number, maxLength: number): boolean {
    const lengthDf: number = strField.length;
    let bResult = false;

    if (lengthDf >= minlength && lengthDf <= maxLength) {
      bResult = true;
    }

    return bResult;
  }

  /**
   * Get strength level of a password
   * @param strField Password to be check
   * @returns number of level
   */
  public static GetPasswordStrengthLevel(strField: string): number {
    let passLevel = 0;

    if (strField.match(/[a-z]/g)) {
      passLevel++;
    }
    if (strField.match(/[A-Z]/g)) {
      passLevel++;
    }
    if (strField.match(/[0-9]/g)) {
      passLevel++;
    }
    if (strField.length < 5) {
      if (passLevel >= 1) {
        passLevel--;
      }
    } else if (strField.length >= 20) {
      passLevel++;
    }

    return passLevel;
  }

  /**
   * Check duplicated entries in an array
   * @param strarray Array to be check
   * @returns true indicates duplicated entries exist
   */
  public static hasDuplicatesInStringArray(strarray: string): boolean {
    const valuesSoFar: any = Object.create(undefined);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < strarray.length; ++i) {
      const value: any = strarray[i];
      if (value in valuesSoFar) {
        return true;
      }
      valuesSoFar[value] = true;
    }
    return false;
  }
}
