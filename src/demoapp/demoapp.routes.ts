import { Routes } from '@angular/router';
import { Home } from './demoapp.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';

export const DemoAppRoutes: Routes = [
  { path: '', component: Home },
  { path: 'kmp-demo', component: KmpDemoComponent },
  { path: 'binarytree-demo', component: BinarytreeDemoComponent },
  { path: 'sortalg-demo', component: SortalgorithmDemoComponent },
  { path: 'list-demo', component: ListDemoComponent },
  { path: 'tree-demo', component: TreeDemoComponent },
  { path: 'graph-demo', component: GraphDemoComponent },
  { path: 'subject-demo', component: SubjectDemoComponent },
];

