import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/errors/page404/page404.component';
import { LoginComponent } from './components/users/login/login.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'error',
    component: Page404Component
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'productos',
    component: ListaProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// 10031632 - Contraseña del cucho