import { Injectable } from '@angular/core';
import { DatastoreService } from './datastore.service';
import { CoreService } from './core-service.service';
import { HttpClient } from '@angular/common/http';
import { pageResponse } from '../Models/pageResponse';

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
}
