import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-large-button',
  templateUrl: './large-button.component.html',
  styleUrls: ['./large-button.component.css']
})
export class LargeButtonComponent {

  @Input() text: string = '';
  @Input() link: string = '';
}
