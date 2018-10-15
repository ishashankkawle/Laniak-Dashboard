import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '../../../../../node_modules/@angular/material/dialog';
import { DatastoreService } from '../../../../services/datastore.service';
import { PageService } from '../../../../services/page-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { EditorService } from '../../../../services/editor-service.service';

@Component({
  selector: 'app-open-page-popup',
  templateUrl: './open-page-popup.component.html',
  styleUrls: ['./open-page-popup.component.css']
})
export class OpenPagePopupComponent implements OnInit {

  SelectedPage : string;
  PageList : string[] 

  constructor(public dialogRef: MatDialogRef<OpenPagePopupComponent>, public datastoreService : DatastoreService, public pageService : PageService, public editor : EditorService) { }

  ngOnInit() 
  {
    this.PageList = this.datastoreService.PageList
  }

  onPageClicked(page : string):void
  {
    this.datastoreService.setPage(page)
    this.SelectedPage = page
  }

  onPageSelect(): void
  {
    this.dialogRef.close();
    this.pageService.loadRaw(this.SelectedPage).subscribe((data : string) => this.editor.loadTextOnEditor(data))
  }
}
