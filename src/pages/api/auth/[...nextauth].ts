// @pages/api/auth/[...nextauth].ts
// import NextAuth, { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
// import DiscordProvider from 'next-auth/providers/discord';
// import EmailProvider from 'next-auth/providers/email';
// import GithubProvider from 'next-auth/providers/github';
// import GoogleProvider from 'next-auth/providers/google';
// // Prisma adapter for NextAuth, optional and can be removed
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// // Supabase adapter for NextAuth, optional and can be removed
// import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import { readFileSync } from 'fs';
import Handlebars from 'handlebars';
// import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import path from 'path';

// import { env } from '@env/server.mjs';
// import { prisma } from '@server/db/client';

// const secret = process.env.NEXTAUTH_SECRET;

const transporter = nodemailer.createTransport({
    // host: process.env.EMAIL_SERVER_HOST,
    // port: Number(process.env.EMAIL_SERVER_PORT),
    // auth: {
    //     user: process.env.EMAIL_SERVER_USER,
    //     pass: process.env.EMAIL_SERVER_PASSWORD,
    // },
    // secure: process.env.NODE_ENV === 'production',

    host: env.EMAIL_SERVER_HOST,
    port: Number(env.EMAIL_SERVER_PORT),
    auth: {
        user: env.EMAIL_SERVER_USER,
        pass: env.EMAIL_SERVER_PASSWORD
    },
    secure: env.NODE_ENV === 'production'
});

const emailsDir = path.resolve(process.cwd(), 'emails');

export const sendVerificationRequest = ({ identifier, url }: any) => {
    const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
        encoding: 'utf8'
    });
    const emailTemplate = Handlebars.compile(emailFile);
    transporter.sendMail({
        from: `"✨ Edgar Guzman" ${process.env.EMAIL_FROM}`,
        to: identifier,
        subject: 'Your sign-in link for Edgar Guzman',
        html: emailTemplate({
            base_url: process.env.NEXTAUTH_URL,
            signin_url: url,
            email: identifier
        })
    });
};

export const sendWelcomeEmail = ({ user }: any) => {
    const { email } = user;

    try {
        const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
            encoding: 'utf8'
        });
        const emailTemplate = Handlebars.compile(emailFile);
        transporter.sendMail({
            from: `"✨ Edgar Guzman" ${process.env.EMAIL_FROM}`,
            to: email,
            subject: 'Welcome to Edgar Guzman',
            html: emailTemplate({
                base_url: process.env.NEXTAUTH_URL,
                support_email: 'support@edgarguzman.co'
            })
        });
    } catch (error) {
        console.log(`❌ Unable to send welcome email to user (${email})`);
    }
};

// export const authOptions: NextAuthOptions = {
//     // Include user.id on session
//     callbacks: {
//         // session({ session, user }) {
//         //     if (session.user) {
//         //         session.user.id = user.id;
//         //     }
//         //     return session;
//         // },
//         // Version 2 : Supabase
//         async session({ session, user }) {
//             const signingSecret = process.env.SUPABASE_JWT_SECRET;
//             if (signingSecret) {
//                 const payload = {
//                     aud: 'authenticated',
//                     exp: Math.floor(new Date(session.expires).getTime() / 1000),
//                     sub: user.id,
//                     email: user.email,
//                     role: 'authenticated',
//                 };
//                 session.supabaseAccessToken = jwt.sign(payload, signingSecret);
//             }
//             return session;
//         },
//     },
//     // Configure one or more authentication providers
//     // adapter: PrismaAdapter(prisma),
//     adapter: SupabaseAdapter({
//         url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
//         secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
//     }),
//     secret: secret,
//     providers: [
//         DiscordProvider({
//             clientId: env.DISCORD_CLIENT_ID,
//             clientSecret: env.DISCORD_CLIENT_SECRET,
//         }),
//         GithubProvider({
//             clientId: env.GITHUB_CLIENT_ID,
//             clientSecret: env.GITHUB_CLIENT_SECRET,
//         }),
//         GoogleProvider({
//             clientId: env.GOOGLE_CLIENT_ID,
//             clientSecret: env.GOOGLE_CLIENT_SECRET,
//         }),
//         EmailProvider({
//             sendVerificationRequest,
//             maxAge: 10 * 60, // Magic links are valid for 10 min only
//         }),
//         // ...add more providers here
//     ],
//     theme: {
//         colorScheme: 'dark',
//     },
//     // pages
//     // pages: {
//     //     signIn: '/auth/signin',
//     //     signOut: '/auth/signout',
//     //     // newUser: '/auth/signup',
//     //     verifyRequest: '/auth/verify-request',
//     //     // Version 2
//     //     // signIn: '/',
//     //     // signOut: '/',
//     //     // error: '/',
//     //     // verifyRequest: '/',
//     // },
//     events: {
//         createUser: sendWelcomeEmail,
//     },
// };

