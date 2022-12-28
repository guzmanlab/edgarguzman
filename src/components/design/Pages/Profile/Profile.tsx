import React, { type FC } from 'react';
import Bio from '../../Etc/Bio/Bio';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    name?: string;
    bio?: string;
};

const ProfilePage: FC<Props> = ({ name, bio, ...args }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <Bio
                    name='Edgar Guzman'
                    {...args}
                />
                <button
                    className='form-button'
                    type='button'>
                    Edit Profile
                </button>
            </main>
            <Footer />
        </>
    );
};

export default ProfilePage;
