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
exports.initDB = void 0;
const typeorm_1 = require("typeorm");
const env_1 = require("./env");
exports.initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield typeorm_1.createConnection({
        type: 'postgres',
        host: env_1.env.DATABASE_HOST,
        port: env_1.env.DATABASE_PORT,
        username: env_1.env.DATABASE_USERNAME,
        password: env_1.env.DATABASE_PASSWORD,
        name: env_1.env.DATABASE_USERNAME,
        entities: ['../entities/*.entity.{js,ts}'],
        logging: true,
        synchronize: env_1.env.isDevelopment,
    });
    if (!connection) {
        throw new Error('Could not Connect to Dabase');
    }
    return connection;
});
//# sourceMappingURL=db.js.map