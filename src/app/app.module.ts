import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, DemoAppOnPush, Home } from './app.component';
import { PeopleDatabase } from './table-demo/people-database';
import { MY_APP_ROUTES } from './app.routes';
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
import { TableHeaderDemo } from './table-demo/table-header-demo';
import { KmpDemoComponent } from './kmp-demo/kmp-demo.component';
import { ExpansionDemoComponent } from './expansion-demo/expansion-demo.component';
import { BaselineDemoComponent } from './baseline-demo/baseline-demo.component';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { ContentElementDialog, DialogDemoComponent, IFrameDialog, JazzDialog } from './dialog-demo/dialog-demo.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';

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

@NgModule({
  declarations: [
    Home,
    DemoAppOnPush,
    AppComponent,
    KmpDemoComponent,
    ExpansionDemoComponent,
    BaselineDemoComponent,
    TableDemoComponent,
    TableHeaderDemo,
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    DialogDemoComponent,
    StyleDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(MY_APP_ROUTES),
    DSMaterialModule,
  ],
  providers: [
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
    PeopleDatabase
  ],
  entryComponents: [
    AppComponent,
    JazzDialog,
    ContentElementDialog,
    IFrameDialog,
    // RotiniPanel,
    // ScienceJoke,
    // SpagettiPanel,
  ]
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}
