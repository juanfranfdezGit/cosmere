import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Heroes } from './heroes/heroes';
import { Places } from './places/places';
import { Maplink } from '../../maplink/maplink';

@Component({
  selector: 'app-roshar',
  imports: [Hero ,Heroes, Places, Maplink],
  templateUrl: './roshar.html',
  styleUrl: './roshar.scss',
})
export class Roshar {

}
