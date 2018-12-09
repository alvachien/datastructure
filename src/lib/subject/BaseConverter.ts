/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: BaseConverter.ts
 * Convert the number to specified base
 *
 */

import { SequenceStack } from '../model/SequenceStack';

/**
 * Number base
 */
export enum NumberBaseEnum {
  binary = 2,
  octal = 8,
  decimal = 10,
  hexadecimal = 16,
}

/**
 * Convert a decimal number to a new based number (with string format)
 * @param decNumber Decimal number
 * @param base new base
 */
export function baseConverter(decNumber: number, base: NumberBaseEnum): string {
  if (base <= 0) {
    throw new Error('invalid parameter');
  }

  const objStack = new SequenceStack<number>();
  let baseString: string = '';
  const digits = '0123456789ABCDEF';
  let rem: number;

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    objStack.Push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!objStack.IsEmpty()) {
    baseString += digits[objStack.Pop()];
  }

  return baseString;
}
