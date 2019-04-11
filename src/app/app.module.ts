import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/errors/page404/page404.component';


// SERVICIOS DE AUTENTIFICACIÓN
import { AuthService } from './services/auth.service';

import { ApiService } from './services/api.service';

// VARIBLES DE ENTORNO
import { environment } from '../environments/environment';

// FIREBASE 
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatIconModule, MatDividerModule, MatTabsModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatTableModule, MatListModule, MatSliderModule, MatSidenavModule} from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    DetalleProductoComponent,
    ListaProductosComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    NuevoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule, 
    MatCardModule, 
    MatIconModule, 
    MatDividerModule, 
    MatTabsModule, 
    MatTooltipModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatStepperModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatSelectModule, 
    MatTableModule, 
    MatListModule, 
    MatSliderModule, 
    MatSidenavModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ApiService, AuthService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
