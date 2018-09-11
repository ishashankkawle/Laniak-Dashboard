import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { folderResponse } from '../Models/folderResponse';
import { DatastoreService } from './datastore.service';
import { CoreService } from './core-service.service';

@Injectable({
  providedIn: 'root'
})
export class FolderService extends CoreService {


  constructor(private http : HttpClient, private datastoreService : DatastoreService) 
  { 
    super()
  }

  loadFolders()
  {
    return this.http.get<folderResponse[]>( this.url + "tree" , this.HeaderOptions)
  }

  assignFolderList(data: folderResponse[])
  {
    data.forEach(element => {
      if (element.type == "tree")
      {
        this.datastoreService.FolderList.push(element.name)
      }
    });
    this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
  }
}
