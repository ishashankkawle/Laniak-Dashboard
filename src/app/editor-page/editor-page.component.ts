import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.css']
})
export class EditorPageComponent implements OnInit {

  notepad: any;
  fontColor : string = "#008800";
  highlightColor : string = "#ffffff";

  constructor() { }
  ngOnInit() 
  {
    this.notepad = document.getElementById("notepad");
  }

  makeBold()
  {
    document.execCommand('bold',false,null);
  }

  makeItalic()
  {
    document.execCommand('italic',false,null);
  }

  makeUnderLine()
  {
    document.execCommand('underline',false,null);
  }

  makeStrikeThrough()
  {
    document.execCommand('strikeThrough',false,null);
  }

  alignLeft()
  {
    document.execCommand('justifyLeft',false,null);
  }

  alignCenter()
  {
    document.execCommand('justifyCenter',false,null);
  }

  alignRight()
  {
    document.execCommand('justifyRight',false,null);
  }

  copy()
  {
    document.execCommand('copy');
  }

  cut()
  {
    document.execCommand('cut');
  }

  setFontColor()
  {
    document.execCommand('foreColor', false, this.fontColor);
  }

  setHighLightColor()
  {
    document.execCommand('hiliteColor', false, this.highlightColor);
  }

  subScript()
  {
    document.execCommand('subscript', false, null);
  }

  superScript()
  {
    document.execCommand('superscript', false, null);
  }

  increaseSize()
  {
    document.execCommand('increaseFontSize', false, null);
  }
}
