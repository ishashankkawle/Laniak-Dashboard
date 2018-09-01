import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { PageListComponent } from './page-list/page-list.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { DatastoreService } from '../services/datastore.service';
import { OpenFolderPopupComponent } from './menu-bar/open-folder-popup/open-folder-popup.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatListModule,MatDialogModule,MatButtonModule,MatInputModule} from '@angular/material';
import { NewFolderPopupComponent } from './menu-bar/new-folder-popup/new-folder-popup.component';
import { NewPagePopupComponent } from './menu-bar/new-page-popup/new-page-popup.component';
import { OpenPagePopupComponent } from './menu-bar/open-page-popup/open-page-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    EditorPageComponent,
    PageListComponent,
    FolderListComponent,
    OpenFolderPopupComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    OpenPagePopupComponent
  ],
  entryComponents: [
    OpenFolderPopupComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    OpenPagePopupComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
