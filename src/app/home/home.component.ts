import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() {
    console.log("On constructor");
  }

  ngOnInit(): void {
    console.log("On init");
  }

  ngOnDestroy(): void {
    console.log("On destroy");
  }
}
