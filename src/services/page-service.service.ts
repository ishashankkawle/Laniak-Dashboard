import { Injectable } from '@angular/core';
import { DatastoreService } from './datastore.service';
import { CoreService } from './core-service.service';
import { HttpClient } from '@angular/common/http';
import { pageResponse } from '../Models/pageResponse';
import { SharedDataAssets } from '../global/shareddata';

@Injectable({
  providedIn: 'root'
})
export class PageService extends CoreService {

  constructor(private http : HttpClient, private datastoreService : DatastoreService) 
  {
    super()
  }

  loadPages(folder : string)
  {
    return this.http.get(this.url + "tree?path=" + folder + "/", this.HeaderOptions)
  }

  loadContents(page : string)
  {
    return this.http.get(this.url + "files/" + this.datastoreService.CurrentFolder + "%2f" + page + "?ref=master")
  }

  loadRaw(page : string)
  {
    return this.http.get(this.url + "files/" + this.datastoreService.CurrentFolder + "%2F" + page + "/raw?ref=master", {responseType:'text'})
  }

  assignPageList(data: pageResponse[])
  {
    data.forEach(element => {
    if (element.type == SharedDataAssets.FILE)
    {
      this.datastoreService.PageList.push(element.name)
    }
    });
    this.datastoreService.setPage(this.datastoreService.PageList[0]) 
  }
}
