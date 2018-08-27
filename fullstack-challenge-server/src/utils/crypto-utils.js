export default class CryptoUtils {

    /**
     * provide consistent string repersentation for price points,
     * removing extraneous zeros, for example: 0.04120000 ==> 0.0412
     */
    static normalizePrice(price) {
        let pricePointStr = Number.parseFloat(price).toFixed(8);
        return (pricePointStr.indexOf('.') >= 0) ?
        pricePointStr.replace(/0+$/, "") : pricePointStr;
    }

}
