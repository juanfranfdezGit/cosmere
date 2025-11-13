import { Component, EventEmitter, Output } from '@angular/core';
import { Era1 } from '../era1/era1';
import { Era2 } from '../era2/era2';

@Component({
  selector: 'app-era-change',
  templateUrl: './era-change.html',
  styleUrl: './era-change.scss',
})
export class EraChange {
  @Output() eraSelected = new EventEmitter<any>();

  Era1 = Era1;
  Era2 = Era2;

  selectEra(eraComponent: any) {
    this.eraSelected.emit(eraComponent);
  }
}
