import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoAppComponent, DemoAppOnPush, Home } from './demoapp.component';
import { DemoAppRoutes } from './demoapp.routes';
import {
  FullscreenOverlayContainer,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdTableModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayContainer,
  StyleModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { BinarytreeDemoComponent } from './binarytree-demo/binarytree-demo.component';
import { SortalgorithmDemoComponent } from './sortalgorithm-demo/sortalgorithm-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';
import { TreeDemoComponent } from './tree-demo/tree-demo.component';
import { GraphDemoComponent } from './graph-demo/graph-demo.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
import { D3Service } from 'd3-ng2-service'; // <-- import statement
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  exports: [
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdTableModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdCoreModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSlideToggleModule,
    MdSliderModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule,
    CdkTableModule,
    StyleModule
  ]
})
export class DSMaterialModule { }

// For translate
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// export function createTranslateLoader(http: Http) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    Home,
    DemoAppOnPush,
    DemoAppComponent,
    KmpDemoComponent,
    BinarytreeDemoComponent,
    SortalgorithmDemoComponent,
    ListDemoComponent,
    TreeDemoComponent,
    GraphDemoComponent,
    SubjectDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(DemoAppRoutes),
    DSMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    D3Service,
  ],
  entryComponents: [
    DemoAppComponent,
  ]
  // bootstrap: [DemoAppComponent]
})
export class DemoAppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(DemoAppComponent);
  }
}
