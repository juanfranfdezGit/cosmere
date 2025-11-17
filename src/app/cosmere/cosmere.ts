import { Component, AfterViewInit } from '@angular/core';
import { Break } from './break/break';
import { Origin } from './origin/origin';
import { Map } from './map/map';
import { Router, NavigationEnd, ActivatedRoute  } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cosmere',
  imports: [Break, Origin, Map],
  templateUrl: './cosmere.html',
})

export class Cosmere implements AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
