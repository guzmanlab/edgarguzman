// import { signIn, signOut, useSession } from 'next-auth/react';
// import NextLink from 'next/link';

// import { Imagry, Linkaged } from '../../components';
// import config from '../../lib/configuration';

// const Header = () => {
//     const gifUrl = 'https://dribbble.com/shots/6915953-Another-man-down/attachments/6915953-Another-man-down?mode=media';

//     const { data: session, status } = useSession();
//     const loading = status === 'loading';

//     const handleSignin = (e: any) => {
//         e.preventDefault()
//         signIn()
//     }

//     const handleSignout = (e: any) => {
//         e.preventDefault()
//         signOut()
//     }

//     function sendLinksToNewWindow(event: any) {
//         if (!(event.target instanceof HTMLElement))
//             return;
//         // Use .closest to handle scenario where target isn't the anchor itself.
//         // Ex: `<a href='https://example.com'><span>click here</span></a>`
//         const anchor = event.target.closest('a');
//         if (anchor !== null) {
//             anchor.target = '_blank';
//             anchor.rel = 'noopener';
//         }
//     }

//     return (
//         <header id='header'>
//             <section className='section'>
//                 <div className='guzman familiar'>
//                     <NextLink href='/'>{config.env.COMPANY_NAME}</NextLink>
//                 </div>

//                 {/* <div className='guzman familiar'>
//                     <br className='' />
//                     <br className='' />
//                     {session && (
//                         <>
//                             <br className='' />
//                             <br className='' />
//                             <NextLink href='/' onClick={handleSignout}
// > { config.env.COMPANY_NAME }</NextLink >
//                         </>
//                     )}
//                     {!session && (
//                         <>
//                             <br className='' />
//                             <br className='' />
//                             <NextLink href='/' onClick={handleSignin}
// > { config.env.COMPANY_NAME }</NextLink >
//                         </>
//                     )}
//                 </div>

//                 <div className='guzman familiar'>
//                     {loading && <div className=''>{config.env.LOADING}</div>}
//                     {
//                         session &&
//                         <>
//                             <div style={{ marginBottom: '10px' }}
// > Welcome, { session.user?.name ?? session.user?.email }</div > <br />
//                             <Imagry src={session.user.image ? `${session.user.image}` : 'No Image'} alt={session.user.image ? `${session.user.image}` : 'No Image'} width={100} height={100} />
//                         </>
//                     }
//                     {
//                         !session &&
//                         <>
//                             <h3 className=''>Please Sign in</h3>
//                             <Imagry src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt={`GIF by ${gifUrl}`} width={100} height={100} />
//                             <desc className=''>GIF by</desc> <Linkaged href={gifUrl} onClick={sendLinksToNewWindow}
// > GIF</Linkaged >
//                         </>
//                     }
//                 </div> */}

//                 <div className='header'>
//                     <br />
//                     <br />
//                     {/* <Linkaged className='logo' href='/'>
//                     NextAuth.js
//                 </Linkaged> */}
//                     {session && (
//                         <>
//                             <br />
//                             <br />
//                             <Linkaged href="" onClick={handleSignout} className="btn-signin">Sign out</Linkaged>
//                         </>
//                     )}
//                     {!session && (
//                         <>
//                             <br />
//                             <br />
//                             <Linkaged href="" onClick={handleSignin} className="btn-signin">Sign in</Linkaged>
//                         </>
//                     )}
//                 </div>

//                 <section>
//                     {loading && <div className={'title'}
// > Loading...</div >}
//                     {
//                         session &&
//                         <>
//                             <p style={{ marginBottom: '10px' }}
// > Welcome, { session.user.name ?? session.user.email }</p > <br />
//                             <Imagry src={session.user.image ? `${session.user.image}` : 'No Image'} alt={session.user.image ? `${session.user.image}` : 'No Image'} width={100} height={100} className={'avatar'} />
//                         </>
//                     }
//                     {
//                         !session &&
//                         <>
//                             <h3 className={'title'}
// > Please Sign in</h3 >
//                             <Imagry src="https://cdn.dribbble.com/users/759083/screenshots/6915953/2.gif" alt={`GIF by ${gifUrl}`} width={100} height={100} className={'avatar'} />
//                             {/* <desc className={'credit'}
// > GIF by</desc > <NextLink href={gifUrl} onClick={sendLinksToNewWindow}
{
    /* >Another man</NextLink> * /} */
}
//                             <desc className={'credit'}
// > GIF by</desc > <Linkaged href={gifUrl} onClick={sendLinksToNewWindow}
// >Another man</Linkaged>
//                         </>
//                     }
//                 </section>
//             </section>
//         </header>
//     );
// };

// export default Header;

// Version 2

import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import NextImage from 'next/image';

import { Buttonry, Imagry, Linkaged } from '..';
import config from '../../lib/configuration';

const Header: NextPage = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';

    const replaceWith = '-';
    // const sessionUsername = 'Edgar Guzman'
    // console.log(`/profile/${sessionUsername.toLowerCase().replace(/\s/g, replaceWith)}`)

    const handleSignin = (e: any) => {
        e.preventDefault();
        signIn();
    };

    const handleSignout = (e: any) => {
        e.preventDefault();
        signOut();
    };

    function sendLinksToNewWindow(event: any) {
        if (!(event.target instanceof HTMLElement)) return;
        // Use .closest to handle scenario where target isn't the anchor itself.
        // Ex: `<a href='https://example.com'><span>click here</span></a>`
        const anchor = event.target.closest('a');
        if (anchor !== null) {
            anchor.target = '_blank';
            anchor.rel = 'noopener';
        }
    }

    return (
        <header id='header'>
            <section className='section'>
                <div className='guzman familiar'>
                    <Linkaged href='/'>{config.env.COMPANY_NAME}</Linkaged>
                </div>

                <nav className='header-nav'>
                    <section className='flex items-center justify-between'>
                        {loading && <div className='profile-loading'>Loading...</div>}
                        {session && (
                            <>
                                <NextImage
                                    className='avatar'
                                    // src={session.user?.image ? `/${session.user.image}` : 'No Image'}
                                    src='/as.jpg'
                                    alt={session.user?.name ? `${session.user.name}` : 'No Image'}
                                    width={20}
                                    height={20}
                                />
                                <br className='breaker-profile' />
                                <h4 className='font-bold'>{session.user?.name ?? session.user?.name}</h4>
                                <Linkaged
                                    className='btn-signin font-bold'
                                    href={`/profile/${session.user?.name?.toLowerCase().replace(/\s/g, replaceWith)}`}>
                                    {session.user?.name ?? session.user?.name}
                                </Linkaged>
                                <br className='breaker-profile' />
                                <Buttonry
                                    className='btn-signin'
                                    type='button'
                                    onClick={handleSignout}>
                                    Sign out
                                </Buttonry>
                            </>
                        )}
                        {!session && (
                            <Buttonry
                                className='btn-signin'
                                type='button'
                                onClick={handleSignin}>
                                Sign in
                            </Buttonry>
                        )}
                    </section>
                </nav>
            </section>
        </header>
    );
};

export default Header;
