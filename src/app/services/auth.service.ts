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
   .setPersistence(firebase.auth.Auth.Persistence.SESSION) // setPersistenceがないと上記のようにポップアップ内が真っ白になる
   .then(() => {
      const provider = new firebase.auth.GoogleAuthProvider();
      return firebase.auth().signInWithRedirect(provider);
   })
   .catch((error) => {
      console.log("err");
   });
  }
  logout() {
    this.afAuth.signOut();
  }
}
