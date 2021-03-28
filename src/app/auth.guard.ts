import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { DatastoreService } from 'src/services/datastore.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  constructor(private datastoreService : DatastoreService , private router : Router , private route : ActivatedRoute )
  {}
  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean 
  {
    console.log("Inside : GUARD METHOD")
    if(this.datastoreService.IsUserAuthenticated)
    {
      console.log("AUTHENTICATION APPROVED")
      return this.datastoreService.IsUserAuthenticated;
    }
    else
    {
      console.log("AUTHENTICATION REJECTED")
      this.router.navigate(["/login-panel"],{relativeTo:this.route})
      return false;
    }
  }
}
