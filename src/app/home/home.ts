import { Component } from '@angular/core';
import { Animation } from './animation/animation';
import { Community } from './community/community';

@Component({
  selector: 'app-home',
  imports: [Animation, Community],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

}
