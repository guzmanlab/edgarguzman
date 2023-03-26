import { readFileSync } from 'fs';
import Handlebars from 'handlebars';
import nodemailer from 'nodemailer';
import path from 'path';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
    },
    secure: process.env.NODE_ENV === 'production'
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
