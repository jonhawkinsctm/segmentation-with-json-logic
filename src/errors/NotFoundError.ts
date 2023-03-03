import { ErrorRequestHandler } from "express";

export class NotFoundError extends Error {
    constructor(message: string | undefined, public originalError: any) {
        super(message);
        this.name = "NotFoundError";
    }
}

export const notFoundMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof NotFoundError) {
        console.error(err);
        return res.status(404).send(err.message);
    }

    next(err);
};
