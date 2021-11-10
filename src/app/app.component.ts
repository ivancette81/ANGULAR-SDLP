import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  longText = `La combinación verdelís te transporta a un mundo mágico de flores y arcoiris en que tu eres la princesa. 
  Contiene un jabón de esencia de eneldo feliz, una esponja bob el juguetón y una selección de minijabones empoderados`;
  isSelectedBaskets = false;
  isSelectedBaby = false;
  isSelectedSingleSoap = false;

  onBasketsClick()
  {
    this.isSelectedBaskets = true;
    this.isSelectedBaby = false;
    this.isSelectedSingleSoap = false;
  }
  onBabyClick()
  {
    this.isSelectedBaskets = false;
    this.isSelectedBaby = true;
    this.isSelectedSingleSoap = false;
  }
  onSingleSoapClick()
  {
    this.isSelectedBaskets = false;
    this.isSelectedBaby = false;
    this.isSelectedSingleSoap = true;
  }
}
