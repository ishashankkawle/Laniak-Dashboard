import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page-service.service';
import { DatastoreService } from '../../../services/datastore.service';
import { EditorService } from '../../../services/editor-service.service';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  notepad: any;
  fontColor = '#008800';
  highlightColor = '#ffffff';

  constructor(private pageService : PageService, private datastoreService : DatastoreService ,private editorSerice : EditorService) { }

  ngOnInit() {
    this.notepad = document.getElementById('notepad');
  }

  makeBold() {
    document.execCommand('bold', false);
  }

  makeItalic() {
    document.execCommand('italic', false);
  }

  makeUnderLine() {
    document.execCommand('underline', false);
  }

  makeStrikeThrough() {
    document.execCommand('strikeThrough', false);
  }

  alignLeft() {
    document.execCommand('justifyLeft', false);
  }

  alignCenter() {
    document.execCommand('justifyCenter', false);
  }

  alignRight() {
    document.execCommand('justifyRight', false);
  }

  triggerFontColorPicker()
  {
    document.getElementById('lan-font-col-picker').click();
  }

  triggerHighlightColorPicker()
  {
    document.getElementById('lan-highlight-col-picker').click();
  }

  copy() {
    document.execCommand('copy');
  }

  cut() {
    document.execCommand('cut');
  }

  setFontColor() {
    document.execCommand('foreColor', false , this.fontColor);
  }

  setHighLightColor() {
    document.execCommand('hiliteColor', false, this.highlightColor);
  }

  subScript() {
    document.execCommand('subscript', false);
  }

  superScript() {
    document.execCommand('superscript', false);
  }

  increaseSize() {
    document.execCommand('increaseFontSize', false);
  }

  saveData()
  {
    let contents = this.editorSerice.getTextFromEditor()
    this.pageService.updatePage(contents).subscribe(()=> console.log("updated"))
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
