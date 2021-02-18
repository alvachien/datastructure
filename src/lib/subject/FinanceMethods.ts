/**
 * @license
 * (C) Alva Chien, 2017 - 2021. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FinanceMethods.ts
 * 
 * Finance methods
 * 
 */

import { NumberUtility } from '../utility';

export class FinanceMethods {
    /**
     * Calculate the FV
     * @param amount PV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of FV
     */
    public static FV(amount: number, rate: number, numberOfPeriods: number, decimalPlaces = 2): number {
        return NumberUtility.Round2Any(amount * Math.pow((1 + rate), numberOfPeriods), decimalPlaces);
    }

    /**
     * Calculate the PV
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    public static PV(amount: number, rate: number, numberOfPeriods: number, decimalPlaces = 2): number {
        return NumberUtility.Round2Any(amount * Math.pow((1 + rate), -1 * numberOfPeriods), decimalPlaces);
    }
}
