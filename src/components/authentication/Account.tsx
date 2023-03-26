// @componentry/authentication/account.tsx
// import { Session, useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
// import { NextPage } from 'next';
// import { useEffect, useState } from 'react';

// // import { supabase } from '../../lib/supabase';
// import { Database } from '../../utils/data-base';
// import Avatar from './Avatar';

// type Profiles = Database['public']['Tables']['profiles']['Row'];

// type Props = {
//     session: Session;
// };

// type UpdateProfileProps = {
//     username: Profiles['username'];
//     website: Profiles['website'];
//     avatar_url: Profiles['avatar_url'];
// };

// const Account: NextPage<Props> = ({ session }) => {
//     const supabase = useSupabaseClient<Database>();
//     const user = useUser();
//     const [loading, setLoading] = useState(true);
//     const [username, setUsername] = useState<Profiles['username']>(null);
//     const [website, setWebsite] = useState<Profiles['website']>(null);
//     const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null);

//     useEffect(() => {
//         const getProfile = async () => {
//             try {
//                 setLoading(true);
//                 if (!user) {
//                     throw new Error('No user');
//                 }

//                 let { data, error, status } = await supabase.from('profiles').select(`username, website, avatar_url`).eq('id', user).single();

//                 if (error && status !== 406) {
//                     throw error;
//                 }

//                 if (data) {
//                     setUsername(data.username);
//                     setWebsite(data.website);
//                     setAvatarUrl(data.avatar_url);
//                 }
//             } catch (error) {
//                 alert('Error loading user data!');
//                 console.log(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getProfile();
//     }, [session, user, supabase]);

//     const updateProfile = async ({ username, website, avatar_url }: UpdateProfileProps) => {
//         try {
//             setLoading(true);
//             // const user = supabase.auth.getUser();
//             if (!user) throw new Error('No user');

//             const updates = {
//                 id: user.id,
//                 username,
//                 website,
//                 avatar_url,
//                 updated_at: new Date().toISOString()
//             };

//             let { error } = await supabase.from('profiles').upsert(updates);

//             if (error) {
//                 throw error;
//             }
//             alert('Profile updated!');
//         } catch (error) {
//             alert('Error updating user data!');
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='container mx-auto'>
//             <form className='form-widget'>
//                 <Avatar
//                     uid={user!.id}
//                     url={avatar_url}
//                     size={150}
//                     onUpload={url => {
//                         setAvatarUrl(url);
//                         updateProfile({ username, website, avatar_url: url });
//                     }}
//                 />
//                 <div className='container mx-auto w-72 py-4'>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         id='email'
//                         className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
//                         type='text'
//                         name='text'
//                         // aria-placeholder='Your Email'
//                         // placeholder='Your Email'
//                         value={session.user.email || ''}
//                         disabled
//                     />
//                 </div>
//                 <div className='container mx-auto w-72 py-4'>
//                     <label htmlFor='username'>Username</label>
//                     <input
//                         id='username'
//                         className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
//                         type='text'
//                         name='username'
//                         aria-placeholder='Your Name'
//                         placeholder='Your Name'
//                         value={username || ''}
//                         onChange={e => setUsername(e.target.value)}
//                     />
//                 </div>
//                 <div className='container mx-auto w-72 py-4'>
//                     <label htmlFor='website'>Website</label>
//                     <input
//                         id='website'
//                         className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
//                         type='website'
//                         name='website'
//                         aria-placeholder='your@website.com'
//                         placeholder='your@website.com'
//                         value={website || ''}
//                         onChange={e => setWebsite(e.target.value)}
//                     />
//                 </div>
//                 <div className='text-center'>
//                     <button
//                         className='w-44 h-11 rounded-full text-gray-50 bg-indigo-600 hover:bg-indigo-700'
//                         onClick={() => updateProfile({ username, website, avatar_url })}
//                         disabled={loading}>
//                         {loading ? 'Loading...' : 'Update'}
//                     </button>
//                 </div>
//                 <div className='text-center'>
//                     <button
//                         className='button'
//                         type='button'
//                         onClick={() => supabase.auth.signOut()}>
//                         Sign Out
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Account;

// un-comment this above

// this is template

type Props = {};

const Account = (props: Props) => {
    return <div>Account</div>;
};

export default Account;
