import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kaladin } from './kaladin/kaladin';
import { Dalinar } from './dalinar/dalinar';
import { Shallan } from './shallan/shallan';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  heroes = [
    { name: 'Kaladin', component: Kaladin },
    { name: 'Dalinar', component: Dalinar },
    { name: 'Shallan', component: Shallan },
  ];

  selectedHero = this.heroes[0];

  selectHero(hero: { name: string; component: any }) {
    this.selectedHero = hero;
  }
}
