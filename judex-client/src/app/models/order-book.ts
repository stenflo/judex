export interface OrderBook {
  info?: {
    market: string;
    exchange1: string;
    exchange2: string;
    token1: string;
    token2: string;
    date: Date;
  };
  bids?: { [price: string]: {
    exchange1: number;
    exchange2: number;
  } };
  asks?: { [price: string]: {
    exchange1: number;
    exchange2: number;
  } };
}
