import { Component } from '@angular/core';
import { Animation } from './animation/animation';
import { Community } from './community/community';
import { News } from './news/news';

@Component({
  selector: 'app-home',
  imports: [Animation, Community, News],
  templateUrl: './home.html',
})

export class Home {

}
