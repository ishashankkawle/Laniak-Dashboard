import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ComponentMenuComponent } from './component-menu/component-menu.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { PageListComponent } from './page-list/page-list.component';
import { CardListComponent } from './card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ComponentMenuComponent,
    EditorPageComponent,
    PageListComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
