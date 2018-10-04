import { Injectable } from '@angular/core';
import { DatastoreService } from './datastore.service';
import { CoreService } from './core-service.service';
import { HttpClient } from '@angular/common/http';
import { pageResponse } from '../Models/pageResponse';
import { SharedDataAssets } from '../global/shareddata';
import { FolderService } from './folder-service.service';

@Injectable({
  providedIn: 'root'
})
export class PageService extends CoreService {

  constructor(private http : HttpClient, private datastoreService : DatastoreService, private folderService : FolderService) 
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

  deletePage(pageName : string)
  {
    let reqBody = this.getDJsonBody();
    let Adminheaders = this.AdminHeaderOptions;
    let link = this.url + "files/" + this.datastoreService.CurrentFolder + "%2F" + pageName + "?branch=master";
    return this.http.request('delete' , link ,  { body: reqBody , headers: Adminheaders.headers})
  }

  updatePage(contents: string)
  {
   let reqBody = this.getCUJsonBody()
   reqBody.content = contents
   let link = this.url + "files/" + this.datastoreService.CurrentFolder + "%2F" +  this.datastoreService.CurrentPage + "?branch=master";
   return this.http.put(link , reqBody , this.AdminHeaderOptions);
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

  removePageFromPageList(pageName)
  {
    let temp = []
    let removedPage = ""
    while(removedPage != pageName)
    {
      removedPage = this.datastoreService.PageList.pop()
      if(removedPage != pageName)
      {
        console.log(removedPage)
        temp.push(removedPage)
      }
    }
    if(temp.length != 0)
    {
      for(let i = 0; i<temp.length; i++)
      {
        this.datastoreService.PageList.push(temp.pop())
      } 
    }
    else
    {
      this.folderService.removeFolderFromFolderList(this.datastoreService.CurrentFolder)
    }
  }
}
