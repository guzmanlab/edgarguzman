import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
// import Script from 'next/script';

import { Head, Layout } from '../components';
import '../styles/wireframe.scss';

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <>
            {/* <Script className=''>
                {`console.log('Script has loaded')`}
                <Test />
            </Script> */}
            {/* <Script
                className=''
                dangerouslySetInnerHTML={{
                    __html: `document.getElementById('banner').classList.remove('hidden')`
                }}
            /> */}
            {/* <Script
                src='../scripts/components/Test.ts'
                // src='../scripts/components/Test'
                // src='../scripts/wireframe'
                strategy='lazyOnload'
                onLoad={() => {
                    console.log('Script has loaded')
                }}
            /> */}
            {/* <Script
                src="/scripts/components/Test.ts"
                strategy="lazyOnload"
            // type='text/javascript'
            // onLoad={() =>
            //     console.log(`script loaded correctly, window.FB has been populated`)
            // }
            /> */}
            <Layout>
                <Head />
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </Layout>
        </>
    );
};

export default MyApp;
