import { Component, OnInit } from '@angular/core';
import { MergeSort, QuickSort, BubbleSort, InsertionSort, HeapSort } from '../../lib/model';
import { MdSelectChange } from '@angular/material';

@Component({
  selector: 'app-sortalgorithm-demo',
  templateUrl: './sortalgorithm-demo.component.html',
  styleUrls: ['./sortalgorithm-demo.component.scss']
})
export class SortalgorithmDemoComponent implements OnInit {

  DetailSteps: string;
  currentAlgor: string;

  algorithms = [
    { value: 'quicksort', viewValue: 'Quick Sort' },
    { value: 'bubblesort', viewValue: 'Bubble Sort' },
    { value: 'insertsort', viewValue: 'Insert Sort' },
    { value: 'mergesort', viewValue: 'Merge Sort' },
    { value: 'heapsort', viewValue: 'Heap Sort' },
  ];

  constructor() {
    this.currentAlgor = 'quicksort';
  }

  ngOnInit() {
  }

  onCalc(): void {
    // Generate the randomize numbers
    const array1: number[] = [];
    const maxamt = 5000;

    for (let i = 0; i < maxamt; i++) {
      //parseInt(Math.random() * 1000, 10) + 1;
      Math.floor(Math.random() * 10000) + 1;
      array1.push(Math.ceil(Math.random() * 10000));
    }

    this.DetailSteps = 'Random generated numbers: \n';
    for (let i = 0; i < maxamt; i++) {
      this.DetailSteps += array1[i] + ';';
    }
    this.DetailSteps += '\n\n';

    // Sort use QuickSort
    const start = new Date().getTime();
    if (this.currentAlgor === 'quicksort') {
      QuickSort(array1);
    } else if (this.currentAlgor === 'bubblesort') {
      BubbleSort(array1);
    } else if (this.currentAlgor === 'insertsort') {
      InsertionSort(array1);
    } else if (this.currentAlgor === 'mergesort') {
      MergeSort(array1);
    } else if (this.currentAlgor === 'heapsort') {
      HeapSort(array1);
    }

    const end = new Date().getTime();
    this.DetailSteps += 'Sorted after Sort ' + (end - start).toString() + ' ms : \n';
    for (let i = 0; i < maxamt; i++) {
      this.DetailSteps += array1[i] + ';';
    }
  }
}
