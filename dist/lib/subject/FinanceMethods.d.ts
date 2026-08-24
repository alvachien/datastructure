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
export declare class FinanceMethods {
    /**
     * Calculate the Future Value Interest Factor, FVIF
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Future Value Interest Factor, FVIF
     */
    static FVIF(rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the FV
     * @param amount PV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of FV
     */
    static FV(amount: number, rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value Interest Factor, PVIF
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Present Value Interest Factor, PVIF
     */
    static PVIF(rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the PV
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PV(amount: number, rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Future Value Interest Factors for Annuity
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Interest factor
     */
    static FVIFA(rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value Interest Factors for Annuity
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Interest factor
     */
    static PVIFA(rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value Factor of Ordinary Annuity
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVFactorofOrdinaryAnnity(rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value of Ordinary Annuity
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofOrdinaryAnnity(amount: number, rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value of Annuity in Advance
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofAnnityInAdvance(amount: number, rate: number, numberOfPeriods: number, decimalPlaces?: number): number;
    /**
     * Calculate the Present Value of Deferred Annuity
     * @param amount FV
     * @param rate Interest rate per periods
     * @param numberOfPeriods Number of periods
     * @param deferredPeriods Deferred of periods
     * @param decimalPlaces Decimal places of the return value
     * @returns Amount of PV
     */
    static PVofDeferredAnnity(amount: number, rate: number, numberOfPeriods: number, deferredPeriods: number, decimalPlaces?: number): number;
}
