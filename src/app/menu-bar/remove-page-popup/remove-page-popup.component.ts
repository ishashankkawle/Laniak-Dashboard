import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DatastoreService } from '../../../services/datastore.service';
import { PageService } from '../../../services/page-service.service';
import { EditorService } from '../../../services/editor-service.service';

@Component({
  selector: 'app-remove-page-popup',
  templateUrl: './remove-page-popup.component.html',
  styleUrls: ['./remove-page-popup.component.css']
})
export class RemovePagePopupComponent implements OnInit {

  SelectedPage : string;
  PageList : string[] 

  constructor(public dialogRef: MatDialogRef<RemovePagePopupComponent>, public datastoreService : DatastoreService, public pageService : PageService) { }

  ngOnInit() 
  {
    this.PageList = this.datastoreService.PageList
  }

  onPageClicked(page : string):void
  {
    this.datastoreService.setPage(page)
    this.SelectedPage = page
  }

  onPageDelete(): void
  {
    this.dialogRef.close();
    this.pageService.deletePage(this.SelectedPage).subscribe(()=> this.pageService.removePageFromPageList(this.SelectedPage))
  }
}
