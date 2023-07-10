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
/**
 * Number base
 */
export declare enum NumberBaseEnum {
    binary = 2,
    octal = 8,
    decimal = 10,
    hexadecimal = 16
}
/**
 * Convert a decimal number to a new based number (with string format)
 * @param decNumber Decimal number
 * @param base new base
 */
export declare function baseConverter(decNumber: number, base: NumberBaseEnum): string;
