/** @format */
// @pages/profile/addresses.tsx
import type { GetServerSideProps, NextPage } from 'next';

import { Buttonry, Divider, Section, Title } from '@components';
import { supabase } from '@lib/supabase';
// import { config } from '@lib/config';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { data: username, error } = await supabase.from('users').select().single();

    if (!username) {
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
            username
        }
    };
};

const Addresses: NextPage = ({ username }: any) => {
    return (
        <>
            {/* <>{children}</> */}
            <Title title='Address(es)' />

            <Section>
                <Buttonry
                    className='
                        weight-900
                        font-bold
                        font-26
                    '
                    type='button'
                    // onClick={}
                >
                    Add a New Address
                </Buttonry>

                <Divider
                    className='
                        button
                        outline
                        bg-white
                    '>
                    <b className='weight-600'>(Default)</b>

                    <br
                        className='
                            my-6
                        '
                    />

                    <address>
                        <h1
                            className='
                                weight-600
                                font-bold
                                font-26
                            '>
                            {/* {username ? `${username.username}` : ''} */}
                            {username ? `${username.first_name}` : ''} {username ? `${username.last_name}` : ''}
                        </h1>

                        <br
                            className='
                            my-6
                        '
                        />

                        <desc className='font-mono'>United States</desc>

                        <Divider
                            className='
                                weight-600
                                font-bold
                                font-26
                                flex
                                align-center
                                justify-between
                            '>
                            <Buttonry
                                className='
                                    weight-400
                                    font-16
                                    hover:cursor-pointer
                                '
                                type='button'
                                // onClick={}
                            >
                                Edit
                            </Buttonry>

                            <Buttonry
                                className='
                                    weight-400
                                    font-16
                                    hover:cursor-pointer
                                '
                                type='button'
                                // onClick={}
                            >
                                Delete
                            </Buttonry>
                        </Divider>
                    </address>
                </Divider>
            </Section>
        </>
    );
};

export default Addresses;
