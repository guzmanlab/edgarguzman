import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    name: string;
};

const ContactPage: FC<Props> = ({ name }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                Your contact form request order was successful {name}!
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
