import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login/login-page/login-page.component';
import { AdminEditorComponent } from './admin-editor/admin-editor.component';


const routes: Routes = [
  { path:'admin-panel' , component:AdminEditorComponent },
  { path:'login-panel' , component:LoginPageComponent },
  { path:'' , redirectTo:"/login-panel", pathMatch: 'full' },
  { path: '**', component: LoginPageComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
