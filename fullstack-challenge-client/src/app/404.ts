import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'page-not-found',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div>404 - Page Not Found<div>`
})
export class PageNotFoundComponent {}
