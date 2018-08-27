const axios = require('axios');

import CryptoUtils from "../utils/crypto-utils";

export default class BittrexDAO {

    static get myName() {
        return "Bittrex";
    }

    static async getOrderBook(market) {
        const bittrexMarket = new String(market).toUpperCase().replace(/_/g,"-");
        console.log("Bittrex Market: " + bittrexMarket);
        return axios.get(
            'https://bittrex.com/api/v1.1/public/getorderbook?market='
            + bittrexMarket + '&type=both')
        .then((book) => {
            return {
                'bid': book.data.result.buy.reduce((bids, price) => {
                    return Object.assign({}, bids, {
                      [CryptoUtils.normalizePrice(price.Rate)]: price.Quantity
                    });
                }, {}),
                'ask': book.data.result.sell.reduce((asks, price) => {
                    return Object.assign({}, asks, {
                      [CryptoUtils.normalizePrice(price.Rate)]: price.Quantity
                    });
                }, {})
            };
        });
    }

}
