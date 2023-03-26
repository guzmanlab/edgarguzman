// @page/profile/[username].tsx
// import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
// import { signIn, signOut, useSession } from 'next-auth/react';
// import NextImage from 'next/image';
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';

// import { Loading, Title } from '@components';
// import { getUserSession } from '@hooks/getUserSession';
// import config from '@lib/config';
// import { supabase } from '@lib/supabase';

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const { username }: any = params;

//     const { data: user, error } = await supabase.from('profiles').select().filter('username', 'eq', String(username)).single();

//     if (!user) {
//         return {
//             notFound: true
//         };
//     }

//     if (error) {
//         console?.log(error);
//         throw new Error(error);
//     }

//     return {
//         props: {
//             user
//         }
//     };
// };

// const Profile: NextPage = ({ user }: any) => {
//     const router = useRouter();
//     // console.log(supabase.auth.getUser());
//     // console.log(user);

//     // const { username } = router.query as { username: string };

//     if (router.isFallback) {
//         return <Loading />;
//     }

//     return (
//         <>
//             <Title title={user ? `${user.username}` : ''} />

//             <section>
//                 {/* <div
//                     style={{
//                         outlineWidth: '0.0625rem',
//                         outlineStyle: 'solid',
//                         outlineColor: '#000000',
//                         borderRadius: '3.125rem',
//                         backgroundColor: '#ffff00',
//                         overflow: 'hidden',
//                         display: 'grid',
//                         placeItems: 'center center',
//                         marginBlock: '1.25rem',
//                         marginInline: '0',
//                     }}
//                 >
//                     <Imagry
//                         src={user ? `/${user.avatar_url}` : ''}
//                         alt={user ? `${user.username}` : ''}
//                         width={100}
//                         height={100}
//                     // noOptimization={true}
//                     // unoptimized={true}
//                     />
//                 </div> */}

//                 <h1 className='title font-bold text-2xl'>{user ? `${user.username}` : ''}</h1>

//                 <br className='my-20' />

//                 <desc className='font-mono'>{user ? `${user.bio}` : ''}</desc>
//             </section>
//         </>
//     );
// };

// export default Profile;

// un-comment this above

// this is template

import type { NextPage } from 'next';

type Props = {};

const Profile: NextPage<Props> = () => {
    return <div>Profile</div>;
};

export default Profile;
