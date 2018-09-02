import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { FolderLoadService } from '../services/folder-load.service';
import {folderResponse} from '../Models/folderResponse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';

  folders : folderResponse[]

  constructor(private datastoreService : DatastoreService, private folderService : FolderLoadService){}
   
  ngOnInit()
  {
    this.folderService.getAllFolders().subscribe((data : folderResponse[]) => this.assignFolderList(data))
  }

  assignFolderList(data: folderResponse[])
  {
    this.folders = data
    data.forEach(element => {
      if (element.type == "dir")
      {
        this.datastoreService.FolderList.push(element.name)
      }
    });
  }
}
