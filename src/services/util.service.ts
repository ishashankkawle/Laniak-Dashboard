import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  static generateUrl(base : string, username : string, repo : string)
  {
    return base + "/" + username + "/" + repo
  }
}
