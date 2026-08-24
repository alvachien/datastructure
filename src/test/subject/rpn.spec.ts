/**
 * @license
 * (C) Alva Chien, 2017 - 2019. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: rpn.spec.ts
 *
 */

import { rpn1, RPNGetOperatorResult } from '../../lib/subject/rpn';

describe('Test rpn', () => {

  beforeEach(() => {
  });

  it("#1. Check rpn1, part I", () => {
    let rst: number = rpn1('12+');
    expect(rst).toBe(3);

    rst = rpn1('92-');
    expect(rst).toBe(7);
  });

  it("#2. Check rpn1, part II", () => {
    let rst: number = rpn1('12+');
    expect(rst).toBe(3);

    rst = rpn1('92-');
    expect(rst).toBe(7);
  });

  it("#3. Check rpn1 multiply and divide", () => {
    expect(rpn1('34*')).toBe(12);
    // Operand order: "93/" => 9 / 3 = 3
    expect(rpn1('93/')).toBe(3);
    // "84/" => 8 / 4 = 2
    expect(rpn1('84/')).toBe(2);
  });

  it("#4. Check rpn1 multi-step expressions", () => {
    // "12+3*" => (1+2)*3 = 9
    expect(rpn1('12+3*')).toBe(9);
    // "34+5*" => (3+4)*5 = 35 (documented RPN semantics in rpn.ts)
    expect(rpn1('34+5*')).toBe(35);
    // "93-2*" => (9-3)*2 = 12
    expect(rpn1('93-2*')).toBe(12);
  });

  it("#5. Check rpn1 empty input returns 0", () => {
    expect(rpn1('')).toBe(0);
  });

  it("#6. Check rpn1 does NOT evaluate arbitrary code (no eval)", () => {
    // Before the fix, rpn1 used eval() over the input string, so a malicious
    // token could execute code. Now unsupported operators must throw instead
    // of evaluating. A token like 'x' is not a digit and not a supported
    // operator, so the operation dispatch should throw.
    expect(() => rpn1('1;throw 5')).toThrow();
    // A plain unsupported operator char also throws (not silently eval'd).
    expect(() => rpn1('12^')).toThrow();
  });

  it("#7. RPNGetOperatorResult applies the four supported operators", () => {
    expect(RPNGetOperatorResult(1, 2, '+')).toBe(3);
    expect(RPNGetOperatorResult(9, 2, '-')).toBe(7);
    expect(RPNGetOperatorResult(3, 4, '*')).toBe(12);
    expect(RPNGetOperatorResult(9, 3, '/')).toBe(3);
  });

  it("#8. RPNGetOperatorResult division by zero yields Infinity (never throws)", () => {
    // JavaScript x / 0 returns Infinity (or NaN for 0/0); it does NOT throw.
    // The old try/catch around `x / y` was dead code. Verify the no-throw
    // behavior directly, so a future "fix" that re-adds a throw is caught.
    expect(() => RPNGetOperatorResult(5, 0, '/')).not.toThrow();
    expect(RPNGetOperatorResult(5, 0, '/')).toBe(Infinity);
    expect(() => RPNGetOperatorResult(0, 0, '/')).not.toThrow();
    expect(Number.isNaN(RPNGetOperatorResult(0, 0, '/'))).toBeTrue();
  });

  it("#9. RPNGetOperatorResult throws on unsupported operator", () => {
    expect(() => RPNGetOperatorResult(1, 2, '^')).toThrow();
    expect(() => RPNGetOperatorResult(1, 2, '%')).toThrow();
  });
});
