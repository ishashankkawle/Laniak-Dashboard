import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { FPLoadService } from '../services/fp-load.service';
import {folderResponse} from '../Models/folderResponse'
import { pageResponse } from '../Models/pageResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';

  folders : folderResponse[]
  pages : pageResponse[]

  constructor(private datastoreService : DatastoreService, private fpService : FPLoadService){}
   
  ngOnInit()
  {
    this.fpService.IitialLoading()
  }
}
