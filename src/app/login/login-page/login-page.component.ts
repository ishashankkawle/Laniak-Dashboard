import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   username : string = ""
   password : string = ""

  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
  }

  login()
  {

    console.log(this.username + " / " + this.password)

    if(this.username == "admin" && this.password == "asdf@123")
    {
      this.router.navigate(["/admin-panel"],{relativeTo:this.route})
    }
    else
    {
      this.username = ""
      this.password = ""
    }
  }

}
