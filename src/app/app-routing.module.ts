import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './pages/home2/home2.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: Home2Component,
    pathMatch: 'full'
  },
  {
    path: 'signup',
  component: SignupComponent,
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
