import { STATUS_CODES } from "http";
import { constants } from "node:http2";

class ErrorHandler extends Error {
    code: number;
    message: string;
    constructor(code: number, message = "") {
        super(message);
        this.message = message;
        this.code = code;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message = STATUS_CODES[constants.HTTP_STATUS_BAD_REQUEST]) {
        throw new ErrorHandler(constants.HTTP_STATUS_BAD_REQUEST, message);
    }

    static notFound(message = STATUS_CODES[constants.HTTP_STATUS_NOT_FOUND]) {
        throw new ErrorHandler(constants.HTTP_STATUS_NOT_FOUND, message);
    }

    static unAuthorized(message = STATUS_CODES[constants.HTTP_STATUS_UNAUTHORIZED]) {
        throw new ErrorHandler(constants.HTTP_STATUS_BAD_REQUEST, message);
    }

    static forbidden(message = STATUS_CODES[constants.HTTP_STATUS_FORBIDDEN]) {
        throw new ErrorHandler(constants.HTTP_STATUS_FORBIDDEN, message);
    }

    static unprocessableEntity(
        message = STATUS_CODES[constants.HTTP_STATUS_UNPROCESSABLE_ENTITY],
        errors = {}
    ) {
        throw new ErrorHandler(constants.HTTP_STATUS_UNPROCESSABLE_ENTITY, message);
    }

    static internalServerError(message = STATUS_CODES[constants.HTTP_STATUS_INTERNAL_SERVER_ERROR]) {
        throw new ErrorHandler(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR, message);
    }

}

export default ErrorHandler;