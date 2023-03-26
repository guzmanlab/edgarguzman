// # A Configuration File

const config = {
    env: {
        // NODE Environment - development OR production
        NODE_ENV: 'development',
        PORT: Number(3000),

        // Database URI Information
        DATABASE_URL: 'postgresql://postgres:vSDQWj9S4LgGJwqa@db.ulrnribxosacifhrdaak.supabase.co:5432/mydb?pgbouncer=true&connection_limit=1',
        SHADOW_DATABASE_URL: 'postgresql://postgres:vSDQWj9S4LgGJwqa@db.ulrnribxosacifhrdaak.supabase.co:5432/mydb?schema=public/postgres_shadow',

        // Configuration
        COMPANY_NAME: 'Edgar Guzman',
        PHONE_NUMBER: '(xxx) xxx-xxxx',
        SITE_URL: 'https://edgarguzman.co',
        SITE_DEVELOPMENT_URL: 'http://localhost:3000',
        SITE_PROTOTYPE_URL: 'http://localhost:6006',
        SITE_FAVICON: '/images/favicon.ico',
        SITE_LOGO: '/images/logo.svg',
        SITE_LOGO_SQUARE: '/images/logox200.svg',
        EMAIL_ADDRESS: 'admin@edgarguzman.co',
        TWITTER: 'https://twitter.com/edgaralexisguz',
        TWITTER_HANDLE: '@edgaralexisguz',
        FACEBOOK: 'https://www.facebook.com/edgaralexisguz',
        INSTAGRAM: 'https://www.instagram.com/edgaralexisguzman',
        LINKEDIN: 'https://www.linkedin.com/in/edgaralexisguzman',

        NOT_FOUND_IMAGE: '/images/not-found.svg',

        NEXT_FONT_FAMILIAR: '@lib/fonts/Familiar Pro-Bold.otf',
        NEXT_FONT_ARIAL: '@lib/fonts/arial.ttf',
        NEXT_FONT_ARIAL_ITALIC: '@lib/fonts/ariali.ttf',
        NEXT_FONT_ARIAL_BOLD_ITALIC: '@lib/fonts/arialbi.ttf',
        NEXT_FONT_ARIAL_BOLD: '@lib/fonts/arialb.ttf',
        NEXT_FONT_ARIAL_BLACK: '@lib/fonts/ariblk.ttf',
        NEXT_FONT_TYPE_NORMAL: 'normal',
        NEXT_FONT_TYPE_ITALIC: 'italic',
        NEXT_FONT_WEIGHT_400: '400',
        NEXT_FONT_WEIGHT_600: '600',
        NEXT_FONT_WEIGHT_700: '700',
        NEXT_FONT_WEIGHT_900: '900',

        LOADING: 'Loading...',

        // Next Auth
        NEXTAUTH_SECRET: `z7JkceuxEw7kfUn7ohL/Em2TFDKHbyyI0JU8Prfo+GvZL04GU1ndDj78sjSMxrTN
p5rO0cl0r/uRk68sKlHIRkeN1WsWqbAyThFPVRFnP6jZK6wZaul3ISVP/O/4bsF7
062qV/BVjCa+BfC581Z6epsud4CQNPVasG/JAd2r1GAyyIFpZ7Ds6u2Xe0Pf7OPg
xdPGqqyCl4gzrbP8tl84cQtuZYSFQHnSJQTAgAjqKDTNF7DKEHdBvkjKrDzMDCu8
YiV1zaC4d6VKc+71T/fxt5Dstl6cL6rdGVzYxltIcCKypY5JiYEIysUyU68/lPHl
0q/p5Zz2ELWRMYCg0Lo5QrrN1U4BaWIp7KInT5PiZpzBeskFKz1ZGC/uKk4gEmvf
x5l2UoGE0aRM8sQor7CfR8greVEaHumtnQKPhUmUFAEAlg`,
        NEXTAUTH_URL: 'http://localhost:3000/api/auth',

        // Next Auth Supabase Database
        NEXT_PUBLIC_SUPABASE_URL: 'https://ulrnribxosacifhrdaak.supabase.co',
        NEXT_PUBLIC_SUPABASE_ANON_KEY:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5ZGtxbmNmcXRkdGpmc2hqeHB6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NTcxMjg5OSwiZXhwIjoxOTkxMjg4ODk5fQ.DR6Pkw--TbDDbuJbvS3_Q_QJj1tTP4cyDYtZoerMToA',
        SUPABASE_SERVICE_ROLE_KEY:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscm5yaWJ4b3NhY2lmaHJkYWFrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzgxMDY2OCwiZXhwIjoxOTkzMzg2NjY4fQ.IPfk42De8GguFNUjDHX5PpqSPm27Mqu6C-iSQvZjHLc',
        SUPABASE_JWT_SECRET: 'S9KXxfFKYkklK/ZA5NV8W390I4T57wEo+Z9D7nIW4RlLGr6ZjJNZbv23Lu7MtSuGoLpBoMtxt13lmnbkbi5+Yg==',
        SUPABASE_BUCKET: 'public',

        // Next Auth Discord Provider
        DISCORD_CLIENT_ID: '1070805587996192868',
        DISCORD_CLIENT_SECRET: 'MTA3MDgwNTU4Nzk5NjE5Mjg2OA.GPHQc3.uaQ - UcrLLGevZ15xxPvEN1tEQNRVP8VrjIrfR4',

        // Next Auth GitHub OAuth Provider
        GITHUB_CLIENT_ID: '49de7604160212c7e3a9',
        GITHUB_CLIENT_SECRET: '910aa70fa1be997039fb11bf6eb7e198dd002b24',

        // Next Auth Google OAuth Provider
        GOOGLE_CLIENT_ID: '102295972469-rv0ijhcljabp459qcqgjenjrhpfjcgm2.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',

        // Next Auth Email Credentials Provider
        EMAIL_SERVER_HOST: 'sandbox.smtp.mailtrap.io',
        EMAIL_SERVER_PORT: '2525',
        EMAIL_SERVER_USER: '33d11df49fdd00',
        EMAIL_SERVER_PASSWORD: '7def19b80dc39e',
        EMAIL_FROM: 'no-reply@edgarguzman.co',

        // Stripe
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: '',
        STRIPE_SECRET_KEY: '',
        STRIPE_PRICE_ID: '',
        STRIPE_WEBHOOK_SECRET: ''
    }
};

export default config;
