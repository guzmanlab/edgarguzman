import React, { type FC, type ReactNode } from 'react';
import NextImage from 'next/image';
import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Main from '../modules/Main';
import Navigation from '../modules/Navigation';

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Navigation />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
