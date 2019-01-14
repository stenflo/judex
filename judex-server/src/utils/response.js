import _ from "lodash";

export default class ResponseUtil {
    static async send(ctx, data, message, status) {
        let json = {
            message: message
        };

        if (data) { _.merge(json, data); }

        const response = ctx.response;
        response.status = status;
        response.body = json;
    }

    static async success(ctx, data = null, message = "The request was successful.") {
        this.send(ctx, data, message, 200);
    }

    static async badRequest(ctx, data = null, message = "You provided incorrect or invalid parameters.") {
        this.send(ctx, data, message, 400);
    }

}
