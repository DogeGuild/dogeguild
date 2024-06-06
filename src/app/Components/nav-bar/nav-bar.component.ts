import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  loggedIn: boolean = false;

  constructor(private service: AppService, private router: Router) {
    this.service.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    });
  }

  logOut() {
    this.service.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
