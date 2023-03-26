// @componentry/authentication/authentication.tsx
// import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
// import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
// import type { NextPage } from 'next';
// import { useEffect, useState } from 'react';

// import { Account, Footer, Header, Imagry, Linkaged } from '../../components';
// // import config from '../../lib/configuration';
// // import { prisma } from '../../lib/prisma';
// // import { supabase } from '../../lib/supabase'

// const Authentication: NextPage = () => {
//     const session = useSession();
//     const supabase = useSupabaseClient();

//     return (
//         <>
//             <Header />

//             <section
//                 className=''
//                 style={{ padding: '50px 0 100px 0' }}>
//                 {!session ? (
//                     <>
//                         <div>
//                             <div className='logo'>
//                                 <h1 className='logo'>NextAuth.js : Supabase Auth + Storage</h1>
//                                 <desc className=''>
//                                     Experience our Auth and Storage through a simple profile management example. Create a user profile and upload an avatar image. Fast, simple,
//                                     secure.
//                                 </desc>
//                             </div>

//                             <div className=''>
//                                 <>
//                                     <Auth
//                                         providers={['discord', 'github', 'google']}
//                                         supabaseClient={supabase}
//                                         appearance={{
//                                             theme: ThemeSupa
//                                         }}
//                                         redirectTo={`/${ThemeSupa}/admin`}
//                                         theme='dark'
//                                     />
//                                 </>
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <h3>Account</h3>
//                         <Account session={session} />
//                     </>
//                 )}
//             </section>

//             <Footer />
//         </>
//     );
// };

// export default Authentication;

// un-comment this above

// this is template

type Props = {};

const Authentication = (props: Props) => {
    return <div>Authentication</div>;
};

export default Authentication;
