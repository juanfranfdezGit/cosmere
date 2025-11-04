import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Origin } from './origin/origin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Origin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
