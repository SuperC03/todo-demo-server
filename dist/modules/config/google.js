"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleLogin = void 0;
const google_auth_library_1 = require("google-auth-library");
const google_error_1 = require("../errors/google.error");
const env_1 = require("./env");
exports.googleLogin = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new google_auth_library_1.OAuth2Client(env_1.env.GOOGLE_CLIENT);
    try {
        const ticket = yield client.verifyIdToken({
            idToken: token,
            audience: env_1.env.GOOGLE_CLIENT,
        });
        return ticket.getPayload();
    }
    catch (_a) {
        throw new google_error_1.GoogleError('Could not Login with Google');
    }
});
//# sourceMappingURL=google.js.map