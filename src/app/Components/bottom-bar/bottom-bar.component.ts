import { Component } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {

  loggedIn: boolean = false;

  constructor(private service: AppService) {
    this.service.loggedIn.subscribe((data: boolean) => {
      this.loggedIn = data;
    });
   }

}
