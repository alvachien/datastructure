[![Build and Test](https://github.com/alvachien/datastructure/actions/workflows/build-test.yml/badge.svg)](https://github.com/alvachien/datastructure/actions/workflows/build-test.yml)

# TypeScript Library for Data Structure, Algorithms and Utilities
## INTRODUCTION
This project is target to build a library (abbrv: lib) for Data Structures, algorithms and Utilities. 

- The Data Structure part, including List, Tree, Graph, and others. 
- The Algorithm part, including sorting, searching and others. 
- The Utility part, including finance methods, string utility, number utility, HTML element related methods, etc.

The library written with TypeScript.


## HOW TO USE
To use this library in your package, simply run following NPM command:

`npm install actslib --save` 

to add this library into your own topic.

Code snippet 1: calculate the FV (further value) with interest rate 1% and 12 periods:

```typescript
import { FinanceMethods } from 'actslib';

const rst = FinanceMethods.FV(100, 0.01, 12);
expect(rst).toEqual(112.68); // FV is 112.68
```


Code snippet 2: show the way to use the Matrix:

```typescript
import { Matrix, MatrixPosIntf } from 'actslib';

let matrix: Matrix = new Matrix(10, 10);
let arpos = matrix.getSlashOutputPos();
```

Code snippet 3: show the way to use the Quick-Sorting algorithm:

```typescript
import { QuickSort } from 'actslib';

let arArray: number[] = [10, 3, 26, 1, 35];
QuickSort(arArray);
```

Code snippet 4: show the way to filter a list with a nested filter definition:

```typescript
import { FilterUtility, FilterJoinType, FilterOperation } from 'actslib';

const staff = [
  { name: 'Alice', age: 30, department: 'Engineering' },
  { name: 'Bob', age: 25, department: 'Sales' },
  { name: 'Alicia', age: 35 },
];

// age BETWEEN 25 AND 30 AND (department BEGINSWITH 'Eng' OR name = 'Bob')
const result = FilterUtility.FilterList(staff, {
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
});
// result: Alice and Bob
```

Code snippet 5: show the three shapes a filter can take (the `FilterRoot` taxonomy):

```typescript
import { FilterUtility, FilterJoinType, FilterOperation, FilterRoot, IFilterCondition } from 'actslib';

const c: IFilterCondition = { property: 'age', operation: FilterOperation.GreaterThan, lowValue: 26 };

const empty: FilterRoot = { conditions: [] };  // case 0: matches everything
const oneNode: FilterRoot = c;                 // case 1: bare condition, no wrapper needed
const tree: FilterRoot = {                     // case 2: group tree, mixed members allowed
  join: FilterJoinType.AND,
  conditions: [c, { join: FilterJoinType.OR, conditions: [c, c] }],
};

// FilterList / MatchFilter accept all three; case 1 matches identically to
// its 1-member wrapper { conditions: [c] } — ToDefinition / Simplify convert
// between the two spellings. (staff defined in snippet 4)
const result = FilterUtility.FilterList(staff, oneNode);
```



## REFERENCE
The library in the project actually based the understanding when learning the books below:
- Introduction to Algorithms, Third Edition, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
- Programming Pearls, by Jon Bentley
- More Programming Pearls, By Jon Benley
- 数据结构 用面向对象方法与C++描述， Tsinghua University Press
- 编程之美, Publishing House of Electronics Industry
- More to come.


## CONTENT
Folder **lib** (src\lib) contains the kernel part of the whole library. It consists with several sub folders, and it has been exported via index.ts respectively.
Folder **dist** (dist) contains the compiled js files.

### UNIT TESTS
Unit tests are the mechanism to ensure the quality. They are run in **Node** through [jasmine](https://jasmine.github.io/) (config in `jasmine.json`, spec dir `src/test`), with [tsx](https://github.com/privatenumber/tsx) providing on-the-fly TypeScript transpilation via `node --import tsx`.

Run 'npm test' to trigger the unit tests.

```bash
npm test
```

To run a single spec file, pass a filter matching the top-level `describe()` name:

```bash
node --import tsx ./node_modules/jasmine/bin/jasmine.js --config=jasmine.json --filter=BinaryTree
```

> Note: `npm test` transpiles via tsx and does NOT type-check. Run `npm run build` (which runs `tsc`) separately to catch type errors.
> jasmine 7 rejects duplicate top-level `describe()` names, so each spec file's top suite name must be unique.


### DEMO APP   

Demo app was located in another [repository](https://www.github.com/alvachien/datastructure-demo/).

Try the demo app online now via a single [click](https://alvachien.github.io/datastructure-demo/).


### DATA STRUCTURE    
#### LIST   
Interface **IList** defines the generic operations supported by List.

- Class **SequenceList** implements the Sequence List.
- Class **LinkList** implements the Link List.
- Class **StaticLinkList** implements the static link list.

#### STACK AND QUEUE   
Interface **IStack** and **IQueue** define the generic operations for Stack and Queue respectively.

- Class **SequenceStack** implements the Sequence Stack.
- Class **LinkStack** implements the Link Stack.
- Class **SequenceQueue** implements the Sequence Queue.
  
#### TREE    
Interface **ITree** defines the generic operations and attributes supported by Tree.

Interface **IBinaryTree** define the generic operations and attributes for Binary Tree.

- Class **BinaryTree** implements the Binary Tree.
- Class **BinarySearchTree** implements the Binary Search Tree.
- Class **BinaryThreadTree** implements the Binary Thread Tree.
- Class **AVLTree** implements the self-balancing AVL Tree (extends **BinarySearchTree**).
- Class **HuffmanTree** implements the Huffman (optimal) coding Tree.
- More to come.

#### GRAPH   
Interface **IGraph** defines the generic operations and attributes supported by Graph, such as DFS, BFS, and so on.

Interface **IGraphVertex** defines the interface for Vertex in the graph.

Interface **IGraphEdge** defines the interface for the Edge in the graph.

- Class **Graph** defines the implementation for the Graph with Adjace Matrix.
- Class **GraphAdjaceList** defines the implementation for the Graph with Adjact List.
- More to come.

#### SET, DICTIONARY AND HASH TABLE
- Class **Set** implements the generic Set data structure.
- Class **Dictionary** implements the Dictionary (key-value) structure.
- Class **HashTable** implements the Hash Table.

### ALGORITHM    
- The algorithm **KMP** which offer the functionality to search source string from the target string.
- The algorithm **InsertionSort** using the insertion sort upon the array.
- The algorithm **BinaryInsertSort** based on **InsertionSort** but improves the way to search for suitable position to insert.
- The algorithm **BubbleSort** using the bubble-sort on the array: pickup the biggest and move it to the tail of the array.
- The algorithm **QuickSort** based on **BubbleSort** but use recursive way to handle two parts of the array.
- The algorithm **SelectionSort** choose the min (or max) from the unsorted part and append it to the sorted part.
- The algorithm **CountingSort** give an item a n-th position because there are n-1 item less (or bigger) than it. This algorithm suits only for number based array.
- The algorithm **MergeSort** uses divide and consquer methology which try to split the arry and merge it to final results.
- The algorithm **HeapSort** try to build maximum (or minimum) heap for the unsorted part, and fetch the root node to the sorted part.
- More to come.

### SUBJECT
- The subject **MaximumSubArray** try to fetch out the maxium sub array from an existing array.
- The subject **PriorityQueue** try to define a priority queue which can be simulated the real scenario.
- The subject **Matrix** defines the matrix object.
- The subject **Polynomial** defines the polynomial object.
- The subject **SparseMatrix** defines the Sparse Matrix object.
- The subject **ChineseChessGeneralsProblem** provides several solutions to the Generals issue in Chinese Chess.
- The subject **PanCakeSort** provides the solution to sort the pan cakes.
- The subject **Formula** provides the Math Expression Parser.
- The subject **RPN** provides the support of Reverse Polish Notation.
- The subject **FinanceMethods** provides the support of methods used in Finance area, including Further Value, Present Value, FV of Annity, etc.
- The subject **BaseConverter** provides the solution to convert numbers between different bases.
- The subject **FisherYatesShuffle** provides the unbiased O(n) Fisher-Yates (Knuth) array shuffling, returning a shuffled copy of the input.
- More to come.

### UTILITIES
- The utility **DateUtility** provides some helpful methods on Date part, including days between, serialize/deserialize with string, etc.
- The uitlity **UIUtility** provides some helpful methods operation on HTML element, including add/remove CSS classes, etc.
- The uitlity **StringUtility** provides some helpful methods operation on strings, including check password length, check duplications, etc.
- The uitlity **NumberUtility** provides some helpful methods operation on numbers, including adding prefixes, rounding with specified digitals, etc.
- The utility **EnumUtility** provides helpful methods to operate on TypeScript enums, including **enumerateKeys** (member names), **EnumerateValues** (member values, numeric-enum reverse mapping stripped) and **IsEnumMember** (membership check, used by **FilterUtility**'s enum validation).
- The utility **Element** provides a wrapper for HTML elements used by **UIUtility**.
- The utility **FilterUtility** provides condition-based filtering over a list. A filter is a search with strict definition: conditions joined by AND / OR, nestable to arbitrary depth (like SQL `a AND (b OR c)`). A whole filter is exactly one of **three shapes** (the `FilterRoot` type):
  - **Case 0 — empty**: `{ conditions: [] }` — matches everything (the cleared-filter state).
  - **Case 1 — one node**: a bare `IFilterCondition`, or equivalently the 1-member group `{ conditions: [c] }` whose `join` is irrelevant — the whole filter is a single condition. **FilterList** / **MatchFilter** accept either spelling (semantics are identical), so case-1 filters can be stored without a wrapper; `ToDefinition` wraps a bare condition into a group, `Simplify` unwraps a 1-member group back to its single member (root only, once).
  - **Case 2 — group tree**: a definition with >= 2 members, nested groups allowed; leaves are conditions, every internal group branches with >= 2 children. A group may mix condition leaves and nested sub-groups side by side.
  Each condition specifies a property, an operation and the value(s); the property kind is detected from its runtime value:
  - **number / date**: `<`, `<=`, `=`, `>=`, `>`, `Between`; a missing number is treated as 0.
  - **string**: all of the above plus `BeginsWith`, `EndsWith`, `Contains` (case-sensitive).
  - Only `Between` examines both `lowValue` and `highValue` (inclusive); the other operations use `lowValue` alone.
  - **enum**: no special handling needed — TypeScript erases enums at runtime, so a numeric-enum property filters as a number and a string-enum property as a string; enum members can be used directly as condition values (e.g. `lowValue: Priority.High`). Set the condition's `enumValues` to the enum object to enable validation: the item's property value and the bound values must be real enum members (so a stray `priority = 7` never matches), while `BeginsWith`/`EndsWith`/`Contains` patterns are exempt from the bound check.

### PROGRESS
The progress of the project shown in the table below. Unit-test status reflects the current `npm test` run (272 specs, 0 failures, 7 pending).

#|Content|Status|UT Status|Comment
----:|:----|:-----|:-----|:-----
1|**SequenceList**|**Finished**|**Passed**|Question left: search?
2|**LinkList**|**Finished**|**Passed**|Question left: search?
3|**StaticLinkList**|**Finished**|**Passed**|
4|**SequenceStack**|**Finished**|**Passed**|Pending: Print, IsExist (xit)
5|**LinkStack**|**Finished**|**Passed**|Pending: Print, IsExist (xit)
6|**SequenceQueue**|**Finished**|**Passed**|Pending: Print, IsExist (xit)
7|**Set**|**Finished**|**Passed**|
8|**Dictionary**|**Finished**|**Passed**|
9|**HashTable**|**Finished**|**Passed**|
10|**Graph** (Adjace Matrix)|**Finished**|**Passed**|Question left: how to demonstrate the Graph for demo?
11|**GraphAdjaceList** (Adjact List)|**Finished**|**Passed**|Question left: how to demonstrate the Graph for demo?
12|**BinaryTree**|**Finished**|**Passed**|
13|**BinarySearchTree**|**Finished**|**Passed**|
14|**BinaryThreadTree**|**Finished**|**Passed**|
15|**AVLTree**|**Finished**|**Passed**|Self-balancing; extends BinarySearchTree
16|**HuffmanTree**|**Finished**|**Passed**|
17|**Matrix**|**Finished**|**Passed**|Question left: search?
18|**SparseMatrix**|**Finished**|**Passed**|
19|**Polynomial**|**Finished**|**Passed**|
20|**PriorityQueue**|**Finished**|**Passed**|Question left: search?
21|**MaximumSubArray**|**Finished**|**Passed**|
22|**ChineseChessGeneralProblem**|**Finished**|**Passed**|
23|**PanCakeSorting**|**Finished**|**Passed**|
24|**BaseConverter**|**Finished**|**Passed**|
25|**Formula**|**Finished**|**Passed**|Formula.evaluate can be used to work out the figures
26|**RPN**|**Finished**|**Passed**|Reverse Polish Notation
27|**FinanceMethods**|**Finished**|**Passed**|Pending: PV of annuity in advance (xit); FV, FVIF, PV, PVIF, FVIFA, PVIFA, PV of ordinary annity, PV of deferred annity, PV of annuity in advance
28|**Algorithm** (sorts + KMP)|**Finished**|**Passed**|InsertionSort, BinaryInsertSort, BubbleSort, QuickSort, SelectionSort, CountingSort, MergeSort, HeapSort, KMP
29|**FakedGuid**|**Finished**|**Passed**|
30|**DateUtility**|**Finished**|**Passed**|
31|**StringUtility**|**Finished**|**Passed**|CheckStringLength, GetPasswordStrengthLevel, hasDuplicatesInStringArray
32|**NumberUtility**|**Finished**|**Passed**|Round2Two, Round2Any, prefixInteger
33|**EnumUtility**|**Finished**|**Passed**|enumerateKeys, EnumerateValues, IsEnumMember (numeric-enum reverse mapping handled)
34|**UIUtility / Element**|**Finished**|**Passed**|
35|**FilterUtility**|**Finished**|**Passed**|Condition-based list filtering with AND/OR nesting, Between, string/number/date operations; bare-condition root (FilterRoot)
36|**FisherYatesShuffle**|**Finished**|**Passed**|Unbiased O(n) shuffle, returns a shuffled copy
37|B Tree|n/a|n/a|Not started yet
38|Red Black Tree|n/a|n/a|Not started yet
39|Strassen Algorithm|n/a|n/a|Not started yet
40|Birthday Theory|n/a|n/a|Not started yet
41|Ball and Box|n/a|n/a|Not started yet
42|Hire on-line|n/a|n/a|Not started yet
43|van Emde Boas Tree|n/a|n/a|Not started yet
44|Kruskal Algorithm|n/a|n/a|Not started yet
45|Prim Algorithm|n/a|n/a|Not started yet
46|Bellman-Ford Algorithm|n/a|n/a|Not started yet
47|Dijkstra Algorithm|n/a|n/a|Not started yet
48|Floyd-Warshall Algorithm|n/a|n/a|Not started yet
49|Radix sort|n/a|n/a|Not started yet
50|Bucket sort|n/a|n/a|Not started yet


# CONTRIBUTORS

**Alva Chien(Hongjun Qian) | 钱红俊** 

Contact me via Mailbox: alvachien@163.com if necessary;

# Licence
MIT
