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
  PageList: string[] = [
                        "Page 1",
                        "Page 2",
                        "Page 3",
                        "Page 4",
                        "Page 6",
                        "Page 7",
                        "Page 8",
                        "Page 9",
                        "Page 5",
                        ];

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
