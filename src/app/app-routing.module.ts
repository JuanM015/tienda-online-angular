import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/errors/page404/page404.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 10031632 - Contraseña del cucho