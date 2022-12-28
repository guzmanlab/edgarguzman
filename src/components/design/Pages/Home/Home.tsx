import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    symbol: '$' | '£';
    price: string;
};

const HomePage: FC<Props> = ({ symbol, price }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <div className='flex items-center justify-between border-b pb-3'>
                    <h1 className='font-semibold tracking-wide leading-10 text-xl lg:text-3xl'>Shop Now</h1>
                </div>

                <div className='mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8'>
                    {symbol}
                    {price}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
