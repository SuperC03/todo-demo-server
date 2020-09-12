import { Context } from '../types/context.interface';
import { LoginUser } from './entities/login.entity';
import { GoogleLoginInput } from './dto/google-login.input';
export declare class LoginResolver {
    loginWithGoogle(ctx: Context, input: GoogleLoginInput): Promise<LoginUser>;
}
//# sourceMappingURL=login.resolver.d.ts.map