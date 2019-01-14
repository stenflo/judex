import { Component, OnInit } from '@angular/core';
import { OrderBook } from '../models/order-book';
import { OrderBookService } from './order-book.service';

@Component({
  selector: 'order-book',
  template: require('./order-book.component.html'),
  styles: [ require('./order-book.component.css') ]
})
export class OrderBookComponent implements OnInit {

  private mode: string;
  private orderBook: OrderBook;
  private bidPeak: number = 0;
  private askPeak: number = 0;
  private selectedMarket: string = 'BTC-ETH';
  private exchange1: string = 'Bittrex';
  private exchange2: string = 'Poloniex';
  private lowestAsk: string;
  private highestBid: string;
  private pageSize: number = 20;

  private availableExchanges: string[] = [
    'Bittrex',
    'Poloniex'
  ];
  private availableMarkets: string[] = [
    'BTC-ETH',
    'BTC-DOGE',
    'BTC-LSK',
    'BTC-XRP',
    'BTC-BCH',
    'BTC-LOOM',
    'BTC-XEM',
    'BTC-SC',
    'BTC-DGB',
    'ETH-BCH'
  ];

  private get bidPricePoints(): string[] {
    let ret: string[] = Object.keys(this.orderBook.bids).sort((a, b) => Number.parseFloat(b).toFixed(8).localeCompare(Number.parseFloat(a).toFixed(8)));
    if (ret.length > this.pageSize) {
      ret = ret.slice(0, this.pageSize);
    }
    return ret;
  }

  private get askPricePoints(): string[] {
    let ret: string[] = Object.keys(this.orderBook.asks).sort((a, b) => Number.parseFloat(b).toFixed(8).localeCompare(Number.parseFloat(a).toFixed(8)));
    if (ret.length > this.pageSize) {
      ret = ret.slice(ret.length - this.pageSize, ret.length);
    }
    return ret;
  }

  constructor(private orderBookService: OrderBookService) {}

  ngOnInit() {
    this.requestOrderBook();
  }

  private requestOrderBook() {
    this.orderBookService.getOrderBook(this.selectedMarket, this.exchange1, this.exchange2).subscribe(
      data => {
          this.orderBook = data.book;
          this.doOrderBookAnalysis();
          setTimeout(() => { this.requestOrderBook(); }, 1000);
      },
      error => {
        console.log('Remote Error', error);
      }
    );
  }

  private doOrderBookAnalysis() {
    let newBidPeak = 0;
    let newAskPeak = 0;
    let newLowestAsk;
    let newHighestBid;
    this.bidPricePoints.forEach((price) => {
      const total =
        this.orderBook.bids[price].exchange1
        + this.orderBook.bids[price].exchange2;
      if (total > newBidPeak) {
          newBidPeak = total;
      }
      if (!newHighestBid || Number.parseFloat(newHighestBid) < Number.parseFloat(price)) {
        newHighestBid = price;
      }
    });
    this.askPricePoints.forEach((price) => {
      const total =
        this.orderBook.asks[price].exchange1
        + this.orderBook.asks[price].exchange2;
      if (total > newAskPeak) {
          newAskPeak = total;
      }
      if (!newLowestAsk || Number.parseFloat(newLowestAsk) > Number.parseFloat(price)) {
        newLowestAsk = price;
      }
    });
    this.lowestAsk = newLowestAsk;
    this.highestBid = newHighestBid;
    this.bidPeak = newBidPeak;
    this.askPeak = newAskPeak;
  }

  private exchange1BuyWidth(price: string): string {
    let percent = (this.orderBook.bids[price].exchange1 / this.bidPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private exchange2BuyWidth(price: string): string {
    let percent = (this.orderBook.bids[price].exchange2 / this.bidPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private extraBuyWidth(price: string): string {
    let percent = ((this.bidPeak - this.orderBook.bids[price].exchange1
      - this.orderBook.bids[price].exchange2) / this.bidPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private exchange1SellWidth(price: string): string {
    let percent = (this.orderBook.asks[price].exchange1 / this.askPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private exchange2SellWidth(price: string): string {
    let percent = (this.orderBook.asks[price].exchange2 / this.askPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private extraSellWidth(price: string): string {
    let percent = ((this.askPeak - this.orderBook.asks[price].exchange1
      - this.orderBook.asks[price].exchange2) / this.askPeak * 100)
    .toFixed(2);
    return percent.substring(0,percent.length-1);
  }

  private exchange1Arbitrage(price: string): number {
    if (this.orderBook.bids[price]
        && this.orderBook.asks[price]
        && this.orderBook.bids[price].exchange1 > 0)
      return (this.orderBook.bids[price].exchange1 > this.orderBook.asks[price].exchange2)
      ? this.orderBook.asks[price].exchange2 : this.orderBook.bids[price].exchange1;
    else return 0;
  }

  private exchange2Arbitrage(price: string): number {
    if (this.orderBook.bids[price]
        && this.orderBook.asks[price]
        && this.orderBook.bids[price].exchange2 > 0)
      return (this.orderBook.bids[price].exchange2 > this.orderBook.asks[price].exchange1)
      ? this.orderBook.asks[price].exchange1 : this.orderBook.bids[price].exchange2;
    else return 0;
  }

  private isAboveLowestAsk(price: string): boolean {
    return (Number.parseFloat(this.lowestAsk) <= Number.parseFloat(price));
  }

  private isBelowHighestBid(price: string): boolean {
    return (Number.parseFloat(this.highestBid) >= Number.parseFloat(price));
  }

}
