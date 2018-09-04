import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { DatastoreService } from '../../../services/datastore.service';


@Component({
  selector: 'app-folder-popup',
  templateUrl: './open-folder-popup.component.html',
  styleUrls: ['./open-folder-popup.component.css']
})
export class OpenFolderPopupComponent implements OnInit {

  SelectedFolder : string;
  // Make FolderList Dynamic
  FolderList : string[]
  constructor(public dialogRef: MatDialogRef<OpenFolderPopupComponent>, public datastoreService : DatastoreService) { }

  ngOnInit() 
  {
    this.FolderList = this.datastoreService.FolderList
  }

  onFolderClicked(folder : string):void
  {
    this.datastoreService.setFolder(folder); 
  }

  onFolderSelect(): void
  {
    this.dialogRef.close();
    // Refresh PageList[] in dataservice.
  }
}
