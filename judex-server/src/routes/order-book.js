import Router from "koa-router";

import OrderBookController from "../controllers/order-book";

const router = new Router({
    prefix: "/api/v1"
});

router.get("/market/:market/orderbook", OrderBookController.getBook);

export default router;
