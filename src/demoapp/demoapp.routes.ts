import { Routes } from '@angular/router';
import { Home } from './demoapp.component';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { BaselineDemoComponent } from './baseline-demo/baseline-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';
import { TypographyDemoComponent } from './typography-demo/typography-demo.component';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component';
import { LiveannouncerDemoComponent } from './liveannouncer-demo/liveannouncer-demo.component';
import { OverlayDemoComponent } from './overlay-demo/overlay-demo.component';
import { PortalDemoComponent } from './portal-demo/portal-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';

export const MY_APP_ROUTES: Routes = [
  { path: '', component: Home },
  { path: 'kmp-demo', component: KmpDemoComponent },
  { path: 'baseline', component: BaselineDemoComponent },
  { path: 'expansion', component: ExpansionDemoComponent },
  { path: 'table', component: TableDemoComponent },
  { path: 'dialog', component: DialogDemoComponent },
  { path: 'style', component: StyleDemoComponent },
  { path: 'typography', component: TypographyDemoComponent },
  { path: 'autocomplete', component: AutocompleteDemoComponent },
  { path: 'datepicker', component: DatepickerDemoComponent },
  { path: 'live-announcer', component: LiveannouncerDemoComponent },
  { path: 'overlay', component: OverlayDemoComponent },
  { path: 'portal', component: PortalDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'binarytree-demo', component: BinarytreeDemoComponent }, 
  { path: 'sortalg-demo', component: SortalgorithmDemoComponent }, 
];

