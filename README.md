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
- More to come.

### UTILITIES
- The utility **DateUtility** provides some helpful methods on Date part, including days between, serialize/deserialize with string, etc.
- The uitlity **UIUtility** provides some helpful methods operation on HTML element, including add/remove CSS classes, etc.
- The uitlity **StringUtility** provides some helpful methods operation on strings, including check password length, check duplications, etc.
- The uitlity **NumberUtility** provides some helpful methods operation on numbers, including adding prefixes, rounding with specified digitals, etc.
- The utility **EnumUtility** provides helpful methods to operate on TypeScript enums, including parsing and value retrieval, etc.
- The utility **Element** provides a wrapper for HTML elements used by **UIUtility**.

### PROGRESS
The progress of the project shown in the table below. Unit-test status reflects the current `npm test` run (250 specs, 0 failures, 7 pending).

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
31|**StringUtility**|**Finished**|**Passed**|
32|**NumberUtility**|**Finished**|**Passed**|
33|**EnumUtility**|**Finished**|**Passed**|
34|**UIUtility / Element**|**Finished**|**Passed**|
35|B Tree|n/a|n/a|Not started yet
36|Red Black Tree|n/a|n/a|Not started yet
37|Strassen Algorithm|n/a|n/a|Not started yet
38|Birthday Theory|n/a|n/a|Not started yet
39|Ball and Box|n/a|n/a|Not started yet
40|Hire on-line|n/a|n/a|Not started yet
41|van Emde Boas Tree|n/a|n/a|Not started yet
42|Kruskal Algorithm|n/a|n/a|Not started yet
43|Prim Algorithm|n/a|n/a|Not started yet
44|Bellman-Ford Algorithm|n/a|n/a|Not started yet
45|Dijkstra Algorithm|n/a|n/a|Not started yet
46|Floyd-Warshall Algorithm|n/a|n/a|Not started yet
47|Radix sort|n/a|n/a|Not started yet
48|Bucket sort|n/a|n/a|Not started yet


# CONTRIBUTORS

**Alva Chien(Hongjun Qian) | 钱红俊** 

Contact me via Mailbox: alvachien@163.com if necessary;

# Licence
MIT
