import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataAssets } from '../global/shareddata';
import { UtilService } from './util.service';
import { fpResponse } from '../Models/fpResponse';

@Injectable({
  providedIn: 'root'
})
export class FPLoadService {

  private url: string;

  constructor(private http : HttpClient) 
  { 
    this.url = UtilService.generateUrl(SharedDataAssets.BASE_URI , SharedDataAssets.USER_NAME, SharedDataAssets.REPOSITORY_NAME)
  }

  public getAllFolders()
  {
    return this.http.get<fpResponse[]>( this.url + "/contents/" )
  }

  public openFolder(folder : string)
  {
    console.log(this.http.get(this.url + "/contents/" + folder))
    return this.http.get(this.url + "/contents/" + folder)
  }
}
