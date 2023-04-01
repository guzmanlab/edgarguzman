// @pages/protected.tsx
// import type { NextPage } from 'next';
// import { useSession } from 'next-auth/react';
// import Router from 'next/router';
// import { useEffect } from 'react';

// const Protected: NextPage = () => {
//     const { status, data } = useSession();

//     useEffect(() => {
//         if (status === 'unauthenticated') Router.replace('/auth/signin');
//     }, [status]);

//     if (status === 'authenticated') {
//         {
//             return (
//                 <div>
//                     This page is Protected for special people. like{'\n'}
//                     {JSON.stringify(data.user, null, 2)}
//                 </div>
//             );
//         }
//     }

//     return <div>loading</div>;
// };

// export default Protected;

// import type { NextPage } from 'next';

// import { SignOut, Title } from '@components';

// const Protected: NextPage = () => {
//     return (
//         <>
//             <Title
//                 title=''
//             />

//             <div>
//                 <SignOut />
//             </div>
//         </>
//     );
// };

// export default Protected;

import SignOut from '@components/componentry/sign-out';

export default function Home() {
    return (
        <div className='flex h-screen bg-black'>
            <div className='w-screen h-screen flex flex-col space-y-5 justify-center items-center'>
                <iframe
                    src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                    className='w-full max-w-screen-lg aspect-video'></iframe>
                <SignOut />
            </div>
        </div>
    );
}
