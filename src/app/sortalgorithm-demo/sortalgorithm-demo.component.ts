import { Component, OnInit } from '@angular/core';
import { QuickSort } from '../../lib/model';

@Component({
  selector: 'app-sortalgorithm-demo',
  templateUrl: './sortalgorithm-demo.component.html',
  styleUrls: ['./sortalgorithm-demo.component.scss']
})
export class SortalgorithmDemoComponent implements OnInit {

  DetailSteps: string;

  constructor() { }

  ngOnInit() {
  }

  onCalc(): void {
    // Generate the randomize numbers
    let array1: number[] = [];
    for (let i = 0; i < 100; i++) {
      //parseInt(Math.random() * 1000, 10) + 1;
      Math.floor(Math.random() * 1000) + 1;
      array1.push(Math.ceil(Math.random() * 1000));
    }

    this.DetailSteps = "Random generated numbers: \n";
    for (let i = 0; i < 100; i++) {
      this.DetailSteps += array1[i] + ";";
    }
    this.DetailSteps += "\n\n";

    // Sort use QuickSort
    let start = new Date().getTime();
    QuickSort(array1);
    let end = new Date().getTime();
    this.DetailSteps += "Sorted after Quick Sort " + (end-start).toString() + " ms : \n";
    for (let i = 0; i < 100; i++) {
      this.DetailSteps += array1[i] + ";";
    }
  }
}
