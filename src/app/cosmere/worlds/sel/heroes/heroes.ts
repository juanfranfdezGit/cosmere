import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Raoden } from './raoden/raoden';
import { Sarene } from './sarene/sarene';
import { Hrathen } from './hrathen/hrathen';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  heroes = [
    { name: 'Raoden', component: Raoden },
    { name: 'Sarene', component: Sarene },
    { name: 'Hrathen', component: Hrathen },
  ];

  selectedHero = this.heroes[0];

  selectHero(hero: { name: string; component: any }) {
    this.selectedHero = hero;
  }
}
