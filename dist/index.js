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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const type_graphql_1 = require("type-graphql");
const apollo_server_express_1 = require("apollo-server-express");
const env_1 = require("./modules/config/env");
const db_1 = require("./modules/config/db");
const bootstrap = () => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.initDB();
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            __dirname + '/**/*.resolver.{js,ts}'
        ],
    });
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        context: ({ req, res }) => {
            return { req, res, user: null };
        },
        engine: {
            reportSchema: true,
            graphVariant: 'current'
        }
    });
    const app = express_1.default();
    app.use(cookie_parser_1.default);
    app.use(body_parser_1.default);
    server.applyMiddleware({ app });
    const PORT = env_1.env.SERVER_PORT | 8080;
    app.listen(PORT, () => {
        console.log('App Listening on Port %d', PORT);
    });
});
bootstrap();
//# sourceMappingURL=index.js.map