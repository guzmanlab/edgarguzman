// @componentry/authentication/avatar.tsx
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import type { NextPage } from 'next';
// import NextImage from 'next/image';
// import React, { useEffect, useState } from 'react';

// // import { supabase } from '../../lib/supabase';
// // import config from '../../lib/configuration';
// import { Imagry } from '..';
// import camera from '../../public/assets/camera-on.png';
// import type { Database } from '../../utils/data-base';

// type Profiles = Database['public']['Tables']['profiles']['Row'];

// type Props = {
//     uid?: string;
//     url: Profiles['avatar_url'];
//     size: number;
//     onUpload: (url: string) => void;
// };

// const Avatar: NextPage<Props> = ({ uid, url, size, onUpload, }) => {
//     const supabase = useSupabaseClient<Database>();
//     const [avatarUrl, setAvatarUrl,] = useState<Profiles['avatar_url']>(null,);
//     const [uploading, setUploading,] = useState(false,);

//     useEffect(() => {
//         const downloadImage = async (path: string,) => {
//             try {
//                 const { data, error, } = await supabase.storage.from('avatars',).download(path,);
//                 if (error) {
//                     throw error;
//                 }
//                 const url = URL.createObjectURL(data,);
//                 setAvatarUrl(url,);
//             } catch (error) {
//                 console.log('Error downloading image: ', error,);
//             }
//         };

//         if (url) downloadImage(url,);
//     }, [url, supabase.storage,]);

//     const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async event, => {
//     try {
//         setUploading(true,);

//         if (!event.target.files || event.target.files.length === 0) {
//             throw new Error('You must select an image to upload.',);
//         }

//         const file = event.target.files[0];
//         const fileExt = file.name.split('.',).pop();
//         const fileName = `${uid}.${fileExt}`;
//         const filePath = `${fileName}`;

//         const { error: uploadError, } = await supabase.storage.from('avatars',).upload(filePath, file, {
//             upsert: false
//         },);

//         if (uploadError) {
//             throw uploadError;
//         }

//         onUpload(filePath,);
//     } catch (error) {
//         alert('Error uploading avatar!',);
//         console.log(error,);
//     } finally {
//         setUploading(false,);
//     }
// };

// return (
//     <div className='container mx-auto text-center'>
//         {avatarUrl ? (
//             <Imagry
//                 className='hidden w-18 h-18 object-cover rounded-full'
//                 src={`/${avatarUrl}`}
//                 alt={avatarUrl ? 'Avatar' : 'No image alt'}
//                 style={{ with: size, height: size, }}
//             />
//         ) : (
//             <div
//                 className='avatar no-image'
//                 style={{ width: size, height: size, }}
//             />
//         )}
//         <div style={{ width: size, }}>
//             <div className='flex flex-col justify-center shrink-0 relative'>
//                 <label
//                     className=' opacity-25 w-full h-full bg-gray-400 rounded-full flex justify-center absolute  cursor-pointer'
//                     htmlFor='single'>
//                     {uploading ? 'Uploading...' : 'Upload'}
//                 </label>
//                 <input
//                     id='single'
//                     className='w-24 h-24 mt-5'
//                     type='file'
//                     accept='image/*'
//                     onChange={uploadAvatar}
//                     disabled={uploading}
//                     style={{
//                         visibility: 'hidden',
//                         position: 'absolute'
//                     }}
//                 />
//             </div>
//         </div>
//     </div>
// );
// };

// export default Avatar;

// un-comment this above

// this is template

import type { NextPage } from 'next';

type Props = {};

const Avatar: NextPage<Props> = props => {
    return (
        <>
            <div>Avatar</div>
        </>
    );
};

export default Avatar;
