import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animation',
  imports: [CommonModule],
  templateUrl: './animation.html',
  styleUrl: './animation.scss',
})
export class Animation implements OnInit {

  activeDiv = 1;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setInterval(() => {
      this.activeDiv = this.activeDiv === 3 ? 1 : this.activeDiv + 1;
      this.cd.detectChanges();
    }, 6000);
  }
  
}
