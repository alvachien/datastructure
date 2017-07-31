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

  onCalc(): void {
    const insTree: BinaryTree<number> = new BinaryTree<number>();
    insTree.InsertNode(null, 1);
    const lr1: BinaryTreeNode<number> = insTree.InsertNode(insTree.Root, 2);
    const lr2: BinaryTreeNode<number> = insTree.InsertNode(insTree.Root, 3);
    insTree.InsertNode(lr1, 10);
    insTree.InsertNode(lr2, 11);
    insTree.InsertNode(lr2, 12);

    const arNodes = insTree.PreorderTraversal();
    this.DetailSteps = 'Preorder traverse: ';
    for (const arn of arNodes) {
      this.DetailSteps += arn.Data.toString() + '; ';
    }
    this.DetailSteps += '\n';

    const arnodes2 = insTree.InorderTraversal();
    this.DetailSteps += '\nInorder traverse: ';
    for (const arn of arnodes2) {
      this.DetailSteps += arn.Data.toString() + '; ';
    }
    this.DetailSteps += '\n';

    const arnodes3 = insTree.PostorderTraversal();
    this.DetailSteps += '\nPostorder traverse: ';
    for (const arn of arnodes3) {
      this.DetailSteps += arn.Data.toString() + '; ';
    }
    this.DetailSteps += '\n';
  }
}
