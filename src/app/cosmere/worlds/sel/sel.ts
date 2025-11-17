import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Heroes } from './heroes/heroes';
import { Places } from './places/places';
import { Maplink } from '../../maplink/maplink';

@Component({
  selector: 'app-sel',
  imports: [Hero, Heroes, Places, Maplink],
  templateUrl: './sel.html',
  styleUrl: './sel.scss',
})
export class Sel {}
