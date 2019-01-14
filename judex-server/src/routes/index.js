import compose from "koa-compose";
import orderBookRouter from "./order-book";

const combineRouters = (routers) => {
    const combined = [];
    for (const r in routers) {
        const router = routers[r];
        combined.push(router.routes());
        combined.push(router.allowedMethods());
    }
    return compose(combined);
}

const router = combineRouters([orderBookRouter]);

export default router;
