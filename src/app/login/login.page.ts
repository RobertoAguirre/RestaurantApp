import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  errorMessage: string;

  constructor(private auth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  //register
  registerWithEmail(email: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        // You can now do something with the user object
      })
      .catch((error) => {
        // Handle any errors that occur during sign up
      });
  }

  async registerWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await this.auth.signInWithPopup(provider);
      // The user is now signed in with their Google credentials
      // You can now save their information to your database
    } catch (error) {
      console.log(error);
    }
  }

  //login
  loginWithEmail(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        // You can now do something with the user object
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        // Handle any errors that occur during sign in
      });
  }

  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
  }

  singOut() {
    this.auth
      .signOut()
      .then(() => {
        // User signed out successfully
      })
      .catch((error) => {
        // Handle any errors that occur during sign out
      });
  }
}
