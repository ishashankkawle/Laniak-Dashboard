import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { DatastoreService } from '../../../../services/datastore.service';
import { FolderService } from '../../../../services/folder-service.service';
import { folderResponse } from '../../../../Models/folderResponse';
import { pageResponse } from '../../../../Models/pageResponse';
import { PageService } from '../../../../services/page-service.service';


@Component({
  selector: 'app-folder-popup',
  templateUrl: './open-folder-popup.component.html',
  styleUrls: ['./open-folder-popup.component.css']
})
export class OpenFolderPopupComponent implements OnInit {

  SelectedFolder : string;
  // Make FolderList Dynamic
  FolderList : string[]
  constructor(public dialogRef: MatDialogRef<OpenFolderPopupComponent>, public datastoreService : DatastoreService, private pageservice : PageService) { }

  ngOnInit() 
  {
    this.FolderList = this.datastoreService.FolderList
  }

  onFolderClicked(folder : string): void
  {
    this.datastoreService.setFolder(folder)
    this.SelectedFolder = folder
  }

  onFolderSelect(): void
  {
    this.dialogRef.close();
    this.datastoreService.PageList = []
    this.pageservice.loadPages(this.SelectedFolder).subscribe((data : pageResponse[]) => this.pageservice.assignPageList(data))
    }
}
