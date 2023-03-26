// @pages/auth/signup.tsx
import type { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import NextLink from 'next/link';

import { Section, Title } from '@components';

const SignUp = () => {
    return (
        <>
            <Title title='Sign Up' />

            <Section>
                <h1 className='capitalize weight-600 font-26'>Sign Up</h1>

                {/* <Component {...pageProps} /> */}

                <fieldset>
                    <label
                        className='capitalize weight-600 font-26'
                        htmlFor='first-name'>
                        First Name
                    </label>

                    <input
                        className='
                            weight-400
                            font-16
                            bg-white
                            radius-6
                            outline
                            flex
                            items-center
                        '
                        type='text'
                        name='first-name'
                        placeholder='first name'
                        aria-placeholder='first name'
                        // onChange={...pageProps}
                    />
                </fieldset>

                <fieldset>
                    <label
                        className='capitalize weight-600 font-26'
                        htmlFor='last-name'>
                        Last Name
                    </label>

                    <input
                        className='
                            weight-400
                            font-16
                            bg-white
                            radius-6
                            outline
                            flex
                            items-center
                        '
                        type='text'
                        name='last-name'
                        placeholder='last name'
                        aria-placeholder='last name'
                        // onChange={...pageProps}
                    />
                </fieldset>

                <fieldset className='grid'>
                    <label
                        className='capitalize weight-600 font-26'
                        htmlFor='email'>
                        Email
                    </label>
                    <input
                        className='
                            weight-400
                            font-16
                            bg-white
                            radius-6
                            outline
                            flex
                            items-center
                        '
                        type='email'
                        name='email'
                        placeholder='john@email.com'
                        aria-placeholder='john@email.com'
                        // onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
                    />
                </fieldset>

                <fieldset className='grid'>
                    <label
                        className='capitalize weight-600 font-26'
                        htmlFor='password'>
                        Password
                    </label>
                    <input
                        className='
                            weight-400
                            font-16
                            bg-white
                            radius-6
                            outline
                            flex
                            items-center
                        '
                        type='password'
                        name='password'
                        placeholder='********'
                        aria-placeholder='********'
                        // onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
                    />
                </fieldset>

                {/* <NextLink
                    className=''
                    href='/auth/forgot-your-password'
                >
                    Forgot your password?
                </NextLink>

                <br
                    className='m-6'
                />

                <NextLink
                    className=''
                    href='/auth/signup'
                >
                    Sign in account
                </NextLink> */}

                {/* <br
                    className='m-6'
                /> */}

                <button
                    className='capitalize weight-600 font-26 bg-yellow radius-6'
                    type='submit'
                    // onClick={() => signIn(provider.id)}
                >
                    {/* Sign Up with {provider.name} */}
                    Sign Up
                </button>
            </Section>
        </>
    );
};

export default SignUp;
