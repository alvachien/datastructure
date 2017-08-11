import { Component, OnInit } from '@angular/core';
import { MergeSort, QuickSort, BubbleSort, InsertionSort, HeapSort, CountingSort } from '../../lib/model';
import { MdSelectChange } from '@angular/material';

@Component({
  selector: 'app-sortalgorithm-demo',
  templateUrl: './sortalgorithm-demo.component.html',
  styleUrls: ['./sortalgorithm-demo.component.scss']
})
export class SortalgorithmDemoComponent implements OnInit {

  AfterSort: string;
  currentAlgor: string;
  maxnumber = 100;
  BeforeSort: string;
  arrayForSort: number[] = [];
  tmeSpent = 0;

  algorithms = [
    { value: 'quicksort', viewValue: 'Quick Sort' },
    { value: 'bubblesort', viewValue: 'Bubble Sort' },
    { value: 'insertsort', viewValue: 'Insert Sort' },
    { value: 'mergesort', viewValue: 'Merge Sort' },
    { value: 'heapsort', viewValue: 'Heap Sort' },
    { value: 'countsort', viewValue: 'Count Sort'},
  ];

  constructor() {
    this.currentAlgor = 'quicksort';
  }

  ngOnInit() {
  }

  onGenerate(): void {
    if (this.maxnumber <= 1) {
      return;
    }

    this.BeforeSort = '';
    this.arrayForSort = [];
    for (let i = 0; i < this.maxnumber; i++) {
      // parseInt(Math.random() * 1000, 10) + 1;
      // Math.floor(Math.random() * 10000) + 1;
      this.arrayForSort.push(Math.ceil(Math.random() * 2 * this.maxnumber));
    }
    for (let i = 0; i < this.maxnumber; i++) {
      this.BeforeSort += this.arrayForSort[i] + '; ';
    }
  }

  onSort(): void {
    if (this.arrayForSort.length <= 1) {
      return;
    }

    // Sort use QuickSort
    const start = new Date().getTime();
    if (this.currentAlgor === 'quicksort') {
      QuickSort(this.arrayForSort);
    } else if (this.currentAlgor === 'bubblesort') {
      BubbleSort(this.arrayForSort);
    } else if (this.currentAlgor === 'insertsort') {
      InsertionSort(this.arrayForSort);
    } else if (this.currentAlgor === 'mergesort') {
      MergeSort(this.arrayForSort);
    } else if (this.currentAlgor === 'heapsort') {
      HeapSort(this.arrayForSort);
    } else if (this.currentAlgor === 'countsort') {
      CountingSort(this.arrayForSort);
    }

    const end = new Date().getTime();
    this.tmeSpent = (end - start);
    // this.DetailSteps = 'Sorted after Sort ' + (end - start).toString() + ' ms : \n';
    this.AfterSort = '';
    for (let i = 0; i < this.maxnumber; i++) {
      this.AfterSort += this.arrayForSort[i] + '; ';
    }
  }
}
