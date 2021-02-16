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
    this.afAuth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  logout() {
    this.afAuth.signOut();
  }
}
