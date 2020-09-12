"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleError = void 0;
const apollo_server_express_1 = require("apollo-server-express");
class GoogleError extends apollo_server_express_1.ApolloError {
    constructor(msg) {
        super(msg, 'GOOGLE_ERROR');
    }
}
exports.GoogleError = GoogleError;
//# sourceMappingURL=google.error.js.map