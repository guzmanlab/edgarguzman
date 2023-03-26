// # A Configuration File

const config = {
    env: {
        // NODE Environment - development OR production
        NODE_ENV: 'development',
        PORT: Number(3000),

        // Database URI Information
        DATABASE_URL: '',
        SHADOW_DATABASE_URL: '',

        // Configuration
        COMPANY_NAME: '',
        PHONE_NUMBER: '',
        SITE_URL: 'https://',
        SITE_DEVELOPMENT_URL: 'http://localhost:3000',
        SITE_PROTOTYPE_URL: 'http://localhost:6006',
        SITE_FAVICON: '/images/favicon.ico',
        SITE_LOGO: '/images/logo.svg',
        SITE_LOGO_SQUARE: '/images/logox200.svg',
        EMAIL_ADDRESS: '',
        TWITTER: 'https://twitter.com/',
        TWITTER_HANDLE: '',
        FACEBOOK: 'https://www.facebook.com/',
        INSTAGRAM: 'https://www.instagram.com/',
        LINKEDIN: 'https://www.linkedin.com/in/',

        NOT_FOUND_IMAGE: '/images/not-found.svg',

        LOADING: 'Loading...',

        // Next Auth
        NEXTAUTH_SECRET: '',
        NEXTAUTH_URL: 'http://localhost:3000/api/auth',

        // Next Auth Discord Provider
        DISCORD_CLIENT_ID: '',
        DISCORD_CLIENT_SECRET: '',

        // Next Auth GitHub OAuth Provider
        GITHUB_CLIENT_ID: '',
        GITHUB_CLIENT_SECRET: '',

        // Next Auth Google OAuth Provider
        GOOGLE_CLIENT_ID: '',
        GOOGLE_CLIENT_SECRET: '',

        // Next Auth Email Credentials Provider
        EMAIL_SERVER_HOST: '',
        EMAIL_SERVER_PORT: '',
        EMAIL_SERVER_USER: '',
        EMAIL_SERVER_PASSWORD: '',
        EMAIL_FROM: '',

        // Next Auth Supabase Database
        NEXT_PUBLIC_SUPABASE_URL: '',
        NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
        SUPABASE_SERVICE_ROLE_KEY: '',
        SUPABASE_JWT_SECRET: '',
        IMAGE_SERVER: ''
    }
};

export default config;
