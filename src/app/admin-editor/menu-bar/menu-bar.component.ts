import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../services/datastore.service';
import {MatDialog} from '@angular/material';
import { NewPagePopupComponent } from '../new-page-popup/new-page-popup.component';
import { FolderListComponent } from '../folder-list/folder-list.component';
import { FolderService } from 'src/services/folder-service.service';
import { PageService } from 'src/services/page-service.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit 
{
  folderComp: FolderListComponent;
  constructor(private datastoreService : DatastoreService,public dialog : MatDialog , private folderService : FolderService , private pageService : PageService) 
  { }

  ngOnInit() 
  {}

  newFolderClick(): void
  {
    if(this.datastoreService.getNewFolderPopupStatus()) 
    {
      this.datastoreService.closeNewFolderPopup();
    }
    else
    {
      this.datastoreService.openNewFolderPopup();
    }
  }

  openFolderClick(): void
  {
    if(this.datastoreService.getFolderPopupStatus()) 
    {
      this.datastoreService.closeFolderPopup();
    }
    else
    {
      this.datastoreService.openFolderPopup();
    }
  }

  newPageClick(): void
  {
    if(this.datastoreService.getNewPagePopupStatus()) 
    {
      this.datastoreService.closeNewPagePopup();
    }
    else
    {
      this.datastoreService.openNewPagePopup();
    }
  }

  openPageClick(): void
  {
    if(this.datastoreService.getPagePopupStatus()) 
    {
      this.datastoreService.closePagePopup();
    }
    else
    {
      this.datastoreService.openPagePopup();
    }
  }
}
