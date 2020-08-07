import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animations',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '300px',
        opacity: 1,
        backgroundColor: 'black'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'white'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
