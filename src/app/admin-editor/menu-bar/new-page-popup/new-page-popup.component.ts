import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../../services/datastore.service';
import { PageService } from '../../../../services/page-service.service';
import { fpCreationResponse } from '../../../../Models/fpCreationResponse';

@Component({
  selector: 'app-new-page-popup',
  templateUrl: './new-page-popup.component.html',
  styleUrls: ['./new-page-popup.component.css']
})
export class NewPagePopupComponent implements OnInit {

  pageName : string = ""

  constructor(public dialogRef: MatDialogRef<NewPagePopupComponent>, public datastoreService : DatastoreService,private  pageService : PageService) { }

  ngOnInit() {
  }

  onPageCreate(): void
  {
    this.dialogRef.close();
    this.pageService.createPage(this.pageName).subscribe((data:fpCreationResponse) => this.updateDisplayValues(data) )
  }

  updateDisplayValues(data : fpCreationResponse)
  {
    this.pageService.addPageInPageList(this.pageName)
  }
}
