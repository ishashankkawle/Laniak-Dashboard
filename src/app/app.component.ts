import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { FolderService } from '../services/folder-service.service';
import {folderResponse} from '../Models/folderResponse'
import { pageResponse } from '../Models/pageResponse';
import { PageService } from '../services/page-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';

  folders : folderResponse[]
  pages : pageResponse[]

  constructor(private datastoreService : DatastoreService, private folderService : FolderService, private pageService : PageService){}
   
  ngOnInit()
  {
    this.folderService.loadFolders().subscribe((data : folderResponse[]) => {
      this.folderService.assignFolderList(data)
      this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
      this.pageService.loadPages(this.datastoreService.CurrentFolder).subscribe((pageList : pageResponse[]) => this.pageService.assignPageList(pageList))
    })
  }
}
