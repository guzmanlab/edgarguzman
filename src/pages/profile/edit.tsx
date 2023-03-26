// @pages/profile/edit/[username].tsx
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Account, AuthLayout, Imagry, Title } from '@components';
import config from '@lib/config';
import { supabase } from '@lib/supabase';

// export const getStaticPaths = async () => {
//     const { data } = await supabase.from('users').select('username');

//     const paths = data?.map(EditUserInformation => ({
//         params: {
//             username: JSON.stringify(EditUserInformation.username)
//         }
//     }));

//     return {
//         paths,
//         fallback: true
//     };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const { username }: any = params;

//     const { data: EditUserInformation, error } = await supabase.from('users').select().filter('username', 'eq', username).single();

//     if (!EditUserInformation) {
//         return {
//             notFound: true
//         };
//     }

//     if (error) {
//         console.log(error);
//         throw new Error(`${error}`);
//     }

//     return {
//         props: {
//             EditUserInformation
//         }
//     };
// };

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { username }: any = params;

    const { data: EditUserInformation, error } = await supabase.from('users').select().filter('username', 'eq', String(username)).single();

    if (!EditUserInformation) {
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
            EditUserInformation
        }
    };
};

const Profile: NextPage = ({ EditUserInformation }: any) => {
    // console.log(supabase.auth.getUser());
    // console.log(EditUserInformation);

    // const session = useSession();
    // const { data: session, status } = useSession();
    // const loading = status === 'loading';

    return (
        <>
            <Title title={EditUserInformation ? `Editing ${EditUserInformation.full_name}` : ''} />

            <section
                style={{
                    border: '0',
                    outline: '0',
                    // margin: '0 0',
                    // padding: '0 0',
                    color: '#000000',
                    borderRadius: '0',
                    backgroundColor: '#ffffff',
                    overflow: 'hidden',
                    // display: 'grid',
                    // placeItems: 'center center',
                    marginBlock: '0',
                    marginInline: '12.5rem',
                    paddingBlock: '0',
                    paddingInline: '12.5rem',
                    // width: '3.125rem',
                    height: '100%'
                }}>
                {/*  */}

                <AuthLayout>
                    asudiojhoasijdasjdosjdjo
                    {/* <NextImage src={EditUserInformation ? `${EditUserInformation.user.image}` : ''} alt={EditUserInformation ? `${EditUserInformation.username}` : ''} width={100} height={100} style={{ outlineWidth: '0.0625rem', outlineStyle: 'solid', outlineColor: '#000000', borderRadius: '3.125rem', backgroundColor: '#ffff00', overflow: 'hidden', display: 'grid', placeItems: 'center center', marginBlock: '1.25rem', marginInline: '0' }} /> */}
                    {/* <div
                    className='title font-bold text-1xl font-mono'
                    style={{
                        border: '0',
                        outline: '0',
                        color: '#000000',
                        // fontSize: '1.625rem',
                        borderRadius: '0',
                        backgroundColor: '#ffffff',
                        // overflow: 'hidden',
                        // display: 'grid',
                        // placeItems: 'center center',
                        marginBlockStart: '0',
                        marginBlockEnd: '1.625rem',
                        marginInline: '0',
                        padding: '0 0',
                        textTransform: 'capitalize'
                    }}
                >
                    {EditUserInformation.full_name}
                </div> */}
                    {/* <fieldset className='font-normal text-1xl'>
                    <h4
                        className='title font-bold text-1xl'
                        style={{
                            border: '0',
                            outline: '0',
                            color: '#000000',
                            fontSize: '1.625rem',
                            borderRadius: '0',
                            backgroundColor: '#ffffff',
                            marginBlockStart: '1.25rem',
                            marginBlockEnd: '1rem',
                            marginInline: '0',
                            padding: '0 0'
                        }}
                    >
                        User Payment History
                    </h4>
                    <div
                        className=''
                        style={{
                            outlineWidth: '0.0625rem',
                            outlineStyle: 'solid',
                            outlineColor: '#000000',
                            fontSize: '1.25rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#ffffff',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBlock: '1.25rem',
                            marginInline: '0',
                            paddingBlock: '1rem',
                            paddingInline: '1.25rem'
                        }}
                    >
                        <div
                            className='font-normal text-1xl'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                margin: '0 0',
                                padding: '0 0'
                            }}
                        >
                            <h6
                                className='title font-bold text-1xl'
                                style={{
                                    border: '0',
                                    outline: '0',
                                    color: '#000000',
                                    fontSize: '1.625rem',
                                    borderRadius: '0',
                                    backgroundColor: '#ffffff',
                                    marginBlockStart: '1.25rem',
                                    marginBlockEnd: '1rem',
                                    marginInline: '0',
                                    padding: '0 0'
                                }}
                            >
                                Dashibase Beta Pro
                            </h6>
                            <div
                                className=''
                                style={{
                                    outline: '0',
                                    border: '0',
                                    color: '#000000',
                                    fontSize: '1.25rem',
                                    borderRadius: '0.375rem',
                                    backgroundColor: '#ffffff',
                                    overflow: 'hidden',
                                    // display: 'grid',
                                    // placeItems: 'center center',
                                    marginBlock: '1.25rem',
                                    marginInline: '0',
                                    padding: '0 0'
                                }}
                            >
                                Subscription started: Mar {EditUserInformation ? `${EditUserInformation.id}` : ''}, 2020
                            </div>
                        </div>

                        <div
                            className='font-normal text-1xl'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                borderRadius: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}
                        >
                            <desc
                                className='title font-bold text-1xl'
                                style={{
                                    border: '0',
                                    outline: '0',
                                    color: '#000000',
                                    fontSize: '1.625rem',
                                    borderRadius: '0',
                                    backgroundColor: '#ffffff',
                                    margin: '0 0',
                                    padding: '0 0'
                                }}
                            >
                                $ 9{EditUserInformation ? `${EditUserInformation.id}` : ''}.00 <span
                                    style={{
                                        margin: '0 0',
                                        padding: '0 0',
                                        color: '#000000',
                                        fontWeight: '400',
                                        backgroundColor: '#ffffff'
                                    }}
                                > / mo</span >
                            </desc>
                        </div>
                    </div>
                </fieldset> */}
                    {/* <fieldset className='font-normal text-1xl'>
                    <label
                        className='title font-bold text-1xl'
                        htmlFor='company'
                        style={{
                            border: '0',
                            outline: '0',
                            color: '#000000',
                            fontSize: '1.625rem',
                            borderRadius: '0',
                            backgroundColor: '#ffffff',
                            marginBlockStart: '1.25rem',
                            marginBlockEnd: '1rem',
                            marginInline: '0',
                            padding: '0 0'
                        }}
                    >
                        User Indetification
                    </label>
                    <input
                        disabled
                        className=''
                        type={'text'}
                        aria-disabled={true}
                        value={EditUserInformation ? `${EditUserInformation.id}` : ''}
                        style={{
                            outlineWidth: '0.0625rem',
                            outlineStyle: 'solid',
                            outlineColor: '#000000',
                            fontSize: '1.25rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#ffffff',
                            overflow: 'hidden',
                            display: 'grid',
                            placeItems: 'center center',
                            marginBlock: '1.25rem',
                            marginInline: '0',
                            paddingBlock: '1rem',
                            paddingInline: '1.25rem'
                        }}
                    />
                </fieldset> */}
                    <fieldset className='font-normal text-1xl'>
                        <label
                            className='title font-bold text-1xl'
                            htmlFor='fullName'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                fontSize: '1.625rem',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}>
                            First Name
                        </label>
                        <input
                            className=''
                            type='text'
                            value={EditUserInformation ? `${EditUserInformation.full_name}` : ''}
                            style={{
                                outlineWidth: '0.0625rem',
                                outlineStyle: 'solid',
                                outlineColor: '#000000',
                                fontSize: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ffffff',
                                overflow: 'hidden',
                                display: 'grid',
                                placeItems: 'center center',
                                marginBlock: '1.25rem',
                                marginInline: '0',
                                paddingBlock: '1rem',
                                paddingInline: '1.25rem'
                            }}
                        />
                    </fieldset>
                    <fieldset className='font-normal text-1xl'>
                        <label
                            className='title font-bold text-1xl'
                            htmlFor='company'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                fontSize: '1.625rem',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}>
                            User Name
                        </label>
                        <input
                            // disabled
                            className=''
                            type='text'
                            // aria-disabled={false}
                            value={EditUserInformation ? `${EditUserInformation.username}` : ''}
                            style={{
                                outlineWidth: '0.0625rem',
                                outlineStyle: 'solid',
                                outlineColor: '#000000',
                                fontSize: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ffffff',
                                overflow: 'hidden',
                                display: 'grid',
                                placeItems: 'center center',
                                marginBlock: '1.25rem',
                                marginInline: '0',
                                paddingBlock: '1rem',
                                paddingInline: '1.25rem'
                            }}
                        />
                    </fieldset>
                    <fieldset className='font-normal text-1xl'>
                        <label
                            className='title font-bold text-1xl'
                            htmlFor='company'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                fontSize: '1.625rem',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}>
                            User Information Indetification
                        </label>
                        <input
                            disabled
                            className=''
                            type='text'
                            aria-disabled
                            value={EditUserInformation ? `${EditUserInformation.info_id}` : ''}
                            style={{
                                outlineWidth: '0.0625rem',
                                outlineStyle: 'solid',
                                outlineColor: '#000000',
                                fontSize: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ffffff',
                                overflow: 'hidden',
                                display: 'grid',
                                placeItems: 'center center',
                                marginBlock: '1.25rem',
                                marginInline: '0',
                                paddingBlock: '1rem',
                                paddingInline: '1.25rem'
                            }}
                        />
                    </fieldset>
                    {/* <fieldset className='font-normal text-1xl'>
                    <label
                        className='title font-bold text-1xl'
                        htmlFor='company'
                        style={{
                            border: '0',
                            outline: '0',
                            color: '#000000',
                            fontSize: '1.625rem',
                            borderRadius: '0',
                            backgroundColor: '#ffffff',
                            marginBlockStart: '1.25rem',
                            marginBlockEnd: '1rem',
                            marginInline: '0',
                            padding: '0 0'
                        }}
                    >
                        Stripe Customer Indetification
                    </label>
                    <input
                        disabled
                        className=''
                        type={'text'}
                        aria-disabled={true}
                        // value={EditUserInformation ? `${EditUserInformation.username}` : ''}
                        value='cus_KUdMuwl5H14j1R'
                        style={{
                            outlineWidth: '0.0625rem',
                            outlineStyle: 'solid',
                            outlineColor: '#000000',
                            fontSize: '1.25rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#ffffff',
                            overflow: 'hidden',
                            display: 'grid',
                            placeItems: 'center center',
                            marginBlock: '1.25rem',
                            marginInline: '0',
                            paddingBlock: '1rem',
                            paddingInline: '1.25rem'
                        }}
                    />
                </fieldset> */}
                    <fieldset className='font-normal text-1xl'>
                        <label
                            className='title font-bold text-1xl'
                            htmlFor='company'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                fontSize: '1.625rem',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}>
                            Billing Email
                        </label>
                        <input
                            // disabled
                            className=''
                            type='text'
                            // aria-disabled={false}
                            value={EditUserInformation ? `${EditUserInformation.email}` : ''}
                            style={{
                                outlineWidth: '0.0625rem',
                                outlineStyle: 'solid',
                                outlineColor: '#000000',
                                fontSize: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ffffff',
                                overflow: 'hidden',
                                display: 'grid',
                                placeItems: 'center center',
                                marginBlock: '1.25rem',
                                marginInline: '0',
                                paddingBlock: '1rem',
                                paddingInline: '1.25rem'
                            }}
                        />
                    </fieldset>
                    <fieldset className='fon-mono'>
                        <label
                            className='title font-bold text-1xl'
                            htmlFor='signup-date'
                            style={{
                                border: '0',
                                outline: '0',
                                color: '#000000',
                                fontSize: '1.625rem',
                                borderRadius: '0',
                                backgroundColor: '#ffffff',
                                marginBlockStart: '1.25rem',
                                marginBlockEnd: '1rem',
                                marginInline: '0',
                                padding: '0 0'
                            }}>
                            Signup Date
                        </label>
                        <input
                            disabled
                            className='font-mono'
                            // type={'date'}
                            aria-disabled
                            value={EditUserInformation ? `${EditUserInformation.created_at}` : ''}
                            style={{
                                outlineWidth: '0.0625rem',
                                outlineStyle: 'solid',
                                outlineColor: '#000000',
                                fontSize: '1.25rem',
                                borderRadius: '0.375rem',
                                backgroundColor: '#ffffff',
                                overflow: 'hidden',
                                display: 'grid',
                                placeItems: 'center center',
                                marginBlock: '1.25rem',
                                marginInline: '0',
                                paddingBlock: '1rem',
                                paddingInline: '1.25rem'
                            }}
                        />
                    </fieldset>
                    {/* <br className='my-20' /> */}
                    <button
                        className='font-mono'
                        type='button'
                        style={{
                            outlineWidth: '0.0625rem',
                            outlineStyle: 'solid',
                            outlineColor: '#000000',
                            fontSize: '1.625rem',
                            borderRadius: '0.375rem',
                            backgroundColor: '#ffffff',
                            overflow: 'hidden',
                            display: 'grid',
                            placeItems: 'center center',
                            marginBlock: '1.25rem',
                            marginInline: '0',
                            paddingBlock: '1rem',
                            paddingInline: '1.25rem',
                            textTransform: 'capitalize',
                            cursor: 'pointer'
                        }}>
                        Save changes
                    </button>
                </AuthLayout>
            </section>
        </>
    );
};

export default Profile;
