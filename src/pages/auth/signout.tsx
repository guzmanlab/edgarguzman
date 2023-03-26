// @pages/auth/signout.tsx
import { signOut, useSession } from 'next-auth/react';

import { Title } from '@components';

const SignOut = () => {
    return (
        <>
            <Title title='Sign Out' />

            {/* <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider> */}
            <div>Sign Out</div>
        </>
    );
};

export default SignOut;
