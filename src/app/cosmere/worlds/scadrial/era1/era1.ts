import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Heroes } from './heroes/heroes';
import { Places } from './places/places';

@Component({
  selector: 'app-era1',
  imports: [Hero, Heroes, Places],
  templateUrl: './era1.html',
})
export class Era1 {

}
