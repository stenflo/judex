import OrderBook from "../models/order-book";
import Response from "../utils/response";

export default class OrderBookController {

    /**
     * Method for obtaining aggregated order books from multiple exchanges
     * @param ctx - The current request context
     * @param next - The next state to transition to
     */
    static async getBook(ctx, next) {
        const market = ctx.params['market'];
        const exch1 = ctx.request.query.exch1;
        const exch2 = ctx.request.query.exch2;
        try {
            const book = await OrderBook.getOrderBook({ market, exch1, exch2 });
            return Response.success(ctx, { book }, "Cross-Exchange Order Book");
        }
        catch (e) {
            return Response.badRequest(ctx, null, "Error");
        }
    }

}
