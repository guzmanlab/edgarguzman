import type { User } from '@supabase/auth-helpers-nextjs';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useState } from 'react';

type Props = {
    user: User;
    data: any;
};

const Protected: NextPage<Props> = ({ user, data }) => {
    const [profile] = useState(data);

    return (
        <section>
            <h1 className='title font-bold text-4xl'>Protected content for {user.email}</h1>

            <br className='my-0' />

            <pre>{JSON.stringify(profile, null, 2)}</pre>

            <br className='my-0' />

            <pre>{JSON.stringify(user, null, 2)}</pre>
        </section>
    );
};

// export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
//     // Create authenticated Supabase Client
//     const supabase = createServerSupabaseClient(ctx);
//     // Check if we have a session
//     const {
//         data: { session }
//     } = await supabase.auth.getSession();

//     if (!session) {
//     {return {
//         redirect: {
//             destination: '/',
//             permanent: false,
//             }
//     };
//     }

//     // // Run queries with RLS on the server
//     // const { data } = await supabase.from('').select('*');

//     // return {
//     //     props: {
//     //         initialSession: session,
//     //         user: session.user,
//     //         data: data ?? []
//     //     },
//     // };

//     // Retrieve provider_token & logged in user's third-party id from metadata
//     const { provider_token, user } = session;
//     const userId = user.user_metadata.user_name;

//     const allRepo = await (
//         await fetch(`https://api.github.com/search/repositories?q=user:${userId}`, {
//             method: 'GET',
//             headers: {
//                 Authorization: `token ${provider_token}`
//             },
//         })
//     ).json();

//     return {
//         props: {
//             user,
//             allRepo
//         },
//     };
// };

export default Protected;
