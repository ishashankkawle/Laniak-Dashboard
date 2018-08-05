import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../services/datastore.service';

@Component({
  selector: 'app-new-folder-popup',
  templateUrl: './new-folder-popup.component.html',
  styleUrls: ['./new-folder-popup.component.css']
})
export class NewFolderPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewFolderPopupComponent>, public datastoreService : DatastoreService) { }

  ngOnInit() {
  }

  onFolderCreate(): void
  {
    this.dialogRef.close();
    // Call github API to create new directory
  }

}
