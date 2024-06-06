import { Component, OnInit } from '@angular/core';
import { BaseHero } from 'src/app/Models/BaseHero';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  loading: boolean = true;
  characters: BaseHero[] = [];
  charactersClicked: boolean = false;
  mythicsClicked: boolean = false;
  artifactsClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    let response = fetch('http://localhost:8080/characters');
    
    response.then((response) => {
      response.json().then((data) => {
        this.characters = data;
      });
    });
    this.loading = false;
  }

  toggleCharactersClicked() {
    this.charactersClicked = !this.charactersClicked;
  }

  toggleMythicsClicked() {
    this.mythicsClicked = !this.mythicsClicked;
  }

  toggleArtifactsClicked() {
    this.artifactsClicked = !this.artifactsClicked;
  }

}
