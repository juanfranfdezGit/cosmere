import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RosharLink } from './roshar-link/roshar-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RosharLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
    
}
