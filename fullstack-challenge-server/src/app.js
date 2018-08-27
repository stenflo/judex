import dotenv from "dotenv/config";
import BodyParser from "koa-bodyparser";
import Koa from "koa";
import Logger from "koa-logger";
import router from "./routes";

const app = new Koa();
const cors = require("@koa/cors");

app.use(function(ctx, next) {
    return next().catch(err => {
        if (err.status === 401) {
            ctx.status = 401;
            ctx.body = {
                error: err.originalError
                    ? err.originalError.message
                    : err.message
            };
        } else {
            throw err;
        }
    });
});

// Enable middleware
app.use(Logger());
app.use(BodyParser());
app.use(cors());
app.use(router);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`);
});
