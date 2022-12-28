import NextHead from 'next/head';
import React, { type FC, type ReactNode } from 'react';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Main from '../modules/Main';
import Navigation from '../modules/Navigation';

type Props = {
    children: ReactNode;
    title?: string;
};

const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <NextHead>
                <title>{title ? `${title} - Edgar Guzman` : 'Edgar Guzman'}</title>
            </NextHead>

            <Header />
            <Navigation />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
