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
     * Calculate the Future Value Interest Factor, FVIF
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Future Value Interest Factor, FVIF
     */
    static FVIF(rate, numberOfPeriods, decimalPlaces = 2) {
        return NumberUtility.Round2Any(Math.pow((1 + rate), numberOfPeriods), decimalPlaces);
    }
    /**
     * Calculate the FV
     * @param amount PV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of FV
     */
    static FV(amount, rate, numberOfPeriods, decimalPlaces = 2) {
        const decplace = Math.round(Math.log10(amount)) + 2;
        return NumberUtility.Round2Any(amount * FinanceMethods.FVIF(rate, numberOfPeriods, decplace), decimalPlaces);
    }
    /**
     * Calculate the Present Value Interest Factor, PVIF
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Present Value Interest Factor, PVIF
     */
    static PVIF(rate, numberOfPeriods, decimalPlaces = 2) {
        return NumberUtility.Round2Any(Math.pow((1 + rate), -1 * numberOfPeriods), decimalPlaces);
    }
    /**
     * Calculate the PV
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PV(amount, rate, numberOfPeriods, decimalPlaces = 2) {
        const decplace = Math.round(Math.log10(amount)) + 2;
        return NumberUtility.Round2Any(amount * FinanceMethods.PVIF(rate, numberOfPeriods, decplace), decimalPlaces);
    }
    /**
     * Calculate the Present Value Factor of Ordinary Annuity
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVFactorofOrdinaryAnnity(rate, numberOfPeriods, decimalPlaces = 2) {
        return NumberUtility.Round2Any((1 - Math.pow(1 + rate, -1 * numberOfPeriods)) / rate, decimalPlaces);
    }
    /**
     * Calculate the Present Value of Ordinary Annuity
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofOrdinaryAnnity(amount, rate, numberOfPeriods, decimalPlaces = 2) {
        const decplace = Math.round(Math.log10(amount)) + 1;
        const factor = FinanceMethods.PVFactorofOrdinaryAnnity(rate, numberOfPeriods, decplace);
        return NumberUtility.Round2Any(amount * factor, decimalPlaces);
    }
    /**
     * Calculate the Present Value of Annuity in Advance
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofAnnityInAdvance(amount, rate, numberOfPeriods, decimalPlaces = 2) {
        // const decplace = Math.round(Math.log10(amount)) + 1;
        const pva = FinanceMethods.PVofOrdinaryAnnity(amount, rate, numberOfPeriods, 4);
        return NumberUtility.Round2Any(pva * (1 + rate), decimalPlaces);
    }
    /**
     * Calculate the Present Value of Deferred Annuity
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param deferredPeriods Deferred of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofDeferredAnnity(amount, rate, numberOfPeriods, deferredPeriods, decimalPlaces = 2) {
        const pva = FinanceMethods.PVofOrdinaryAnnity(amount, rate, numberOfPeriods, decimalPlaces);
        return FinanceMethods.PV(pva, rate, deferredPeriods, decimalPlaces);
    }
}
//# sourceMappingURL=FinanceMethods.js.map