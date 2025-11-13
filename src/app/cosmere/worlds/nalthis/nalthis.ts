import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Heroes } from './heroes/heroes';
import { Places } from './places/places';

@Component({
  selector: 'app-nalthis',
  imports: [Hero ,Heroes, Places],
  templateUrl: './nalthis.html',
  styleUrl: './nalthis.scss',
})
export class Nalthis {

}
