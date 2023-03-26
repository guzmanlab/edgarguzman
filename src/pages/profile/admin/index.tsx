// @page/profile/admin/index.tsx
// import type { GetServerSideProps, NextPage } from 'next';
// import NextLink from 'next/link';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';

// import { Authentication, FontType, Linkaged, ProductCard, Template, Title } from '@components';
// import config from '@lib/configuration';
// import { supabase } from '@lib/supabase';

// export const getServerSideProps: GetServerSideProps = async ({ params }: any) => {
//     const { data: information } = await supabase.from('information').select('*');

//     // if (!information) {
//     //     return {
//     //         notFound: true
//     //     }
//     // }

//     console.log('information: ', information);

//     return {
//         props: {
//             information
//         }
//     };
// };

// const Home: NextPage = ({ links1 }: any) => {
//     console.log(supabase.auth.getUser());
//     const router = useRouter();
//     const { asPath } = useRouter();

//     const [informations, setInformations] = useState([]);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetchInformations();
//     }, []);
//     async function fetchInformations() {
//         const { data, error } = await supabase.from('information').select();
//         setInformations(data);
//         setLoading(false);
//     }
//     if (loading) return <p className='text-2xl'>Loading ...</p>;
//     if (!informations.length) return <p className='text-2xl'>No information.</p>;

//     return (
//         <>
//             <Title title='Admin Profile' />

//             <>
//                 <section>
//                     <h1>Hot new Item to Obtain</h1>
//                     <div>It's Font Font-Type as a Componentry</div>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         Product
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/products/${link.id}`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         User Profile
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/profile/${link.username}`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         Admin Profile
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/profile/admin/${link.username}`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         Edit Admin Profile
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/profile/admin/edit/${link.username}`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         Setting Admin Profile
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/profile/admin/setting/${link.username}`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>

//                     <h4
//                         className='
//                         weight-600
//                     '>
//                         List of User/Admin Profile
//                     </h4>
//                     <pre>
//                         {informations.map((link: any) => (
//                             <NextLink
//                                 key={link.id}
//                                 href={`/profile/admin`}>
//                                 <div className='cursor-pointer border-b border-gray-300	mt-8 pb-4'>{link.full_name}</div>
//                             </NextLink>
//                         ))}
//                     </pre>
//                 </section>
//             </>
//         </>
//     );
// };

// export default Home;

// un-comment this above

// this is template

type Props = {};

const Admin = (props: Props) => {
    return <div>Admin</div>;
};

export default Admin;
