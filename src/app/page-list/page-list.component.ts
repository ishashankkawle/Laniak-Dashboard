import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit 
{
  SelectedPage : string;
  PageList : string[]

  constructor(private datastoreService : DatastoreService)
   { }

  ngOnInit() 
  { 
    this.PageList = this.datastoreService.PageList ;
  }

  onSelected(page : string) : void
  {
    this.SelectedPage = page;
    this.datastoreService.setPage(page);
  }

}
