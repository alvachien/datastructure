# TypeScript Library for Data Structure, Algorithms and Utilities
## INTRODUCTION
This project is target to build a library (abbrv: lib) for Data Structures and algorithms. 

- The Data Structure part, including List, Tree, Graph, and others. 
- The Algorithm part, including sorting, searching and others. 
- The Utility part, including string replacement, reading text from HTML element, etc.

The library written with TypeScript.

## HOW TO USE
To use this library in your package, simply run following NPM command:

`npm install actslib --save` 

to add this library into your own topic.

Code snippet 1: show the way to use the Matrix:

```javascript
import { Matrix, MatrixPosIntf } from 'actslib';
let matrix: Matrix = new Matrix(10, 10);
let arpos = matrix.getSlashOutputPos();
```

Code snippet 2: show the way to use the Quick-Sorting algorithm:

```javascript
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
Unit test is the mechanism to ensure the quality. It was supported by using Karam.

Run 'npm test' to trigger the unit tests.


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
Interface **IStack** and **IQueue** defines the generic operations for Stack and Queue respectively.

- Class **SequenceStack** implements the Sequence Stack.
- Class **LinkStack** implements the Link Stack.

#### TREE
Interface **ITree** defines the generic operations and attributes supported by Tree.

Interface **IBinaryTree** define the generic operations and attributes for Binary Tree.

- Class **BinaryTree** implements the Binary Tree.
- Class **BinarySearchTree** implements the Binary Search Tree.
- Class **BinaryThreadTree** implements the Binary Thread Tree.
- More to come.

#### GRAPH
Interface **IGraph** defines the generic operations and attributes supported by Graph, such as DFS, BFS, and so on.

Interface **IGraphVertex** defines the interface for Vertex in the graph.

Interface **IGraphEdge** defines the interface for the Edge in the graph.

- Class **Graph** defines the implementation for the Graph with Adjace Matrix.
- Class **GraphAdjaceList** defines the implementation for the Graph with Adjact List.
- More to come.

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
- The subject **Formula** provides the defintion of the formula.
- More to come.


### PROGRESS
The progress of the project shown in the table below.


#|Content|Status|UT Status|Comment
----:|:----|:-----|:-----|:-----
1|**SequenceList**|**Finished**|**Passed**|Question left: search?
2|**LinkList**|**Finished**|**Passed**|Question left: search?
3|**SequenceStack**|**In Process**|**Passed**|Question left: search?
4|**Matrix**|**Finished**|**Passed**|Question left: search?
5|**Set**|**Finished**|**2 Cases failed**|Question left: search?
6|**SequenceQueue**|**Finished**|**Passed**|Question left: search?
7|**PriorityQueue**|**Finished**|**Passed**|Question left: search?
8|**Dictionary**|**Finished**|**Passed**|Question left: search?
10|**Graph**|**In Process**|**In Process**|Question left: how to demonstrate the Graph for demo?
11|**Graph with Adjace List**|**In Process**|**In Process**|Question left: how to demonstrate the Graph for demo?
12|Binary Search Tree|n/a|n/a|Not started yet
13|B Tree|n/a|n/a|Not started yet|
14|Red Black Tree|n/a|n/a|Not started yet|
15|Strassen Algorithm|n/a|n/a|Not started yet|
16|Birthday Theory|n/a|n/a|Not started yet|
17|Ball and Box|n/a|n/a|Not started yet|
18|Hire on-line|n/a|n/a|Not started yet|
19|Priority Queue|n/a|n/a|Not started yet|
20|Hash algorithms|n/a|n/a|Not started yet|
21|van Emde Boas Tree|n/a|n/a|Not started yet|
22|Kruskal Algorithm|n/a|n/a|Not started yet|
23|Prim Algorithm|n/a|n/a|Not started yet
24|Bellman-Ford Algorithm|n/a|n/a|Not started yet|
25|Dijkstra Algorithm|n/a|n/a|Not started yet|
26|Floyd-Warshall Algorithm|n/a|n/a|Not started yet|
27|Radix sort|n/a|n/a|Not started yet|
28|Bucket sort|n/a|n/a|Not started yet|
40|Formula|**In Process**|n/a|n/a|


# CONTRIBUTORS
- **Alva Chien(Hongjun Qian) | 钱红俊** Contact me via Mailbox: alvachien@163.com if necessary;
- **Lily Yao**

# Licence
MIT
