import { Component } from '@angular/core';
import { Hero2 } from './hero2/hero2';
import { Heroes2 } from './heroes2/heroes2';
import { PlacesEra2 } from './places-era2/places-era2';

@Component({
  selector: 'app-era2',
  imports: [Hero2, Heroes2, PlacesEra2],
  templateUrl: './era2.html',
})
export class Era2 {

}
