import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { PageListComponent } from './page-list/page-list.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { OpenFolderPopupComponent } from './menu-bar/open-folder-popup/open-folder-popup.component';
import { NewFolderPopupComponent } from './menu-bar/new-folder-popup/new-folder-popup.component';
import { NewPagePopupComponent } from './menu-bar/new-page-popup/new-page-popup.component';
import { OpenPagePopupComponent } from './menu-bar/open-page-popup/open-page-popup.component';
import { RemovePagePopupComponent } from './menu-bar/remove-page-popup/remove-page-popup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { AdminEditorComponent } from './admin-editor.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    AdminEditorComponent,
    MenuBarComponent,
    EditorPageComponent,
    PageListComponent,
    FolderListComponent,
    OpenFolderPopupComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    OpenPagePopupComponent,
    RemovePagePopupComponent
  ],
  entryComponents: [
    OpenFolderPopupComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    OpenPagePopupComponent,
    RemovePagePopupComponent
],
exports: [
  MenuBarComponent,
    EditorPageComponent,
    PageListComponent,
    FolderListComponent,
    OpenFolderPopupComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    OpenPagePopupComponent,
    RemovePagePopupComponent
]
})
export class AdminEditorModule { }
