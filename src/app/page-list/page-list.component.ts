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
  PageList : string[] = ["Page 1", 
                          "Page 2",
                          "Page 3",
                          "Page 4",
                          "Page 5",
                          "Page 6",
                          "Page 7",
                          "Page 8",
                          "Page 9",
                          "Page 10",
                          "Page 11"];

  constructor(private datastoreService : DatastoreService)
   { }

  ngOnInit() 
  { 
    this.datastoreService.PageList = this.PageList;
  }

  onSelected(page : string) : void
  {
    this.SelectedPage = page;
    this.datastoreService.setPage(page);
  }

}
