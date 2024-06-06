import { Component, Input, OnInit } from '@angular/core';
import { BaseHero } from 'src/app/Models/BaseHero';

@Component({
  selector: 'app-hero-display',
  templateUrl: './hero-display.component.html',
  styleUrls: ['./hero-display.component.css']
})
export class HeroDisplayComponent implements OnInit {

  @Input() character!: BaseHero;
  iconUrl: string = "../../../assets/characters/";
  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.iconUrl += this.character.name.toLowerCase() + ".png";
  }

  toggleClicked() {
    this.clicked = !this.clicked;
  }

}
