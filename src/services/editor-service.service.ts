import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor() 
  {
  }

  public loadTextOnEditor(text : string)
  {
    document.getElementById('notepad').innerHTML = text
  }

  public getTextFromEditor()
  {
    return document.getElementById('notepad').innerHTML;
  }
}
