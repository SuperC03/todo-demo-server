"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const envalid_1 = require("envalid");
exports.env = envalid_1.cleanEnv(process.env, {
    DATABASE_HOST: envalid_1.str(),
    DATABASE_PORT: envalid_1.port(),
    DATABASE_USERNAME: envalid_1.str(),
    DATABASE_PASSWORD: envalid_1.str(),
    DATABASE_NAME: envalid_1.str(),
    GOOGLE_CLIENT: envalid_1.str(),
    ACCESS_TOKEN_SECRET: envalid_1.str(),
    REFRESH_TOKEN_SECRET: envalid_1.str(),
    SERVER_PORT: envalid_1.port(),
});
//# sourceMappingURL=env.js.map