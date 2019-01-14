import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './containers/app';
import { PageNotFoundComponent } from './404';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { OrderBookComponent } from './order-book/order-book.component';
import { OrderBookService } from './order-book/order-book.service';

var _entryComponents: any[] = [
  AppComponent,
  OrderBookComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      useHash: false
    }),
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' },
    OrderBookService
  ],
  declarations: _entryComponents,
  entryComponents: _entryComponents,
  bootstrap: [ AppComponent ]
})
export class AppModule {}
