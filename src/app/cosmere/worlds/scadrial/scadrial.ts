import { Component } from '@angular/core';
import { Era1 } from './era1/era1';
import { EraChange } from './era-change/era-change';

@Component({
  selector: 'app-scadrial',
  imports: [Era1, EraChange],
  templateUrl: './scadrial.html',
  styleUrl: './scadrial.scss',
})
export class Scadrial {

}
