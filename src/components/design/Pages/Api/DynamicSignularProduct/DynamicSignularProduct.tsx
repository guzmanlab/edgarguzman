import React, { type FC } from 'react';
import Footer from '../../../Modules/Footer/Footer';
import Header from '../../../Modules/Header/Header';

type Props = {
    symbol: '$' | '£';
    price: string;
    description: string;
};

const DynamicSignularProductPage: FC<Props> = ({ symbol, price, description }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <h1 className='title'>Dynamic Singular Product</h1>

                <div className=''>
                    {symbol}
                    {price}
                </div>

                <desc className=''>{description}</desc>
            </main>
            <Footer />
        </>
    );
};

export default DynamicSignularProductPage;
