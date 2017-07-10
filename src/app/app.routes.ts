import { Routes } from '@angular/router';
import { Home } from './app.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { BaselineDemoComponent } from './baseline-demo/baseline-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

export const MY_APP_ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'kmp-demo', component: KmpDemoComponent },
  { path: 'baseline', component: BaselineDemoComponent },
  { path: 'expansion', component: ExpansionDemoComponent },
  { path: 'table', component: TableDemoComponent },
  { path: 'dialog', component: DialogDemoComponent },
];



