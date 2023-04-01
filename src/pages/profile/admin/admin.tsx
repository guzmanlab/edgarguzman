// @pages/profile/admin/admin.tsx
import type { GetServerSideProps, NextPage } from 'next';

import { SidebarLayout, Title } from '@components';
import { supabase } from '@lib/supabase';

type Props = {};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // Create authenticated Supabase Client
    const { userUsername }: any = params;
    // Check if we have a session
    // const {
    //     data: user, error
    // } = await supabase.auth.getUser();
    const { data: user, error } = await supabase.from('users').select().filter('username', 'eq', String(userUsername)).single();

    if (!user) {
        return {
            notFound: true
        };
    }

    if (error) {
        console.log('error: ', error);
        throw new Error(`${error}`);
    }

    return {
        props: {
            initialSession: user,
            user
        }
    };
};

const Administration: NextPage<Props> = ({ user }: any) => {
    return (
        <>
            <Title title='Admin Page' />

            <SidebarLayout>
                <h1>Admin Page</h1>
                <div>Hello {user.name}</div>
            </SidebarLayout>
        </>
    );
};

export default Administration;
