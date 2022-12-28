import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    size: string;
    content: string;
};

const TermPage: FC<Props> = ({ size, content }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <h1 className=''>Terms of Services</h1>
                <div className={`max-w-7xl mx-auto diagram ${size}`}>
                    Hello <s>Tailwind,</s> Typescript, Next, and Storybook!
                    {content}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TermPage;
