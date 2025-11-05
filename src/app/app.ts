import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Origin } from './origin/origin';
import { Break } from './break/break';
import { Map } from './map/map';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Origin, Break, Map],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
