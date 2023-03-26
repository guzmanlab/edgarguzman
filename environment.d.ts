declare namespace NodeJS {
    export interface ProcessEnv {
        readonly NODE_ENV: string;

        readonly COMPANY_NAME: string;
        readonly SITE_URL: string;
        readonly SITE_DEVELOPMENT_URL: string;
        readonly SITE_STORYBOOK_DEVELOPMENT_URL: string;

        readonly DATABASE_URL: string;
        readonly SHADOW_DATABASE_URL: string;

        readonly NEXTAUTH_SECRET: string;
        readonly DISCORD_CLIENT_SECRET: string;

        readonly GITHUB_CLIENT_ID: string;
        readonly GITHUB_CLIENT_SECRET: string;

        readonly GOOGLE_CLIENT_ID: string;
        readonly GOOGLE_CLIENT_SECRET: string;

        readonly EMAIL_SERVER_HOST: string;
        readonly EMAIL_SERVER_PORT: string;
        readonly EMAIL_SERVER_USER: string;
        readonly EMAIL_SERVER_PASSWORD: string;
        readonly EMAIL_FROM: string;

        readonly NEXT_PUBLIC_SUPABASE_URL: string;
        readonly NEXT_PUBLIC_SUPABASE_REDIRECT_URL: string;
        readonly NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
        readonly SUPABASE_SERVICE_ROLE_KEY: string;
        readonly SUPABASE_JWT_SECRET: string;
        readonly SUPABASE_BUCKET: string;
        readonly IMAGE_SERVER: string;
    }
}
