import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';
import { EditorService } from '../../services/editor-service.service';
import { PageService } from '../../services/page-service.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit 
{
  SelectedPage : string;

  constructor(private datastoreService : DatastoreService, public editor : EditorService, public pageService : PageService)
   { }

  ngOnInit() 
  { }

  onSelected(page : string) : void
  {
    this.SelectedPage = page;
    this.datastoreService.setPage(page);
    this.pageService.loadRaw(this.SelectedPage).subscribe((data : string) => this.editor.loadTextOnEditor(data))
  }

}
