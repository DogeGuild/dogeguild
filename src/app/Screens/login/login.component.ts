import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  loggedIn: boolean = false;
  error: string = "";

  constructor(private service: AppService, private router: Router) {
    this.service.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    })
   }

   logIn() {
      this.error = "";
      this.service.setCredentials(this.username, this.password);
      this.service.checkCredentials();
      if (this.service.loggedIn.getValue()) {
        this.router.navigate(['/library']);
      } else {
        this.username = "";
        this.password = "";
        this.error = "Invalid credentials!";
      }
    }

  ngOnInit(): void {
    this.service.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    })
  }
}
