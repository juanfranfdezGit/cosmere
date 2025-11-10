import { Component } from '@angular/core';
import { Break } from './break/break';
import { Origin } from './origin/origin';
import { Map } from './map/map';

@Component({
  selector: 'app-cosmere',
  imports: [Break, Origin, Map],
  templateUrl: './cosmere.html',
  styleUrl: './cosmere.scss',
})
export class Cosmere {

}
