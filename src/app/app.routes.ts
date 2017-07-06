import { Routes } from '@angular/router';
import { Home } from './app.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';

export const MY_APP_ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'kmp-demo', component: KmpDemoComponent }
];



