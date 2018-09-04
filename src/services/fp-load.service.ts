import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { UtilService } from './util.service';
import { folderResponse } from '../Models/folderResponse';

@Injectable({
  providedIn: 'root'
})
export class FolderLoadService {

  private url: string;

  constructor(private http : HttpClient) 
  { 
    this.url = UtilService.generateUrl(SharedDataAssets.BASE_URI , SharedDataAssets.USER_NAME, SharedDataAssets.REPOSITORY_NAME)
  }

  public getAllFolders()
  {
    return this.http.get<folderResponse[]>( this.url + "/contents/" )
  }

  public openFolder(folder : string)
  {
    console.log(this.http.get(this.url + "/contents/" + folder))
    return this.http.get(this.url + "/contents/" + folder)
  }
}
