/**
 * @license
 * (C) Alva Chien, 2017 - 2026. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/alvachien/datastructure/blob/master/LICENSE
 *
 * File: FilterUtility.spec.ts
 *
 */
import { FilterUtility, FilterJoinType, FilterOperation, } from '../../lib/utility';
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 5] = "Medium";
    Priority[Priority["High"] = 10] = "High";
})(Priority || (Priority = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Open"] = "OPEN";
    TaskStatus["InProgress"] = "IN_PROGRESS";
    TaskStatus["Done"] = "DONE";
})(TaskStatus || (TaskStatus = {}));
describe('Unit test for FilterUtility in Model', () => {
    const staff = [
        { name: 'Alice', age: 30, department: 'Engineering', hired: new Date(2020, 0, 15) },
        { name: 'Bob', age: 25, department: 'Sales', hired: new Date(2021, 5, 1) },
        { name: 'Alicia', age: 35, hired: new Date(2019, 11, 31) },
        { name: 'Carl' }, // age/department undefined
    ];
    it('#1. Number single value comparisons (highValue ignored)', () => {
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.GreaterThan, lowValue: 26 },
        ]).length).toEqual(2);
        // Carl's missing age counts as 0, so he matches '<= 25' too
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.LessOrEqual, lowValue: 25 },
        ]).length).toEqual(2);
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.Equal, lowValue: 30 },
        ]).length).toEqual(1);
        // highValue is not considered by non-Between operations
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.Equal, lowValue: 30, highValue: 99 },
        ]).map((e) => e.name)).toEqual(['Alice']);
    });
    it('#2. Undefined/null number treated as 0', () => {
        const result = FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.LessOrEqual, lowValue: 0 },
        ]);
        expect(result.map((e) => e.name)).toEqual(['Carl']);
        // 'less than 26' also includes Carl (as 0)
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.LessThan, lowValue: 26 },
        ]).length).toEqual(2);
    });
    it('#3. Number Between (inclusive on both bounds)', () => {
        const between = FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.Between, lowValue: 25, highValue: 30 },
        ]);
        expect(between.map((e) => e.name)).toEqual(['Alice', 'Bob']);
        // lowValue alone makes Between fail
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.Between, lowValue: 25 },
        ]).length).toEqual(0);
    });
    it('#4. String operations', () => {
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.BeginsWith, lowValue: 'Ali' },
        ]).map((e) => e.name)).toEqual(['Alice', 'Alicia']);
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.EndsWith, lowValue: 'cia' },
        ]).map((e) => e.name)).toEqual(['Alicia']);
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.Contains, lowValue: 'li' },
        ]).length).toEqual(2);
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.Equal, lowValue: 'alice' },
        ]).length).toEqual(0); // case-sensitive
    });
    it('#5. String relational and Between', () => {
        // names before 'B' lexicographically: Alice, Alicia, Carl
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.LessThan, lowValue: 'B' },
        ]).map((e) => e.name)).toEqual(['Alice', 'Alicia']);
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.Between, lowValue: 'B', highValue: 'D' },
        ]).map((e) => e.name)).toEqual(['Bob', 'Carl']);
    });
    it('#6. String operations on undefined property treated as empty string', () => {
        // Alicia and Carl have no department; Equal '' matches both (missing string = '')
        expect(FilterUtility.FilterList(staff, [
            { property: 'department', operation: FilterOperation.Equal, lowValue: '' },
        ]).map((e) => e.name)).toEqual(['Alicia', 'Carl']);
        expect(FilterUtility.FilterList(staff, [
            { property: 'department', operation: FilterOperation.Contains, lowValue: 'e' },
        ]).length).toEqual(2);
    });
    it('#7. Date comparisons and Between', () => {
        expect(FilterUtility.FilterList(staff, [
            { property: 'hired', operation: FilterOperation.LessThan, lowValue: new Date(2020, 0, 1) },
        ]).map((e) => e.name)).toEqual(['Alicia']);
        expect(FilterUtility.FilterList(staff, [
            { property: 'hired', operation: FilterOperation.Equal, lowValue: new Date(2021, 5, 1) },
        ]).map((e) => e.name)).toEqual(['Bob']);
        expect(FilterUtility.FilterList(staff, [
            {
                property: 'hired',
                operation: FilterOperation.Between,
                lowValue: new Date(2020, 0, 1),
                highValue: new Date(2021, 5, 1),
            },
        ]).map((e) => e.name)).toEqual(['Alice', 'Bob']);
        // an item without a date never matches
        expect(FilterUtility.FilterList(staff, [
            { property: 'hired', operation: FilterOperation.GreaterThan, lowValue: new Date(1900, 0, 1) },
        ]).length).toEqual(3);
    });
    it('#8. AND / OR joining', () => {
        const andFilter = {
            join: FilterJoinType.AND,
            conditions: [
                { property: 'name', operation: FilterOperation.BeginsWith, lowValue: 'Ali' },
                { property: 'age', operation: FilterOperation.GreaterThan, lowValue: 32 },
            ],
        };
        expect(FilterUtility.FilterList(staff, andFilter).map((e) => e.name)).toEqual(['Alicia']);
        const orFilter = {
            join: FilterJoinType.OR,
            conditions: [
                { property: 'name', operation: FilterOperation.BeginsWith, lowValue: 'Ali' },
                { property: 'age', operation: FilterOperation.GreaterThan, lowValue: 32 },
            ],
        };
        expect(FilterUtility.FilterList(staff, orFilter).length).toEqual(2);
    });
    it('#9. Nested groups: condA AND (condB OR condC)', () => {
        // age Between 25..30 AND (department BeginsWith 'Eng' OR name Equal 'Bob')
        const nested = {
            join: FilterJoinType.AND,
            conditions: [
                { property: 'age', operation: FilterOperation.Between, lowValue: 25, highValue: 30 },
                {
                    join: FilterJoinType.OR,
                    conditions: [
                        { property: 'department', operation: FilterOperation.BeginsWith, lowValue: 'Eng' },
                        { property: 'name', operation: FilterOperation.Equal, lowValue: 'Bob' },
                    ],
                },
            ],
        };
        // Alice: 30 is in range and Engineering starts with 'Eng'; Bob: 25 is in range and name matches
        expect(FilterUtility.FilterList(staff, nested).map((e) => e.name)).toEqual(['Alice', 'Bob']);
        // OR at the top level with an AND group on the right
        const other = {
            join: FilterJoinType.OR,
            conditions: [
                { property: 'name', operation: FilterOperation.Equal, lowValue: 'Carl' },
                {
                    join: FilterJoinType.AND,
                    conditions: [
                        { property: 'age', operation: FilterOperation.GreaterThan, lowValue: 32 },
                        { property: 'name', operation: FilterOperation.BeginsWith, lowValue: 'Ali' },
                    ],
                },
            ],
        };
        expect(FilterUtility.FilterList(staff, other).map((e) => e.name)).toEqual(['Alicia', 'Carl']);
    });
    it('#10. Empty definition matches everything, disallowed operations never match', () => {
        expect(FilterUtility.FilterList(staff, { conditions: [] }).length).toEqual(4);
        // BeginsWith is not allowed on a number property
        expect(FilterUtility.FilterList(staff, [
            { property: 'age', operation: FilterOperation.BeginsWith, lowValue: 3 },
        ]).length).toEqual(0);
        // Between without highValue never matches
        expect(FilterUtility.FilterList(staff, [
            { property: 'name', operation: FilterOperation.Between, lowValue: 'A' },
        ]).length).toEqual(0);
    });
    it('#11. MatchFilter / MatchCondition directly', () => {
        const alice = staff[0];
        expect(FilterUtility.MatchCondition(alice, { property: 'age', operation: FilterOperation.Equal, lowValue: 30 })).toBeTrue();
        expect(FilterUtility.MatchFilter(alice, [{ property: 'age', operation: FilterOperation.GreaterThan, lowValue: 20 }])).toBeTrue();
        expect(FilterUtility.MatchFilter(alice, [])).toBeTrue();
        expect(FilterUtility.MatchCondition(alice, { property: 'missing', operation: FilterOperation.Equal, lowValue: 0 })).toBeTrue(); // missing number = 0
    });
    it('#12. Enum properties filter by their underlying type', () => {
        const tasks = [
            { title: 'T1', priority: Priority.Low, status: TaskStatus.Open },
            { title: 'T2', priority: Priority.Medium, status: TaskStatus.InProgress },
            { title: 'T3', priority: Priority.High, status: TaskStatus.Done },
        ];
        // numeric enum behaves like a number, enum members usable as condition values
        expect(FilterUtility.FilterList(tasks, [
            { property: 'priority', operation: FilterOperation.Equal, lowValue: Priority.Medium },
        ]).map((t) => t.title)).toEqual(['T2']);
        expect(FilterUtility.FilterList(tasks, [
            { property: 'priority', operation: FilterOperation.GreaterOrEqual, lowValue: Priority.Medium },
        ]).map((t) => t.title)).toEqual(['T2', 'T3']);
        expect(FilterUtility.FilterList(tasks, [
            { property: 'priority', operation: FilterOperation.Between, lowValue: Priority.Low, highValue: Priority.Medium },
        ]).map((t) => t.title)).toEqual(['T1', 'T2']);
        // string enum behaves like a string
        expect(FilterUtility.FilterList(tasks, [
            { property: 'status', operation: FilterOperation.BeginsWith, lowValue: 'IN_' },
        ]).map((t) => t.title)).toEqual(['T2']);
        expect(FilterUtility.FilterList(tasks, [
            { property: 'status', operation: FilterOperation.Equal, lowValue: TaskStatus.Done },
        ]).map((t) => t.title)).toEqual(['T3']);
        expect(FilterUtility.FilterList(tasks, [
            { property: 'status', operation: FilterOperation.Between, lowValue: 'A', highValue: 'O' },
        ]).map((t) => t.title)).toEqual(['T2', 'T3']); // DONE, IN_PROGRESS ('OPEN' > 'O' lexicographically)
    });
    it('#13. Enum validation via enumValues', () => {
        const board = [
            { title: 'T1', priority: Priority.Low, status: TaskStatus.Open },
            { title: 'T2', priority: Priority.Medium, status: TaskStatus.InProgress },
            { title: 'Bad', priority: 7 }, // not an enum member value
            { title: 'None' }, // missing priority/status
        ];
        // A non-member property value never matches under validation, and a
        // missing property does not get the 'absent number = 0' treatment
        expect(FilterUtility.FilterList(board, [
            { property: 'priority', operation: FilterOperation.GreaterOrEqual, lowValue: Priority.Low, enumValues: Priority },
        ]).map((t) => t.title)).toEqual(['T1', 'T2']);
        // without enumValues, 7 >= 0 matches 'Bad' and the missing value (as 0) matches 'None'
        expect(FilterUtility.FilterList(board, [
            { property: 'priority', operation: FilterOperation.GreaterOrEqual, lowValue: Priority.Low },
        ]).map((t) => t.title)).toEqual(['T1', 'T2', 'Bad', 'None']);
        // condition bound values must be enum members too
        expect(FilterUtility.FilterList(board, [
            { property: 'priority', operation: FilterOperation.Equal, lowValue: 7, enumValues: Priority },
        ]).length).toEqual(0);
        expect(FilterUtility.FilterList(board, [
            { property: 'priority', operation: FilterOperation.Between, lowValue: Priority.Low, highValue: 7, enumValues: Priority },
        ]).length).toEqual(0);
        // Between with valid bounds: 'Bad' (7 is within 0..10 but not a member) is excluded
        expect(FilterUtility.FilterList(board, [
            { property: 'priority', operation: FilterOperation.Between, lowValue: Priority.Low, highValue: Priority.High, enumValues: Priority },
        ]).map((t) => t.title)).toEqual(['T1', 'T2']);
        // string enum validation
        expect(FilterUtility.FilterList(board, [
            { property: 'status', operation: FilterOperation.BeginsWith, lowValue: 'IN_', enumValues: TaskStatus },
        ]).map((t) => t.title)).toEqual(['T2']);
        // member-value helpers live in EnumUtility (see EnumUtility.spec.ts)
    });
    it('#14. Bare-condition root (case 1), equal to the 1-member wrapper', () => {
        const cond = {
            property: 'age',
            operation: FilterOperation.GreaterThan,
            lowValue: 26,
        };
        // FilterList / MatchFilter accept a bare condition as the whole filter
        expect(FilterUtility.MatchFilter(staff[0], cond)).toBeTrue();
        expect(FilterUtility.MatchFilter(staff[1], cond)).toBeFalse();
        expect(FilterUtility.FilterList(staff, cond).map((e) => e.name)).toEqual(['Alice', 'Alicia']);
        // identical to { conditions: [c] } no matter what join the wrapper carries
        const wrapperAnd = { join: FilterJoinType.AND, conditions: [cond] };
        const wrapperOr = { join: FilterJoinType.OR, conditions: [cond] };
        for (const person of staff) {
            expect(FilterUtility.MatchFilter(person, cond)).toEqual(FilterUtility.MatchFilter(person, wrapperAnd));
            expect(FilterUtility.MatchFilter(person, cond)).toEqual(FilterUtility.MatchFilter(person, wrapperOr));
        }
        // a bare condition also works nested inside a group tree (case 2)
        const nested = {
            join: FilterJoinType.OR,
            conditions: [cond, { property: 'name', operation: FilterOperation.Equal, lowValue: 'Bob' }],
        };
        expect(FilterUtility.FilterList(staff, nested).map((e) => e.name)).toEqual([
            'Alice',
            'Bob',
            'Alicia',
        ]);
        // discrimination: an object carrying BOTH `property` and `conditions`
        // is treated as a condition (same precedence as for members)
        const hybrid = { ...cond, conditions: [] };
        for (const person of staff) {
            expect(FilterUtility.MatchFilter(person, hybrid)).toEqual(FilterUtility.MatchFilter(person, cond));
        }
    });
    it('#15. ToDefinition / Simplify round-trip', () => {
        const cond = {
            property: 'name',
            operation: FilterOperation.Equal,
            lowValue: 'Bob',
        };
        // ToDefinition wraps a bare condition, passes a definition through
        expect(FilterUtility.ToDefinition(cond)).toEqual({ conditions: [cond] });
        const def = {
            join: FilterJoinType.OR,
            conditions: [cond, { property: 'age', operation: FilterOperation.LessThan, lowValue: 20 }],
        };
        expect(FilterUtility.ToDefinition(def)).toBe(def);
        // Simplify unwraps a 1-member root to the bare condition...
        expect(FilterUtility.Simplify({ conditions: [cond] })).toEqual(cond);
        // ...but leaves the empty (case 0) and >= 2-member (case 2) shapes alone
        expect(FilterUtility.Simplify({ conditions: [] })).toEqual({ conditions: [] });
        expect(FilterUtility.Simplify(def)).toBe(def);
        // only the root is unwrapped — once, not recursively: a 1-member root
        // holding a 1-member group sheds the outer layer, the inner group stays
        const nestedOne = {
            conditions: [{ conditions: [cond] }],
        };
        expect(FilterUtility.Simplify(nestedOne)).toEqual({ conditions: [cond] });
        // round-trip: ToDefinition(Simplify(x)) matches like x for every item
        const wrapper = { join: FilterJoinType.OR, conditions: [cond] };
        for (const person of staff) {
            expect(FilterUtility.MatchFilter(person, wrapper)).toEqual(FilterUtility.MatchFilter(person, FilterUtility.ToDefinition(FilterUtility.Simplify(wrapper))));
        }
    });
});
//# sourceMappingURL=FilterUtility.spec.js.map