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
      'Access-Control-Allow-Origin' : "*"
    })
  }

  public AdminHeaderOptions = {
    headers : new HttpHeaders ({
      'PRIVATE-TOKEN' : SharedDataAssets.LANIAK_ADMIN_ACCESS_TOKEN,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    })
  }

  public url: string;

  constructor() 
  {
    this.url = SharedDataAssets.BASE_URI
  }

  public getCUJsonBody(data : string = 'Welcome to laniak', msg : string = 'New content created')
  {
    var body = {
      "content" : data,
      "commit_message" : msg
    }
    return body
  }

  public getDJsonBody(msg : string = 'Deleted a file')
  {
    var body = {
      "commit_message" : msg
    }
    return body
  }
}
