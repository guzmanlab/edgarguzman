// @componentry/authentication/Auth.tsx
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import type { NextPage } from 'next';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import NextLink from 'next/link';
// import { useState } from 'react';

// // import { Imagry, Title } from '../../components';
// // import config from '../../lib/config';
// // import { supabase } from '../../lib/supabase'

// const Auth: NextPage = () => {
//     const supabase = useSupabaseClient();

//     const [loading, setLoading,] = useState(false,);
//     const [email, setEmail,] = useState('',);

//     const handleSignin = async (e: any,) => {
//         e.prevent();

//         try {
//             setLoading(true,);
//             const { error, } = await supabase.auth.signInWithOtp({ email, });
//             if (error) throw error;
//             alert('Check your email for the login link!',);
//         } catch (error: any) {
//             alert(error.error_description || error.message,);
//         } finally {
//             setLoading(false,);
//         }
//     };

//     return (
//         <>
//             {/* <Title /> */}

//             <section className='container mx-auto text-center w-72'>
//                 <div className='col-6 form-widget" aria-live="polite'>
//                     <h1 className='title header text-3xl py-3 text-gray-600'>Sign in</h1>

//                     <br className='my-0' />

//                     <desc className='text-xs text-gray-500 pb-3'>Sign in via magic link with your email below</desc>

//                     {loading ? (
//                         'Sending magic link...'
//                     ) : (
//                         <form onSubmit={handleSignin}>
//                             <input
//                                 id='website'
//                                 className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
//                                 type='email'
//                                 name='email'
//                                 aria-placeholder='your@email.com'
//                                 placeholder='your@email.com'
//                                 value={email}
//                                 onChange={e, => setEmail(e.target.value,)}
//                             />
//                             <br className='m-0 p-0' />
//                             <div>
//                                 <input
//                                     id='website'
//                                     className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
//                                     type='email'
//                                     name='email'
//                                     aria-placeholder='your@email.com'
//                                     placeholder='your@email.com'
//                                     value={email}
//                                     onChange={e, => setEmail(e.target.value,)}
//                                 />
//                             </div>
//                             <br className='m-0 p-0' />
//                             <button className='my-3 w-36 text-xs h-8 rounded-full text-gray-50 bg-indigo-600 hover:bg-indigo-700'>Send magic link</button>
//                         </form>
//                     )}
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Auth;

// un-comment this above

// this is template

import type { NextPage } from 'next';

type Props = {};

const Auth: NextPage<Props> = props => {
    return (
        <>
            <div>Auth</div>
        </>
    );
};

export default Auth;
