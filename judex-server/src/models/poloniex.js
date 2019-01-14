const axios = require('axios');

import CryptoUtils from "../utils/crypto-utils";

export default class PoloniexDAO {

    static get myName() {
        return "Poloniex";
    }

    static async getOrderBook(market) {
        const poloniexMarket = new String(market).toUpperCase().replace(/-/g,"_");
        console.log("Poloniex Market: " + poloniexMarket);
        return axios.get(
            'https://poloniex.com/public?command=returnOrderBook&currencyPair='
            + poloniexMarket + '&depth=100')
        .then((book) => {
            return {
                'bid': book.data.bids.reduce((bids, price) => {
                    return Object.assign({}, bids, {
                      [CryptoUtils.normalizePrice(price[0])]: price[1]
                    });
                }, {}),
                'ask': book.data.asks.reduce((asks, price) => {
                    return Object.assign({}, asks, {
                      [CryptoUtils.normalizePrice(price[0])]: price[1]
                    });
                }, {})
            };
        });
    }

}
