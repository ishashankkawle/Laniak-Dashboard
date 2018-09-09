import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { FPLoadService } from '../services/fp-load.service';
import {fpResponse} from '../Models/fpResponse'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'app';

  folders : fpResponse[]
  pages : fpResponse[]

  constructor(private datastoreService : DatastoreService, private fpService : FPLoadService){}
   
  ngOnInit()
  {
    this.fpService.IitialLoading()
  }
}
