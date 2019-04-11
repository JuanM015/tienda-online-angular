import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from 'firebase';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify
        (this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
   }

   // MÉTODO ASINCRONO: PERMITE EL TRABAJO EN AMBAS DIRECCIONES
   async login(email: string, password: string){
      try{
        // INVOCO EL MÉTODO PROPIO DE ANGULAR PARA LA VALIDACIÓN CON EMAIL Y CONTRASEÑA, POR ÚLTIMO LE ENVÍO POR 
        // PARÁMETROS DICHOS ATRIBUTOS.
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        // REDIRECCIÓN A UNA PESTAÑA EN PARTICULAR (RECORDAR CAMBIAR)
        this.router.navigate(['/']);
      } catch (e){
        alert('ERROR!' + e.message);
      }
   }

   async logout(){
     await this.afAuth.auth.signOut();
     localStorage.removeItem('user');
     // RECORDAR CAMBIAR
     this.router.navigate(['/']);
   }

   get isLoggedIn(): boolean{
      const user = JSON.parse(localStorage.getItem('user'));
      return user !== null;
   }

   async googleLogin(){
     try {
       await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
       // RECORDAR CAMBIAR
       this.router.navigate(['/'])
     } catch (e) {
       alert('ERROR!' + e.message);
     }
   }


}
