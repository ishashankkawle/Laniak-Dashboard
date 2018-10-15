import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginModule { }
