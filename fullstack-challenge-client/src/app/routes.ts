import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './404';
import { OrderBookComponent } from './order-book/order-book.component';

export const routes: Routes = [
  {
    path: '',
    component: OrderBookComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
