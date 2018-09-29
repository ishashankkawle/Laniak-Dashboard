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
    console.log("call to loadPages")
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

  createPage(pageName : string)
  {
    let reqBody = this.getCUJsonBody();
    let link = this.url + "files/" + this.datastoreService.CurrentFolder + "%2F" + pageName + "?branch=master";
    return this.http.post(link , reqBody , this.AdminHeaderOptions);
  }

  assignPageList(data: pageResponse[])
  {
    this.datastoreService.PageList = []
    data.forEach(element => {
    if (element.type == SharedDataAssets.FILE)
    {
      this.datastoreService.PageList.push(element.name)
    }
    });
    this.datastoreService.setPage(this.datastoreService.PageList[0]) 
  }

  addPageInPageList(pageName : string)
  {
    this.datastoreService.PageList.push(pageName);
  }
}
