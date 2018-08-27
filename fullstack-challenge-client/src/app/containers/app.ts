import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fullstack-challenge-app',
  template: `<ng-content></ng-content>`
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
