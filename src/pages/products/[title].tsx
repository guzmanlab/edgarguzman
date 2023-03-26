// @pages/products/[title].tsx
import type { GetServerSideProps, NextPage } from 'next';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { Breaker, Buttonry, Divider, Imagry, Loading, Title } from '@components';
import Accordion from '@components/elements/Accordion';
import config from '@lib/config';
import { supabase } from '@lib/supabase';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // Get all products from the database table
    const { title }: any = params;
    const { data: product, error } = await supabase.from('products').select('*').filter('title', 'eq', String(title)).single();

    if (!product) {
        return {
            notFound: true
        };
    }

    if (error) {
        console.log(error);
        throw new Error(`${error}`);
    }

    return {
        props: {
            product
        }
    };
};

const DynamicProducts: NextPage = ({ product }: any) => {
    const router = useRouter();
    console.log(supabase.auth.getUser());
    console.log(product);

    if (router.isFallback) {
        // return <div>{config.env.LOADING || 'Loading'}</div>;
        return <Loading />;
    }

    return (
        <>
            <Title title={`${product.title[0].toUpperCase()}${product.title.slice(1)}`} />

            <section
                style={{
                    border: '0',
                    outlineWidth: '0.0625rem',
                    outlineStyle: 'solid',
                    outlineColor: '#000000',
                    borderRadius: '0',
                    // backgroundColor: '#ffffff',
                    // overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: '1fr',
                    margin: '0 0',
                    padding: '0 0'
                }}>
                <ul
                    className='breadcrumb'
                    style={{
                        border: '0',
                        // margin: '0 0',
                        // padding: '0 0',
                        outlineWidth: '0.0625rem',
                        outlineStyle: 'solid',
                        outlineColor: '#000000',
                        borderRadius: '0',
                        backgroundColor: '#eeeeee'
                    }}>
                    <li className='text-5xl mt-4 font-semibold tracking-wide'>
                        <NextLink href={product ? `/${product.title}` : ''}>Home</NextLink>
                    </li>
                    <li>
                        <NextLink
                            className='outlinke outlinke-1 outlinke-black rounded-lg'
                            href={product ? `/${product.title}` : ''}>
                            Product(s)
                        </NextLink>
                    </li>
                    <li className='outlinke outlinke-1 outlinke-black rounded-lg'>
                        <NextLink
                            className='outlinke outlinke-1 outlinke-black rounded-lg'
                            href={product ? `/${product.title}` : ''}>
                            Summer 15 Collection
                        </NextLink>
                    </li>
                    <li className='outlinke outlinke-1 outlinke-black rounded-lg'>{product ? `${product.title}` : ''}</li>
                </ul>
            </section>

            <section
                className='
                    grid
                    products
                '
                // style={{
                //     border: '0',
                //     outlineWidth: '0.0625rem',
                //     outlineStyle: 'solid',
                //     outlineColor: '#000000',
                //     // outline: '0.0625rem solid #000000 !important',
                //     borderRadius: '0',
                //     backgroundColor: '#ffffff',
                //     overflow: 'hidden',
                //     display: 'grid',
                //     gridTemplateColumns: '1fr 1fr',
                //     gridTemplateRows: '1fr',
                //     margin: '0 0',
                //     padding: '1.25rem',
                // }}
            >
                {/* <div
                    // className="text-5xl mt-4 font-semibold tracking-wide"
                    className='
                        image-container
                    '
                // style={{
                //     // width: '50%',
                //     outlineWidth: '0.0625rem',
                //     outlineStyle: 'solid',
                //     outlineColor: '#000000',
                //     borderRadius: '3.125rem',
                //     backgroundColor: '#ffff00',
                //     overflow: 'hidden',
                //     // display: 'grid',
                //     // placeItems: 'center center',
                //     // marginBlock: '1.25rem',
                //     // marginInline: '0',
                //     padding: '0 0',
                // }}
                >
                    <Imagry
                        className='
                            image
                        '
                        src={product ? `${product.image}` : ''}
                        alt={product ? `${product.image}` : ''}
                        width={100}
                        height={100}
                        // fill
                        // sizes='100vw'
                        // width='100'
                        // height='100'
                        layout='responsive'
                    // objectFit='contain'
                    />
                </div> */}
                {/* <div className="next-image min-h-[150px]">
                    <Imagry
                        src={product?.images ? product?.image : ''}
                        width={100}
                        height={100}
                        layout="responsive"
                        // loading={imgLoading}
                        // quality={100}
                        alt={product?.title || 'Product Image'}
                    // className="your Class"
                    />
                </div> */}
                <div className='unset-img'>
                    <NextImage
                        className='custom-img'
                        src={product ? `/${product.image}` : ''}
                        fill
                        alt='Brand logo'
                    />
                </div>

                <div
                    style={{
                        border: '0',
                        outline: '0',
                        color: '#000000',
                        borderRadius: '0',
                        backgroundColor: '#ffffff',
                        margin: '0 0',
                        padding: '0 0'
                    }}>
                    <h5
                        className='outlinke outlinke-1 outlinke-black rounded-lg'
                        style={{
                            border: '0',
                            outline: '0',
                            color: '#000000',
                            fontWeight: '600',
                            fontSize: '2rem',
                            backgroundColor: '#ffffff',
                            margin: '0 0',
                            padding: '0 0'
                        }}>
                        {product ? `${product.title}` : ''}
                    </h5>
                    <br className='outlinke outlinke-1 outlinke-black rounded-lg' />
                    <h6 className='outlinke outlinke-1 outlinke-black rounded-lg'>${product ? `${product.price}` : ''}</h6>
                    <br className='outlinke outlinke-1 outlinke-black rounded-lg' />
                    <desc className='outlinke outlinke-1 outlinke-black rounded-lg'>{product ? `${product.description}` : ''}</desc>

                    <Divider>
                        <Breaker className='outlinke outlinke-1 outlinke-black rounded-lg' />

                        <Buttonry
                            className='
                                button
                            '
                            type='button'>
                            Add to Cart
                        </Buttonry>
                    </Divider>

                    <br className='outline' />
                    {/* <hr className='outline' /> */}
                    <br className='outline' />

                    <Accordion title='Hello'>guiasgduisgdygsaudsyadguiasgdugsadgy</Accordion>

                    <Accordion title='Hello'>guiasgduisgdygsaudsyadguiasgdugsadgy</Accordion>

                    <Accordion title='Hello'>guiasgduisgdygsaudsyadguiasgdugsadgy</Accordion>

                    {/* <Accordion title='Hello'>
                        guiasgduisgdygsaudsyadguiasgdugsadgy
                    </Accordion> */}
                </div>
            </section>
        </>
    );
};

export default DynamicProducts;
