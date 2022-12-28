import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    symbol?: '$' | '£';
    price?: string;
    content?: string;
};

const ProductPage: FC<Props> = ({ symbol, price, content }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <p className='postsContent'>{content}</p>
                <ul className='postsMeta'>
                    <li className='postsMetaData'>
                        {symbol}
                        {price}
                    </li>
                    <div>Add to Cart</div>
                </ul>
            </main>
            <Footer />
        </>
    );
};

export default ProductPage;
