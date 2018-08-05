import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../services/datastore.service';

@Component({
  selector: 'app-new-page-popup',
  templateUrl: './new-page-popup.component.html',
  styleUrls: ['./new-page-popup.component.css']
})
export class NewPagePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewPagePopupComponent>, public datastoreService : DatastoreService) { }

  ngOnInit() {
  }

  onPageCreate(): void
  {
    this.dialogRef.close();
    //Call Git API to create new md file.
  }
}
