import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RosharLink } from './roshar-link/roshar-link';
import { ScadrialLink } from './scadrial-link/scadrial-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RosharLink, ScadrialLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
