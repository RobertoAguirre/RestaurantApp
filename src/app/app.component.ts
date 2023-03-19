import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  checkLogin() {
    // Check if the user is logged in
    this.auth.onAuthStateChanged((user) => {
      if (!user) {
        // Redirect to the login page
        this.router.navigate(['/login']);
      }
    });
  }
}
