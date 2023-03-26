// @pages/index.tsx
import type { GetServerSideProps, NextPage } from 'next';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { supabase } from '@lib/supabase';

import { Breaker, Buttonry, Divider, H1, H4, Imagry, Linkaged, Section, Title } from '@components';
import Scripture from '@components/header/Script';
// import config from '@lib/configuration';

export const getServerSideProps: GetServerSideProps = async () => {
    const { data: products } = await supabase.from('products').select('*');

    console.log('products: ', products);

    return {
        props: {
            products
        }
    };
};

const Home: NextPage = ({ products }: any) => {
    //     console.log(supabase.auth.getUser());
    //     const router = useRouter();
    //     const { asPath } = useRouter();

    return (
        <>
            <Title />

            <Section>
                <H1>Hot new Item to Obtain</H1>
                <Breaker className='' />
                <section>
                    {products &&
                        products.map((prod: any) => {
                            return (
                                <Section
                                    className=''
                                    key={prod.id}>
                                    <Divider
                                        className='
                                            self-center
                                            cursor-pointer
                                            transition
                                            duration-100
                                            transform
                                            hover:scale-125r
                                        '>
                                        <NextLink
                                            className='
                                                self-center
                                                cursor-pointer
                                                transition
                                                duration-100
                                                transform
                                                hover:scale-125r
                                            '
                                            href={prod.image ? `/products/${prod.title}` : ''}>
                                            <Imagry
                                                className='
                                                    self-center
                                                    cursor-pointer
                                                    transition
                                                    duration-100
                                                    transform
                                                    hover:scale-125r
                                                '
                                                src={`/${prod.image}`}
                                                alt={prod ? `This is a ${prod.title}` : ''}
                                                width={300}
                                                height={300}
                                            />
                                        </NextLink>
                                    </Divider>
                                    <Divider className=''>
                                        <H4 className=''>
                                            <NextLink
                                                className='
                                                    self-center
                                                    cursor-pointer
                                                    transition
                                                    duration-100
                                                    transform
                                                    hover:scale-125r
                                                '
                                                href={`/products/${prod.title}`}>
                                                {prod && prod.title}
                                            </NextLink>
                                        </H4>
                                        <desc>${prod && prod.price}</desc>
                                    </Divider>
                                    <Divider>
                                        <Buttonry
                                            className=''
                                            type='button'>
                                            View Product
                                        </Buttonry>
                                        <Buttonry
                                            className=''
                                            type='button'>
                                            Add to Cart
                                        </Buttonry>
                                    </Divider>
                                </Section>
                            );
                        })}
                </section>
            </Section>
        </>
    );
};

export default Home;
