// @pages/_app.tsx
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Session as SessionSupabase, SessionContextProvider } from '@supabase/auth-helpers-react';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/app';
import { useState } from 'react';

import { trpc } from '@utils/trpc';

import { Layout } from '@components';
import '@styles/wireframe.scss';

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
};

export default trpc.withTRPC(MyApp);

// const MyApp: AppType<{ initialSession: SessionSupabase | null }> = ({ Component, pageProps }) => {
//     const [supabaseClient] = useState(() => createBrowserSupabaseClient());

//     return (
//         <Layout>
//             <SessionContextProvider
//                 supabaseClient={supabaseClient}
//                 initialSession={pageProps.initialSession}>
//                 <Component {...pageProps} />
//             </SessionContextProvider>
//         </Layout>
//     );
// };

// export default trpc.withTRPC(MyApp);
