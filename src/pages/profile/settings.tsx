// @pages/profile/settings
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Imagry, Title } from '@components';
import config from '@lib/configuration';
import { supabase } from '@lib/supabase';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { username }: any = params;

    const { data: information, error } = await supabase.from('users').select().filter('username', 'eq', String(username)).single();

    if (!information) {
        return {
            notFound: true
        };
    }

    if (error) {
        console.log(error);
        throw new Error(`${error}`);
    }

    return {
        props: {
            information
        }
    };
};

const Profile: NextPage = ({ information }: any) => {
    const supa_hello = supabase.auth.getUser();
    console.log(supa_hello);
    console.log(information);

    const router = useRouter();
    // const { data: session, status } = useSession();
    // const loading = status === 'loading';

    if (router.isFallback) {
        return <div>{config.env.LOADING || 'loading'}</div>;
    }

    return (
        <>
            <Title title={information ? `${information.full_name}` : ''} />

            <section>
                {/* <NextImage src={information ? `${information.image}` : ''} alt={information ? `${information.username}` : ''} width={100} height={100} style={{ outlineWidth: '0.0625rem', outlineStyle: 'solid', outlineColor: '#000000', borderRadius: '3.125rem', backgroundColor: '#ffff00', overflow: 'hidden', display: 'grid', placeItems: 'center center', marginBlock: '1.25rem', marginInline: '0' }} /> */}

                <h1 className='title font-bold text-2xl'>{information ? `${information.username}` : ''}</h1>

                <br className='my-20' />

                <desc className='font-mono'>{information ? `${information.username}` : ''}</desc>
            </section>
        </>
    );
};

export default Profile;
