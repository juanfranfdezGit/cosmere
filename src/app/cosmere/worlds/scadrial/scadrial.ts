import { Component } from '@angular/core';
import { Era1 } from './era1/era1';
import { EraChange } from './era-change/era-change';
import { CommonModule } from '@angular/common';
import { Maplink } from '../../maplink/maplink';

@Component({
  selector: 'app-scadrial',
  imports: [EraChange, CommonModule, Maplink ],
  templateUrl: './scadrial.html',
  styleUrl: './scadrial.scss',
})
export class Scadrial {
  selectedEra = Era1;

  onEraSelected(eraComponent: any) {
    this.selectedEra = eraComponent;
  }
}
