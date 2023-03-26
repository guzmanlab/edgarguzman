import type { FC, ReactNode } from 'react';
// import SignHeader from '../componentry/Signature-Header';
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
            {/* <SignHeader /> */}
            <Navigation />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
