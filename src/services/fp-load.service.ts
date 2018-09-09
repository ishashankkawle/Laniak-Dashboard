import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { UtilService } from './util.service';
import { fpResponse } from '../Models/fpResponse';
import { DatastoreService } from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class FPLoadService {

  private url: string;

  constructor(private http : HttpClient, private datastoreService : DatastoreService) 
  { 
    this.url = UtilService.generateUrl(SharedDataAssets.BASE_URI , SharedDataAssets.USER_NAME, SharedDataAssets.REPOSITORY_NAME)
  }

  IitialLoading()
  {
    this.loadFolders().subscribe((data : fpResponse[]) => {
      this.assignFolderList(data)
      this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
      this.loadPages(this.datastoreService.CurrentFolder).subscribe((pageList : fpResponse[]) => this.assignPageList(pageList))
    })
  }

  loadFolders()
  {
    return this.http.get<fpResponse[]>( this.url + "/contents/" )
  }

  loadPages(folder : string)
  {
    return this.http.get(this.url + "/contents/" + folder)
  }

  assignPageList(data: fpResponse[])
  {
    data.forEach(element => {
    if (element.type == "file")
    {
      this.datastoreService.PageList.push(element.name)
    }
    });
    this.datastoreService.setPage(this.datastoreService.PageList[0]) 
  }

  assignFolderList(data: fpResponse[])
  {
    data.forEach(element => {
      if (element.type == "dir")
      {
        this.datastoreService.FolderList.push(element.name)
      }
    });
    this.datastoreService.setFolder(this.datastoreService.FolderList[0]) 
  }
}
