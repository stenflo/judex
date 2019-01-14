import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../app.settings';

@Injectable()
export class OrderBookService {

    constructor(private http: HttpClient) {}

    getOrderBook(market: string,
            exch1?: string,
            exch2?: string): Observable<any> {
        let p: HttpParams = new HttpParams();
        if (exch1) p = p.set('exch1', exch1);
        if (exch2) p = p.set('exch2', exch2);
        const options = { params: p };
        return this.http.get<any>(`${AppSettings.API_ENDPOINT}/api/v1/market/${market}/orderbook`, options);
    }

}
