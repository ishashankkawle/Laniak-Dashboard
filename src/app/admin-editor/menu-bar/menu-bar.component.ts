import { Component, OnInit } from '@angular/core';
import { SharedDataAssets } from '../../../global/shareddata';
import { DatastoreService } from '../../../services/datastore.service';
import { OpenFolderPopupComponent } from './open-folder-popup/open-folder-popup.component';
import {MatDialog} from '@angular/material';
import { NewFolderPopupComponent } from './new-folder-popup/new-folder-popup.component';
import { NewPagePopupComponent } from './new-page-popup/new-page-popup.component';
import { OpenPagePopupComponent } from './open-page-popup/open-page-popup.component';
import { RemovePagePopupComponent } from './remove-page-popup/remove-page-popup.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit 
{
  constructor(private datastoreService : DatastoreService,public dialog : MatDialog) 
  { }

  ngOnInit() 
  {}

  newFolderClick(): void
  {
    let dialogRef = this.dialog.open(NewFolderPopupComponent,{width: '500px'});
  }

  openFolderClick(): void
  {
    let dialogRef = this.dialog.open(OpenFolderPopupComponent,{width: '500px'});

    // Un-comment following to add additional functionality 
    // dialogRef.afterClosed().subscribe(result => {});
  }

  newPageClick(): void
  {
    let dialogRef = this.dialog.open(NewPagePopupComponent,{width: '500px'});
  }

  openPageClick(): void
  {
    let dialogRef = this.dialog.open(OpenPagePopupComponent,{width: '500px'});

    // Un-comment following to add additional functionality 
    // dialogRef.afterClosed().subscribe(result => {});
  }

  removePageClick(): void
  {
    let dialogRef = this.dialog.open(RemovePagePopupComponent,{width: '500px'});

    // Un-comment following to add additional functionality 
    // dialogRef.afterClosed().subscribe(result => {});
  }
}
