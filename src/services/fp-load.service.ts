import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { UtilService } from './util.service';
import { folderResponse } from '../Models/folderResponse';
import { DatastoreService } from './datastore.service';
import { pageResponse } from '../Models/pageResponse';

const CORSOption = {
  headers : new HttpHeaders ({
    'Access-Control-Allow-Origin' : '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FPLoadService {

  private url: string;

  

  constructor(private http : HttpClient, private datastoreService : DatastoreService) 
  { 
    //this.url = UtilService.generateUrl(SharedDataAssets.BASE_URI , SharedDataAssets.PROJECT_ID)
    this.url = SharedDataAssets.BASE_URI
  }

  IitialLoading()
  {
    this.loadFolders().subscribe((data : folderResponse[]) => {
      this.assignFolderList(data)
      this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
      this.loadPages(this.datastoreService.CurrentFolder).subscribe((pageList : pageResponse[]) => this.assignPageList(pageList))
    })
  }

  loadFolders()
  {
    return this.http.get<folderResponse[]>( this.url + "tree" , )
  }

  loadPages(folder : string)
  {
    return this.http.get(this.url + "tree?path=" + folder + "/", CORSOption)
  }

  assignPageList(data: pageResponse[])
  {
    data.forEach(element => {
    if (element.type == "blob")
    {
      this.datastoreService.PageList.push(element.name)
    }
    });
    this.datastoreService.setPage(this.datastoreService.PageList[0]) 
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
