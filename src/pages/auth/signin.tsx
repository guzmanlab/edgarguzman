// // @pages/auth/signin.tsx
// import type { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';
// import { getCsrfToken, getProviders as Providers, signIn } from 'next-auth/react';
// import NextLink from 'next/link';
// import { FormEventHandler, useState } from 'react';

// import { Section, Title } from '@components';

// type Props = {
//     // providers: Providers
// };

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//     const csrfToken = await getCsrfToken(context);

//     return {
//         props: {
//             csrfToken
//         }
//     }
// };

// const SignIn: NextPage<Props> = ({ providers, csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//     // const [userInfo, setUserInfo] = useState({ email: '', password: '' });
//     // const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
//     //     // validate your userinfo
//     //     e.preventDefault();

//     //     const res = await signIn('credentials', {
//     //         email: userInfo.email,
//     //         password: userInfo.password,
//     //         redirect: false,
//     //     });

//     //     console.log(res);
//     // };

//     // const customSignInMessage = 'Custom Sign In page was called.';

//     // console.log(customSignInMessage);

//     // return (
//     //     <>
//     //         <Title title='Sign In' />

//     //         <Section className='sign-in-form'>
//     //             {/* <form onSubmit={handleSubmit}>
//     //             <h1>Login</h1>
//     //             <input
//     //                 value={userInfo.email}
//     //                 onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
//     //                 type='email'
//     //                 placeholder='john@email.com'
//     //             />
//     //             <input
//     //                 value={userInfo.password}
//     //                 onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
//     //                 type='password'
//     //                 placeholder='********'
//     //             />
//     //             <input
//     //                 type='submit'
//     //                 value='Login'
//     //             />
//     //         </form> */}

//     //             <h1
//     //                 className='capitalize weight-600 font-26'
//     //             >
//     //                 Custom Signin Page
//     //             </h1>

//     //             <fieldset
//     //                 className='grid'
//     //             >
//     //                 <label
//     //                     className='capitalize weight-600 font-26'
//     //                     htmlFor='email'
//     //                 >
//     //                     User-name or Email
//     //                 </label>
//     //                 <input
//     //                     className='weight-400 font-16 bg-white radius-6 outline flex items-center'
//     //                     type='email'
//     //                     name='email'
//     //                     placeholder='john@email.com'
//     //                     aria-placeholder='john@email.com'
//     //                 // onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
//     //                 />
//     //             </fieldset>

//     //             <fieldset
//     //                 className='grid'
//     //             >
//     //                 <label
//     //                     className='capitalize weight-600 font-26'
//     //                     htmlFor='password'
//     //                 >
//     //                     Password
//     //                 </label>
//     //                 <input
//     //                     className='weight-400 font-16 bg-white radius-6 outline flex items-center'
//     //                     type='password'
//     //                     name='password'
//     //                     placeholder='********'
//     //                     aria-placeholder='********'
//     //                 // onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
//     //                 />
//     //             </fieldset>

//     //             <NextLink
//     //                 className=''
//     //                 href='/auth/forgot-your-password'
//     //             >
//     //                 Forgot your password?
//     //             </NextLink>

//     //             <br
//     //                 className='m-6'
//     //             />

//     //             <NextLink
//     //                 className=''
//     //                 href='/auth/signup'
//     //             >
//     //                 Create account
//     //             </NextLink>

//     //             <br
//     //                 className='m-6'
//     //             />

//     //             <button
//     //                 className='capitalize weight-600 font-26 bg-yellow radius-6'
//     //                 type='submit'
//     //             // onClick={() => signIn(provider.id)}
//     //             >
//     //                 {/* Sign in with {provider.name} */}
//     //                 Sign in
//     //             </button>
//     //         </Section>
//     //     </>
//     // );

//     return (
//         <>
//             <Title title='Sign In' />

//             <Section className='sign-in-form'>
//                 <form
//                     action='/api/auth/signin/email'
//                     method='POST'
//                 >
//                     <input
//                         type='hidden'
//                         name='csrfToken'
//                         defaultValue={csrfToken}
//                     />
//                     <h1>Sign in</h1>
//                     <fieldset>
//                         <label>
//                             Email Address
//                         </label>
//                         <input
//                             // value={userInfo.email}
//                             // onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
//                             type='email'
//                             placeholder='john@email.com'
//                         />
//                     </fieldset>
//                     <button
//                         // value={userInfo.password}
//                         // onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
//                         type='button'
//                     // placeholder='********'
//                     >
//                         Sign in with Email
//                     </button>
//                 </form>
//             </Section>
//         </>
//     );
// };

// export default SignIn;

// // SignIn.getInitialProps = async () => {
// //     return {
// //         providers: await Providers,
// //     };
// // };

// import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
// import { getCsrfToken } from 'next-auth/react';

// export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
//     return (
//         <form
//             method='post'
//             action='/api/auth/signin/email'>
//             <input
//                 name='csrfToken'
//                 type='hidden'
//                 defaultValue={csrfToken}
//             />
//             <label>
//                 Email address
//                 <input
//                     type='email'
//                     id='email'
//                     name='email'
//                 />
//             </label>
//             <button type='submit'>Sign in with Email</button>
//         </form>
//     );
// }

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const csrfToken = await getCsrfToken(context);
//     return {
//         props: { csrfToken }
//     };
// }

// import type { NextPage } from 'next';
// import NextImage from 'next/image';
// // import NextLink from 'next/link';

// import { Form, Title } from '@components';

// const SignIn: NextPage = () => {
//     return (
//         <>
//             <Title
//                 title=''
//             />

//             <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
//                 <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
//                     <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
//                         <a href="https://dub.sh">
//                             <NextImage
//                                 src="/logo.png"
//                                 alt="Logo"
//                                 className="h-10 w-10 rounded-full"
//                                 width={20}
//                                 height={20}
//                             />
//                         </a>
//                         <h3 className="text-xl font-semibold">Sign In</h3>
//                         <p className="text-sm text-gray-500">
//                             Use your email and password to sign in
//                         </p>
//                     </div>
//                     <Form type="signin" />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SignIn;

import Image from 'next/image';

import Form from '@components/componentry/form';

export default function Login() {
    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-50'>
            <div className='z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl'>
                <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16'>
                    <a href='https://dub.sh'>
                        <Image
                            src='/logo.png'
                            alt='Logo'
                            className='h-10 w-10 rounded-full'
                            width={20}
                            height={20}
                        />
                    </a>
                    <h3 className='text-xl font-semibold'>Sign In</h3>
                    <p className='text-sm text-gray-500'>Use your email and password to sign in</p>
                </div>
                <Form type='signin' />
            </div>
        </div>
    );
}
