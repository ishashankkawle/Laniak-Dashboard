import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../services/datastore.service';

@Component({
  selector: 'app-open-page-popup',
  templateUrl: './open-page-popup.component.html',
  styleUrls: ['./open-page-popup.component.css']
})
export class OpenPagePopupComponent implements OnInit {

  SelectedPage : string;
  PageList : string[] 

  constructor(public dialogRef: MatDialogRef<OpenPagePopupComponent>, public datastoreService : DatastoreService) { }

  ngOnInit() 
  {
    this.PageList = this.datastoreService.PageList
  }

  onPageClicked(page : string):void
  {
    this.datastoreService.setPage(page); 
  }

  onPageSelect(): void
  {
    this.dialogRef.close();
    // Refresh PageList[] in dataservice.
  }
}
