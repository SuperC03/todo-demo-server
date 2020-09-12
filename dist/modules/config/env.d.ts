export declare const env: Readonly<{
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    GOOGLE_CLIENT: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    SERVER_PORT: number;
}> & import("envalid").CleanEnv & {
    readonly [varName: string]: string;
};
//# sourceMappingURL=env.d.ts.map