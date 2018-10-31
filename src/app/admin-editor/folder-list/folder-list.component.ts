import { Component, OnInit, Inject } from '@angular/core';
import { DatastoreService } from '../../../services/datastore.service';
import { FolderService } from '../../../services/folder-service.service';
import { folderResponse } from '../../../Models/folderResponse';
import { pageResponse } from '../../../Models/pageResponse';
import { PageService } from '../../../services/page-service.service';
import { SharedDataAssets } from 'src/global/shareddata';

@Component({
  selector: 'app-card-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit 
{
  Repo = SharedDataAssets.REPO
  SelectedFolder : string;
  constructor(private datastoreService : DatastoreService, private folderService : FolderService, private pageService : PageService) 
  {
  }

  ngOnInit() 
  { }

  onSelected(folder : string) : void
  {
    this.SelectedFolder  = folder;
    this.datastoreService.setFolder(folder);
    this.datastoreService.PageList = []
    this.pageService.loadPages(this.SelectedFolder).subscribe((data : pageResponse[]) => this.pageService.assignPageList(data))
  }

}
