import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Vin } from './vin/vin';
import { Kelsier } from './kelsier/kelsier';

@Component({
  selector: 'app-heroes',
  imports: [CommonModule],  
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class Heroes {
  heroes = [
    { name: 'Vin', component: Vin },
    { name: 'Kelsier', component: Kelsier },
  ];

  selectedHero = this.heroes[0];

  selectHero(hero: { name: string; component: any }) {
    this.selectedHero = hero;
  }
}
