# TypeScript Library for Data Structure and Algorithm
## INTRODUCTION
This project is target to build a library (abbrv: lib) for Data Structures and algorithms. 

- The Data Structure part, including List, Tree, Graph, and others. 
- The Algorithm part, including sorting, searching and others. 

The library written with TypeScript.

## HOW TO USE
Use command 

`npm install actslib --save` 

to add this library into your own topic.

A code example below show the way to use the Matrix:

`import { Matrix, MatrixPosInf } from 'actslib';`

`let matrix: Matrix = new Matrix(10, 10);`

`let arpos = matrix.getSlashOutputPos();`


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

### UNIT TEST
Unit test is supported by using Karam.

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

No|Content|Status|Comment
----:|:----|:-----|:-----
1|Graph|In Process|Question left: how to demonstrate the Graph for demo?
2|Binary Search Tree|Not started yet|
3|B Tree|Not started yet|
4|Red Black Tree|Not started yet|
5|Strassen Algorithm|Not started yet|
6|Birthday Theory|Not started yet|
7|Ball and Box|Not started yet|
8|Hire on-line|Not started yet|
9|Priority Queue|Not started yet|
10|Hash algorithms|Not started yet|
11|van Emde Boas Tree|Not started yet|
12|Kruskal Algorithm|Not started yet|
13|Prim Algorithm|Not started yet
14|Bellman-Ford Algorithm|Not started yet|
15|Dijkstra Algorithm|Not started yet|
16|Floyd-Warshall Algorithm|Not started yet|
17|Radix sort|Not started yet|
18|Bucket sort|Not started yet|
19|Formula|In Process||

# CONTRIBUTORS
- **Alva Chien(Hongjun Qian) | 钱红俊** Contact me via Mailbox: alvachien@163.com if necessary;
- **Lily Yao**

# Licence
MIT
