import { Component, OnInit, Inject } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';
import { FPLoadService } from '../../services/fp-load.service';
import { fpResponse } from '../../Models/fpResponse';

@Component({
  selector: 'app-card-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit 
{
  SelectedFolder : string;
  FolderList : string[]
  constructor(private datastoreService : DatastoreService, private fpService : FPLoadService) 
  {
  }

  ngOnInit() 
  {
    this.FolderList = this.datastoreService.FolderList;
  }

  onSelected(folder : string) : void
  {
    this.SelectedFolder  = folder;
    this.datastoreService.setFolder(folder);
    this.datastoreService.PageList = []
    this.fpService.loadPages(this.SelectedFolder).subscribe((data : fpResponse[]) => this.fpService.assignPageList(data))
  }

}
