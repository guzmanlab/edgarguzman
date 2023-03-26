import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import type { NextPage } from 'next';
// import { useSession } from 'next-auth/react';
import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

import { Account } from '@components';
// import { supabase } from '@lib/supabase'

type Props = {
    children?: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
    const session = useSession();
    const supabase = useSupabaseClient();

    return (
        <section
            className=''
            style={{ padding: '50px 0 100px 0' }}>
            {!session ? (
                <div>
                    <div className='logo'>
                        <h1 className='logo'>NextAuth.js : Supabase Auth + Storage</h1>
                        <desc className=''>
                            Experience our Auth and Storage through a simple profile management example. Create a user profile and upload an avatar image. Fast, simple, secure.
                        </desc>
                    </div>

                    <div className=''>
                        <Auth
                            providers={['discord', 'github', 'google']}
                            supabaseClient={supabase}
                            appearance={{
                                theme: ThemeSupa
                            }}
                            // redirectTo={`/${ThemeSupa}/admin`}
                            theme='dark'
                        />
                    </div>
                </div>
            ) : (
                <>
                    <h4>Account</h4>
                    {/* <Account session={session} /> */}
                    {children}
                </>
            )}
        </section>
    );
};

export default AuthLayout;
