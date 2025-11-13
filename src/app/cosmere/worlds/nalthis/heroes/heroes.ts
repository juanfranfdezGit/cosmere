import { Component } from '@angular/core';
import { Siri } from './siri/siri';
import { Vivenna } from './vivenna/vivenna';
import { Vasher } from './vasher/vasher';
import { Susebron } from './susebron/susebron';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  heroes = [
    { name: 'Siri', component: Siri},
    { name: 'Vivenna', component: Vivenna},
    { name: 'Vasher', component: Vasher},
    { name: 'Susebron', component: Susebron},
  ];

  selectedHero = this.heroes[0];

  selectHero(hero: { name: string; component: any }) {
    this.selectedHero = hero;
  }
}
