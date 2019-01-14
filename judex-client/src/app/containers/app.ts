import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'judex-app',
  template: `<router-outlet><ng-content></ng-content></router-outlet>`
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
