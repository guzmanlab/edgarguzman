import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import { Layout } from '../components';
import '../styles/wireframe.scss';

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <Layout>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </Layout>
    );
};

export default MyApp;
