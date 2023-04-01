// @page/profile/admin/[username].tsx
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Imagry, Loading, Title } from '@components';
import config from '@lib/configuration';
import { supabase } from '@lib/supabase';
import { trpc } from '@utils/trpc';

// export const getStaticPaths = async () => {
//     const { data } = await supabase.from('information').select('username');

//     const paths = data?.map(userInformation => ({
//         params: {
//             username: JSON.stringify(userInformation.username)
//         }
//     }));

//     return {
//         paths,
//         fallback: true
//     };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const { username }: any = params;

//     const { data, error } = await supabase.from('information').select().filter('username', 'id', String(username)).single();

//     if (!data) {
//         return {
//             notFound: true
//         };
//     }

//     if (error) {
//         console.log('error: ', error);
//         throw new Error(`${error}`);
//     }

//     return {
//         props: {
//             userInformation: data
//         }
//     };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { username }: any = params;

    const { data: userInformation, error } = await supabase.from('users').select().filter('username', 'eq', String(username)).single();

    if (!userInformation) {
        return {
            notFound: true
        };
    }

    if (error) {
        console.log(error);
        throw new Error(`${error}`);
    }

    console.log('users: ', userInformation);

    return {
        props: {
            userInformation
        }
    };
};

const Profile: NextPage = ({ userInformation }: any) => {
    console.log(supabase.auth.admin.listUsers());
    // console.log(userInformation);

    const router = useRouter();
    if (router.isFallback) {
        return <Loading />;
    }

    return (
        <>
            <Title title={userInformation ? `${userInformation.username}` : ''} />

            <section
                className='
                    flex
                    flex-col
                    align-center
                    space-between
                '>
                <div
                    className='
                        flex
                        align-center
                        space-between
                    '>
                    <div
                        style={{
                            outlineWidth: '0.0625rem',
                            outlineStyle: 'solid',
                            outlineColor: '#000000',
                            borderRadius: '3.125rem',
                            backgroundColor: '#ffff00',
                            overflow: 'hidden',
                            display: 'grid',
                            placeItems: 'center center',
                            marginBlock: '1.25rem',
                            // marginInline: '0',
                            marginInlineStart: '0',
                            marginInlineEnd: '1.125em'
                        }}>
                        <Imagry
                            src={userInformation ? `/${userInformation.avatar_url}` : ''}
                            alt={userInformation ? `${userInformation.first_name}` : ''}
                            width={100}
                            height={100}
                        />
                    </div>

                    <h1
                        className='
                            title
                            weight-600
                            text-2xl
                        '>
                        {userInformation ? `${userInformation.username}` : ''}
                    </h1>
                </div>

                <br className='my-6' />

                {/* <hr
                    className='
                        outline
                    '
                /> */}

                {/* <br className='my-6' /> */}

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <h6
                        className='
                            weight-600
                        '>
                        Database Identity
                    </h6>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.id}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                        weight-600
                    '>
                        User Identity
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.user_id}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                        weight-600
                    '>
                        Customer Identity
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.customer_id}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                            weight-600
                        '>
                        Created At
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.created_at}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                            weight-600
                        '>
                        Inserted At
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.inserted_at}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                            weight-600
                        '>
                        Updated At
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.updated_at}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                        weight-600
                    '>
                        Username
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.username}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                        weight-600
                    '>
                        Is Shown
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.is_shown}` : ''}</pre>
                </desc>

                <br className='my-6' />

                <desc
                    className='
                        flex
                        flex-col
                        align-center
                        space-between
                    '>
                    <desc
                        className='
                        weight-600
                    '>
                        Is Admin
                    </desc>

                    <br className='my-6' />

                    <pre>{userInformation ? `${userInformation.is_admin}` : ''}</pre>
                </desc>
            </section>
        </>
    );
};

// const AuthShowcase: React.FC = () => {
//     const { data: sessionData } = useSession();

//     const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(undefined, { enabled: sessionData?.user !== undefined });

//     return (
//         <div className='container'>
//             {/* <NextHead>
//                 <meta
//                     name='description'
//                     content='Generated by create next app'
//                 />
//                 <link
//                     rel='icon'
//                     href='/favicon.ico'
//                 />
//                 <title>Create Next App</title>
//             </NextHead> */}

//             <main className='main'>
//                 <div className=''>
//                     {sessionData && <span>Signed in as {sessionData.user?.name}</span>}
//                     {secretMessage && <span> - {secretMessage}</span>}
//                 </div>

//                 <button
//                     className='black bg-white font-bold flex items-center justify-center outline outline-1 outline-solid rounded-md py-2 px-6 text-lg'
//                     onClick={
//                         sessionData
//                             ? () => {
//                                 signOut();
//                             }
//                             : () => {
//                                 signIn();
//                             }
//                     }>
//                     {sessionData ? 'Sign Out' : 'Sign In'}
//                 </button>
//             </main>
//         </div>
//     );
// };

export default Profile;
