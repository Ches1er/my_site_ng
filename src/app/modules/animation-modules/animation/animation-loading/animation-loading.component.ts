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
  selector: 'app-animation-loading',
  templateUrl: './animation-loading.component.html',
  styleUrls: ['./animation-loading.component.css'],
  animations: [
    state('open', style({
      height: '200px',
      opacity: 1,
      backgroundColor: 'yellow'
    })),
    state('closed', style({
      height: '100px',
      opacity: 0.5,
      backgroundColor: 'green'
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]
})
export class AnimationLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
