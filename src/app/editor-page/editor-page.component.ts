import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page-service.service';
import { DatastoreService } from '../../services/datastore.service';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  notepad: any;
  fontColor = '#008800';
  highlightColor = '#ffffff';

  constructor(private pageService : PageService, private datastoreService : DatastoreService) { }
  ngOnInit() {
    this.notepad = document.getElementById('notepad');
  }

  makeBold() {
    document.execCommand('bold', false, null);
  }

  makeItalic() {
    document.execCommand('italic', false, null);
  }

  makeUnderLine() {
    document.execCommand('underline', false, null);
  }

  makeStrikeThrough() {
    document.execCommand('strikeThrough', false, null);
  }

  alignLeft() {
    document.execCommand('justifyLeft', false, null);
  }

  alignCenter() {
    document.execCommand('justifyCenter', false, null);
  }

  alignRight() {
    document.execCommand('justifyRight', false, null);
  }

  copy() {
    document.execCommand('copy');
  }

  cut() {
    document.execCommand('cut');
  }

  setFontColor() {
    document.execCommand('foreColor', false, this.fontColor);
  }

  setHighLightColor() {
    document.execCommand('hiliteColor', false, this.highlightColor);
  }

  subScript() {
    document.execCommand('subscript', false, null);
  }

  superScript() {
    document.execCommand('superscript', false, null);
  }

  increaseSize() {
    document.execCommand('increaseFontSize', false, null);
  }

  saveData()
  {
  }

  reloadData()
  {
    this.pageService.loadRaw(this.datastoreService.CurrentPage).subscribe((data : string)=>this.notepad.innerText = data)
  }

  clearData()
  {
    this.notepad.innerText = ""
  }
}
