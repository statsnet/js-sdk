"use strict";
class ClientError extends Error {
    constructor(endpoint, statusCode, responseContent) {
        super();
        this.endpoint = endpoint;
        this.statusCode = statusCode;
        this.responseContent = responseContent;
    }
}
class InvalidParamsError extends Error {
    constructor(message, key, value) {
        super(message);
        this.key = key;
        this.value = value;
    }
}
