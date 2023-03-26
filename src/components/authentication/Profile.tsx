// @components/authentication/Profile.tsx
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

const Profile: NextPage = ({ data }: any) => {
    const [user] = useState(data);

    return <section>Hello {user.name}</section>;
};

// export const getServerSideProps: GetServerSideProps = async ctx => {
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

//     return {
//         props: {
//             initialSession: session,
//             user: session.user
//         },
//     };
// };

export default Profile;
