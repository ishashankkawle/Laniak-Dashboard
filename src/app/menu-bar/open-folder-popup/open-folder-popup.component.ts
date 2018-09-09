import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { DatastoreService } from '../../../services/datastore.service';
import { FPLoadService } from '../../../services/fp-load.service';
import { fpResponse } from '../../../Models/fpResponse';


@Component({
  selector: 'app-folder-popup',
  templateUrl: './open-folder-popup.component.html',
  styleUrls: ['./open-folder-popup.component.css']
})
export class OpenFolderPopupComponent implements OnInit {

  SelectedFolder : string;
  // Make FolderList Dynamic
  FolderList : string[]
  constructor(public dialogRef: MatDialogRef<OpenFolderPopupComponent>, public datastoreService : DatastoreService, private fpservice : FPLoadService) { }

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
    this.fpservice.loadPages(this.SelectedFolder).subscribe((data : fpResponse[]) => this.fpservice.assignPageList(data))
    }
}
