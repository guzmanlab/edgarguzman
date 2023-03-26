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

import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getCsrfToken } from 'next-auth/react';

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <form
            method='post'
            action='/api/auth/signin/email'>
            <input
                name='csrfToken'
                type='hidden'
                defaultValue={csrfToken}
            />
            <label>
                Email address
                <input
                    type='email'
                    id='email'
                    name='email'
                />
            </label>
            <button type='submit'>Sign in with Email</button>
        </form>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const csrfToken = await getCsrfToken(context);
    return {
        props: { csrfToken }
    };
}
