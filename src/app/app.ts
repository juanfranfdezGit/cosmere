import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './common/navbar/navbar';
import { Cosmere } from './cosmere/cosmere';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cosmere, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
