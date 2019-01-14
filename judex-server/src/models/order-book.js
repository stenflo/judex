const axios = require('axios');

import _ from "lodash";
import BittrexDAO from "./bittrex";
import PoloniexDAO from "./poloniex";

export default class OrderBookDAO {

    /**
     * get an order book
     * @param {values} - parameters for an order book
     */
    static async getOrderBook({ market, exch1, exch2 }) {
        const defaultHandler = BittrexDAO;
        const default2Handler = PoloniexDAO;
        const myMarket = this.getMarket(market);
        const token1 = this.getToken1(myMarket);
        const token2 = this.getToken2(myMarket);
        try {
            let result = {};
            const exchange1 = (!exch1 || new String(exch1).replace(/\s/g,"") == "")
                ? defaultHandler
                : this.getHandler(exch1);
            const exchange2 = (!exch2 || new String(exch2).replace(/\s/g,"") == "")
                ? ((exchange1 != defaultHandler) ? defaultHandler : default2Handler)
                : this.getHandler(exch2);
            await axios.all([
                exchange1,
                exchange2
            ].map((handler) => handler.getOrderBook(myMarket)))
            .then(axios.spread(function (book1, book2) {
                let bidPricePoints = _.union(
                    Object.keys(book1.bid),
                    Object.keys(book2.bid)
                );
                let askPricePoints = _.union(
                    Object.keys(book1.ask),
                    Object.keys(book2.ask)
                );
                let bids = {};
                bidPricePoints.sort((a, b) => a.localeCompare(b)).reverse()
                .forEach((price) => {
                    let bid1 = (book1.bid[price]) ? book1.bid[price] : 0;
                    let bid2 = (book2.bid[price]) ? book2.bid[price] : 0;
                    bids = Object.assign(bids, {
                        [price]: {
                            'exchange1': bid1,
                            'exchange2': bid2,
                            'total': bid1 + bid2
                        }
                    });
                });
                let asks = {};
                askPricePoints.sort((a, b) => a.localeCompare(b))
                .forEach((price) => {
                    let ask1 = (book1.ask[price]) ? book1.ask[price] : 0;
                    let ask2 = (book2.ask[price]) ? book2.ask[price] : 0;
                    asks = Object.assign(asks, {
                        [price]: {
                            'exchange1': ask1,
                            'exchange2': ask2,
                            'total': ask1 + ask2
                        }
                    });
                });
                result = {
                    'info': {
                        'market': myMarket,
                        'exchange1': exchange1.myName,
                        'exchange2': exchange2.myName,
                        'token1': token1,
                        'token2': token2,
                        'date': new Date()
                    },
                    'bids': bids,
                    'asks': asks
                };
            }));
            return result;
        } catch (e) {
            throw e;
        }
    }

    /**
     */
    static getToken1(market) {
        return market.substring(0,market.indexOf('-')).toUpperCase();
    }

    /**
     */
    static getToken2(market) {
        return market.substring(market.indexOf('-')+1,market.length).toUpperCase();
    }

    /**
     */
    static getHandler(name) {
        const defaultHandler = BittrexDAO;
        if (name && name.toLowerCase() === 'bittrex') {
            return BittrexDAO;
        }
        else if (name && name.toLowerCase() === 'poloniex') {
            return PoloniexDAO;
        }
        return defaultHandler;
    }

    /**
     */
    static getMarket(name) {
        const availableMarkets = [
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
        const defaultMarket = 'BTC-ETH';
        if (name && availableMarkets.includes(name.toUpperCase().replace(/_/g,"-"))) {
            return name.toUpperCase().replace(/_/g,"-");
        }
        return defaultMarket;
    }

}
