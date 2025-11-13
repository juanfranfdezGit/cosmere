import { Component } from '@angular/core';
import { Era1 } from './era1/era1';
import { Era2 } from './era2/era2';
import { EraChange } from './era-change/era-change';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scadrial',
  imports: [EraChange, CommonModule, Era1, Era2],
  templateUrl: './scadrial.html',
  styleUrl: './scadrial.scss',
})
export class Scadrial {
  selectedEra = Era1;

  onEraSelected(eraComponent: any) {
    this.selectedEra = eraComponent;
  }
}
