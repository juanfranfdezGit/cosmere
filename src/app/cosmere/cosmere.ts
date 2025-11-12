import { Component } from '@angular/core';
import { Break } from './break/break';
import { Origin } from './origin/origin';
import { Map } from './map/map';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cosmere',
  imports: [Break, Origin, Map],
  templateUrl: './cosmere.html',
  styleUrl: './cosmere.scss',
})
export class Cosmere {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
  }
}
