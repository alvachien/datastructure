# TypeScript Library for Data Structure and Algorithm
## INTRUDCTION
This project is all about building a lib for Data Structures and algorithms. 

- The Data Structure part, including List, Tree, Graph, and others. 
- The Algorithm part, including sorting, searching and others. 

The library written with TypeScript.

The library which I written actually based the understanding when reading the books below:
- Introduction to Algorithms, Third Edition, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
- 数据结构 用面向对象方法与C++描述， Tsinghua University Press
- Others

## CONTENT
The project was generated using [Angular-CLI](https://github.com/angular/angular-cli), which can be started directly as HTTP server to run the demo app for the testing purpose.

Folder **lib** (src\lib) contains two sub folders, and it has been exported via index.ts directly.

Folder **app** (src\app) contains a demo application which used to demonstrate the demos, it is a web app using [Angular Material](https://material.angular.io).

### DEMO APP
To run the demo app, you need download or clone this repository, and then run the following commands in sequence:
- npm install
- ng serve

### LIST
Interface **IList** defines the generic operations supported by List.

- Class **SequenceList** implements the Sequence List.
- Class **LinkList** implements the Link List.
- Class **StaticLinkList** implements the static link list.

### STACK AND QUEUE
Interface **IStack** and **IQueue** defines the generic operations for Stack and Queue respectively.

- Class **SequenceStack** implements the Sequence Stack.
- Class **LinkStack** implements the Link Stack.

### TREE
Interface **ITree** defines the generic operations and attributes supported by Tree.

Interface **IBinaryTree** define the generic operations and attributes for Binary Tree.

- Class **BinaryTree** implements the Binary Tree.
- Class **BinaryThreadTree** implements the Binary Thread Tree.

TBD.

### GRAPH
Interface **IGraph** defines the generic operations and attributes supported by Graph.

TBD.

### ALGORITHM
- The algorithm **KMP** which offer the functionality to search source string from the target string.
- The algorithm **InsertionSort** using the insertion sort upon the array.
- The algorithm **BinaryInsertSort** based on **InsertionSort** but improves the way to search for suitable position to insert.
- The algorithm **BubbleSort** using the bubble-sort on the array: pickup the biggest and move it to the tail of the array.
- The algorithm **QuickSort** based on **BubbleSort** but use recursive way to handle two parts of the array.
- The algorithm **SelectionSort** choose the min (or max) from the unsorted part and append it to the sorted part.
- The algorithm **CountingSort** give an item a n-th position because there are n-1 item less (or bigger) than it. This algorithm suits only for number based array.
- The algorithm **MergeSort** uses divide and consquer methology which try to split the arry and merge it to final results.
- TBD 

### OBJECT
- The object **Matrix** defines the matrix object.
- The object **Polynomial** defines the polynomial object.
- The object **SparseMatrix** defines the Sparse Matrix object.
- TBD

# AUTHOR
**Alva Chien | 钱红俊**

A programmer, and a certificated Advanced Photographer.  
 
Contact me via:

1. Mailbox: alvachien@163.com. Or,
2. [Check my flickr](http://www.flickr.com/photos/alvachien). Or,
3. [Visit my website](http://www.alvachien.com)

# Licence
MIT
