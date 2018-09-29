import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DatastoreService 
{ 
  public CurrentFolder = "Nothing opened";
  public CurrentPage = "Nothing opened";

  // Values must be locally added to following arrays for updating the lists
  FolderList: string[] = []
  PageList: string[] = []

  constructor() { }

  public setFolder(FolderName : string): void
  {
    this.CurrentFolder  = FolderName;
  }

  public setPage(PageName : string): void
  {
    this.CurrentPage = PageName;
  }

}
