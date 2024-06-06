import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();
  username: string = "";
  password: string = "";

  constructor(private router: Router) {
   }

  checkCredentials() {
    if (this.username.toLowerCase() === "okaminexos" && this.password === "DogeMan123!") {
      console.log("Credentials are correct!");
      this.loggedIn.next(true);
    }

  }

  isLoggedIn() {
    return this.loggedIn$;
  }

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.checkCredentials();
    if (this.loggedIn.getValue()) {
      // this.router.navigate(['/library']);
    } else {
      this.username = "";
      this.password = "";
    }
  }
}