// export default NextAuth(authOptions);

// Version 2

import NextAuth, { type NextAuthOptions } from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import DiscordProvider from 'next-auth/providers/discord';
import FacebookProvider from 'next-auth/providers/facebook';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
// import AppleProvider from "next-auth/providers/apple"
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import jwt from 'jsonwebtoken';
import EmailProvider from 'next-auth/providers/email';

import { env } from '@env/server.mjs';
import { prisma } from '@server/db/client';

const secret = process.env.NEXTAUTH_SECRET;

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        // EmailProvider({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST ?? '',
        //         port: Number(process.env.EMAIL_SERVER_PORT) ?? '',
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER ?? '',
        //             pass: process.env.EMAIL_SERVER_PASSWORD ?? '',
        //         },
        //         from: process.env.EMAIL_FROM ?? '',
        //         secure: process.env.NODE_ENV === 'production',
        //     }
        // }),
        /*
        // Temporarily removing the Apple provider from the demo site as the
        // callback URL for it needs updating due to Vercel changing domains
    
        Providers.Apple({
          clientId: process.env.APPLE_ID,
          clientSecret: {
            appleId: process.env.APPLE_ID,
            teamId: process.env.APPLE_TEAM_ID,
            privateKey: process.env.APPLE_PRIVATE_KEY,
            keyId: process.env.APPLE_KEY_ID,
          },
        }),
        */
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        // }),
        DiscordProvider({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET
        }),
        GithubProvider({
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET,
        // }),
        // Auth0Provider({
        //     clientId: process.env.AUTH0_CLIENT_ID,
        //     clientSecret: process.env.AUTH0_CLIENT_SECRET,
        //     issuer: process.env.AUTH0_CLIENT_ISSUER,
        // }),
        EmailProvider({
            // server: {
            //     host: env.EMAIL_SERVER_HOST!,
            //     port: Number(env.EMAIL_SERVER_PORT)!,
            //     auth: {
            //         user: env.EMAIL_SERVER_USER!,
            //         pass: env.EMAIL_SERVER_PASSWORD!,
            //     },
            //     from: env.EMAIL_FROM!,
            //     secure: env.NODE_ENV === 'production',
            // },

            sendVerificationRequest,
            maxAge: 10 * 60 // Magic links are valid for 10 min only
        })
    ],
    secret,
    theme: {
        colorScheme: 'auto',
        brandColor: '#000000', // Hex color code #33FF5D
        logo: '/images/icon-egg.svg' // Absolute URL to image
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true;
            // Allows relative callback URLs
            if (isAllowedToSignIn) {
                return true;
            }
            // Return false to display a default error message
            return false;
            // Or you can return a URL to redirect to:
            // return '/unauthorized'
        },

        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith('/')) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        },

        async jwt({ token }) {
            token.userRole = 'admin';
            return token;
        },

        async session({ session, token, user }) {
            const signingSecret = process.env.SUPABASE_JWT_SECRET;
            if (signingSecret) {
                const payload = {
                    aud: 'authenticated',
                    exp: Math.floor(new Date(session.expires).getTime() / 1000),
                    sub: user.id,
                    email: user.email,
                    role: 'authenticated'
                };
                session.supabaseAccessToken = jwt.sign(payload, signingSecret);
                // session.user.id = token.id;
            }
            return session;
        }
    },
    // adapter: PrismaAdapter(prisma),
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    }),

    // adapter: PrismaAdapter(prisma),
    pages: {
        error: '/auth/error',
        newUser: '/auth/signup',
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        verifyRequest: '/auth/verify-request'
    }
};

export default NextAuth(authOptions);
