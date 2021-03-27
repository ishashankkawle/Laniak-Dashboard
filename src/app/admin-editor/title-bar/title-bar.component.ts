import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'src/services/datastore.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private datastoreService : DatastoreService) { }

  ngOnInit() {
  }

}
