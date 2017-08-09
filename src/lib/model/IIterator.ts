/**
 * @license
  * (C) Alva Chien, 2017. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: IIterator.ts
 *
 */

 export interface IIterator<T> {
    hasNext(): boolean;
    next(): T;
    remove(): void;
 }
