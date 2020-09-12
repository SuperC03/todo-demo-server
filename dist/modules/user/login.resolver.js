"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const google_1 = require("../config/google");
const jwt_1 = require("../config/jwt");
const user_entity_1 = require("../../entities/user.entity");
const login_entity_1 = require("./entities/login.entity");
const google_login_input_1 = require("./dto/google-login.input");
const google_error_1 = require("../errors/google.error");
let LoginResolver = class LoginResolver {
    loginWithGoogle(ctx, input) {
        return __awaiter(this, void 0, void 0, function* () {
            const verify = yield google_1.googleLogin(input.token);
            if (!verify) {
                throw new google_error_1.GoogleError('Could not Login with Google');
            }
            let user = yield user_entity_1.User.findOne({ where: { email: verify.email } });
            if (!user) {
                user = new user_entity_1.User();
                user.firstName = verify.given_name;
                user.lastName = verify.family_name;
                user.email = verify.email;
                user.imageURL = verify.picture;
                user.password = null;
                user.save();
            }
            ctx.res.cookie('r', jwt_1.generateToken(user.id, 'refresh'), {
                maxAge: Date.now() + 1000 * 60 * 60 * 24,
                httpOnly: true,
            });
            return {
                user,
                token: jwt_1.generateToken(user.id, 'access'),
            };
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => login_entity_1.LoginUser),
    __param(0, type_graphql_1.Ctx()),
    __param(1, type_graphql_1.Arg('input', { nullable: false })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, google_login_input_1.GoogleLoginInput]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "loginWithGoogle", null);
LoginResolver = __decorate([
    type_graphql_1.Resolver(() => user_entity_1.User)
], LoginResolver);
exports.LoginResolver = LoginResolver;
//# sourceMappingURL=login.resolver.js.map