// @pages/dashboard
// import type { NextPage } from 'next';
// import { getSession, signIn, useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';

// import { Loading, Title } from '@components';
// import config from '@lib/config';
// import { prisma } from '@lib/prisma';
// import { supabase } from '@lib/supabase';

// const Dashboard: NextPage = () => {
//     const { data: session } = useSession();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const securePage = async () => {
//             const session = await getSession();
//             console.log({ session });
//             if (!session) {
//                 signIn();
//             } else {
//                 setLoading(false);
//             }
//         };

//         securePage();
//     }, []);

//     if (loading) {
//         return <Loading />;
//     }

//     return (
//         <div className='container'>
//             <Title title='Dashboard' />

//             <main
//                 className='
//                     main
//                 '>
//                 <h1>Dashboard of {session ? `${session.user.name}` : ''}</h1>
//             </main>

//             {/* <footer
//                 className='
//                     footer
//                 '
//             >
//             </footer> */}
//         </div>
//     );
// };

// export default Dashboard;

// un-comment this above

// this is template

type Props = {};

const Dashboard = (props: Props) => {
    return <div>Dashboard</div>;
};

export default Dashboard;
