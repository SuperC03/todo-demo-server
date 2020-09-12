"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("./env");
exports.generateToken = (id, type) => {
    return jsonwebtoken_1.default.sign({
        sub: id,
    }, type == 'access' ? env_1.env.ACCESS_TOKEN_SECRET : env_1.env.REFRESH_TOKEN_SECRET, {
        expiresIn: type == 'access' ? 60 * 15 : 60 * 60 * 24,
    });
};
//# sourceMappingURL=jwt.js.map