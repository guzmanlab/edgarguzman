// @pages/products/index.tsx
// import { getSession } from 'next-auth/react';
import NextLink from 'next/link';
// import { useState } from 'react';

import { Imagry, Title } from '@components';
// import { prisma } from '@lib/prisma';
import { supabase } from '@lib/supabase';

export const getServerSideProps = async (context: any) => {
    // const products = await prisma.product.findMany();
    const { data: products } = await supabase.from('products').select('*');

    return {
        props: {
            products
        }
    };
};

export const Product = ({ products }: any) => {
    // const [products] = useState(data);

    return (
        <div>
            <Title title='Products' />

            <section>
                <h2>List of Product(s)</h2>

                <br className='my-20 mx-0 p-0' />

                <div>
                    {products.map((prod: any) => {
                        return (
                            <div
                                className='my-6 p-0 outline outline-1 outline-black cursor-default'
                                key={prod.id}>
                                <div>
                                    <Imagry
                                        className='m-0 p-0 outline outline-1 outline-black rounded-lg  cursor-default'
                                        src={`/${prod.image}`}
                                        alt={`A picture of ${prod.title}`}
                                        width={400}
                                        height={100}
                                    />
                                </div>
                                <br className='m-0 p-0' />
                                <NextLink
                                    className='my-20 mx-0 p-0 weight-600 font-26 capitalize'
                                    href={`/products/${prod.title}`}>
                                    <h4
                                        // className='my-2 font-bold text-2xl'
                                        className='my-20 mx-0 p-0 weight-600 font-26 capitalize'>
                                        {prod.title}
                                    </h4>
                                </NextLink>
                                <br className='m-0 p-0' />
                                <NextLink
                                    className='my-2 mx-0 py-2 px-10 font-bold text-2xl outline outline-1 outline-black rounded-lg cursor-default hover:cursor-pointer hover:bg-yellow-300'
                                    href={`/products/${prod.title}`}>
                                    View this Product
                                </NextLink>
                                <br className='m-0 p-0' />
                                <button
                                    className='my-2 mx-0 py-2 px-10 font-bold text-2xl outline outline-1 outline-black rounded-lg cursor-default hover:cursor-pointer hover:bg-yellow-300'
                                    type='button'>
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Product;
