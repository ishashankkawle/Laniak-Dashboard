import { Injectable } from '@angular/core';
import { SharedDataAssets } from '../global/shareddata';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoreService
{

  public HeaderOptions = {
    headers : new HttpHeaders ({
      'Access-Control-Allow-Origin' : '*'
    })
  }

  public url: string;

  constructor() 
  {
    this.url = SharedDataAssets.BASE_URI
  }
}
