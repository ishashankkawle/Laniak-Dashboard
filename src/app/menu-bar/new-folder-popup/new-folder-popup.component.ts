import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../services/datastore.service';
import { FolderService } from '../../../services/folder-service.service';
import { fpCreationResponse } from '../../../Models/fpCreationResponse';

@Component({
  selector: 'app-new-folder-popup',
  templateUrl: './new-folder-popup.component.html',
  styleUrls: ['./new-folder-popup.component.css']
})
export class NewFolderPopupComponent implements OnInit {

  folderName : string

  constructor(public dialogRef: MatDialogRef<NewFolderPopupComponent>, public datastoreService : DatastoreService, private folderService : FolderService) { }

  ngOnInit() {
  }

  onFolderCreate(): void
  {
    this.dialogRef.close();
    this.folderService.createFolder(this.folderName).subscribe((data : fpCreationResponse) => this.updateDisplayValues(data))
  }

  updateDisplayValues(data : fpCreationResponse)
  {
    this.folderService.addFolderInFolderList(this.folderName)
  }
}
