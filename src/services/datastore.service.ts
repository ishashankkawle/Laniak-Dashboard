import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatastoreService 
{ 
  public CurrentFolder = "Nothing opened";
  public CurrentPage = "Nothing opened";
  FolderList: string[];
  PageList: string[];

  constructor() { }

  public setFolder(FolderName : string): void
  {
    this.CurrentFolder  = FolderName;
    console.log(FolderName);
  }

  public setPage(PageName : string): void
  {
    this.CurrentPage = PageName;
    console.log(PageName);
  }

}