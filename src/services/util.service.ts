import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  static generateUrl(base : string, projectId : string)
  {
    return base + "/" + projectId
  }
}
