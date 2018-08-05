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
  FolderList : string[] = [
    "Folder 1",
    "Folder 2",
    "Folder 3",
    "Folder 4",
    "Folder 5",
    "Folder 6",
    "Folder 7",
    "Folder 8",
    "Folder 9",
    "Folder 10"
  ];

  constructor(public dialogRef: MatDialogRef<OpenFolderPopupComponent>, public datastoreService : DatastoreService) { }

  ngOnInit() {
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
