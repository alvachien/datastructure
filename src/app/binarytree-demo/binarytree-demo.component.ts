import { Component, OnInit } from '@angular/core';
import { BinaryTree, BinaryTreeNode } from '../../lib/model';

@Component({
  selector: 'app-binarytree-demo',
  templateUrl: './binarytree-demo.component.html',
  styleUrls: ['./binarytree-demo.component.scss']
})
export class BinarytreeDemoComponent implements OnInit {

  DetailSteps: string;

  constructor() { }

  ngOnInit() {
  }

  onCalc() : void {
    let insTree: BinaryTree<number> = new BinaryTree<number>();
    insTree.InsertNode(null, 1);
    let lr1: BinaryTreeNode<number> = insTree.InsertNode(insTree.Root, 2);
    let lr2: BinaryTreeNode<number> = insTree.InsertNode(insTree.Root, 3);
    insTree.InsertNode(lr1, 10);
    insTree.InsertNode(lr2, 11);
    insTree.InsertNode(lr2, 12);

    let arNodes = insTree.PreorderTraversal();
    this.DetailSteps = "Preorder traverse: ";
    for(let arn of arNodes) {
      this.DetailSteps += arn.Data.toString() + "; ";
    }
    this.DetailSteps += "\n";

    let arnodes2 = insTree.InorderTraversal();
    this.DetailSteps += "\nInorder traverse: ";
    for(let arn of arnodes2) {
      this.DetailSteps += arn.Data.toString() + "; ";
    }
    this.DetailSteps += "\n";

    let arnodes3 = insTree.PostorderTraversal();
    this.DetailSteps += "\nPostorder traverse: ";
    for(let arn of arnodes3) {
      this.DetailSteps += arn.Data.toString() + "; ";
    }
    this.DetailSteps += "\n";
  }
}
