import { Component, OnInit, Inject } from '@angular/core';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent implements OnInit 
{
  SelectedFolder : string;
  FolderList : string[] = [
                            "Folder 1",
                            "Folder 2",
                            "Folder 3",
                            "Folder 4",
                            "Folder 5",
                            "Folder 6",
                            "Folder 7",
                            "Folder 8",
                            "Folder 9",
                            "Folder 10"
                          ];

  constructor(private datastoreService : DatastoreService) 
  {
  }

  ngOnInit() 
  {
    this.datastoreService.FolderList = this.FolderList;
  }

  onSelected(folder : string) : void
  {
    this.SelectedFolder  = folder;
    this.datastoreService.setFolder(folder);
  }

}
