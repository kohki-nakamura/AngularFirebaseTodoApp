import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = this.afAuth.user;

  constructor(private afAuth: AngularFireAuth) {}

  login() {
    firebase.auth()
   .setPersistence(firebase.auth.Auth.Persistence.SESSION)
   .then((result) => {
      console.log("success setPersistence");
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
   })
   .catch((error) => {
      console.log("failed setPersistence");
   });
  }

  logout() {
    firebase.auth().signOut()
  }
}
