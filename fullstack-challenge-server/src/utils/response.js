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

    static async created(ctx, data = null, message = "The resource was created.") {
        this.send(ctx, data, message, 201);
    }

    static async asyncCreated(ctx, data = null, message = "The resource was created asynchronously.") {
        this.send(ctx, data, message, 202);
    }

    static async badRequest(ctx, data = null, message = "You provided incorrect or invalid parameters.") {
        this.send(ctx, data, message, 400);
    }

    static async unauthorized(ctx, data = null, message = "You are not authorized to access this resource.") {
        this.send(ctx, data, message, 401);
    }

    static async overQuota(ctx, data = null, message = "You have exceeded your API quota.") {
        this.send(ctx, data, message, 402);
    }

    static async notFound(ctx, data = null, message = "This resource does not exist.") {
        this.send(ctx, data, message, 404);
    }

    static async serverError(ctx, data = null, message = "Something went wrong. Please try again.") {
        this.send(ctx, data, message, 500);
    }
}
