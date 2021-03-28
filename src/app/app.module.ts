import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatastoreService } from '../services/datastore.service';
import { HttpClientModule } from '@angular/common/http';
import { FolderService } from '../services/folder-service.service';
import { PageService } from '../services/page-service.service';
import { LoginModule } from './login/login.module';
import { AdminEditorModule } from './admin-editor/admin-editor.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreService } from 'src/services/core-service.service';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    AdminEditorModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [DatastoreService,FolderService,PageService,CoreService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
