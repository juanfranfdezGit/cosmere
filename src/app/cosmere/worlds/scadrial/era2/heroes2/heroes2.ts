import { Component } from '@angular/core';
import { Ladrian } from './ladrian/ladrian';
import { Wayne } from './wayne/wayne';
import { Colms } from './colms/colms';
import { HarmsLadrian } from './harms-ladrian/harms-ladrian';
import { MeLaan } from './me-laan/me-laan';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes2',
  imports: [CommonModule],
  templateUrl: './heroes2.html',
  styleUrl: './heroes2.scss',
})
export class Heroes2 {
  heroes = [
    { name: 'Waxillium Ladrian', component: Ladrian },
    { name: 'Wayne', component: Wayne },
    { name: 'Marasi Colms', component: Colms },
    { name: 'Steris Harms Ladrian', component: HarmsLadrian },
    { name: 'MeLaan', component: MeLaan },
  ];

  selectedHero = this.heroes[0];

  selectHero(hero: { name: string; component: any }) {
    this.selectedHero = hero;
  }
}
