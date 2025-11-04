import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RosharLink } from './roshar-link/roshar-link';
import { ScadrialLink } from './scadrial-link/scadrial-link';
import { SelLink } from './sel-link/sel-link';
import { NalthisLink } from './nalthis-link/nalthis-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RosharLink, ScadrialLink, SelLink, NalthisLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
