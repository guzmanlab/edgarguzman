import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    content: string;
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
};

const SettingPage: FC<Props> = ({ size = 'medium', content, primary = false, backgroundColor, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <button
                    type='button'
                    className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                    style={{ backgroundColor }}
                    {...props}>
                    {label}
                </button>
            </main>
            <Footer />
        </>
    );
};

export default SettingPage;
