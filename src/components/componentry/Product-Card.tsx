// @components/componentry/ProductCard.tsx
// import type { Product } from '@prisma/client';
import type { NextPage } from 'next';
import NextImage from 'next/image';
import NextLink from 'next/link';

type ProductCardProps = {
    // product?: Product;
};

const ProductCard: NextPage<ProductCardProps> = () => {
    return (
        <>
            {/* <div className='p-4'>
                <NextLink
                    href='/products/[id]'
                    as={`/products/${product.id}`}>
                    <div className='my-auto'>
                        <NextImage
                            className='rounded-full'
                            src={product.picture}
                            alt='Avatar'
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="my-3">
                    <h2 className="text-3xl text-gray-700">Add a Product</h2>
                </div>
                    <div className='ml-4'>
                        <p className='text-xl text-gray-700'>{product.title}</p>
                        <p className='text-xl text-gray-700'>${product.price}</p>
                        <desc className="text-gray-500">{product.description}</desc>
                    </div>
                </NextLink>
            </div> */}

            {/* <div className='w-auto m-0 p-4'>
                <NextLink
                    className='border-1 border-indigo-900 rounded-md no-underline hover:underline'
                    href='/products/[id]'
                // href='/products/[id]'
                // as={`/products/${product.id}`}
                >
                    <div className='my-auto'>
                        <NextImage
                            className='m-0 p-0 bg-black rounded-none'
                            src=''
                            // src={product.picture}
                            alt='Avatar'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className=''>
                        <h4 className='my-4 text-xl text-gray-700 no-underline hover:underline'>
                            Typeboard
                        </h4>
                        <p className='text-xl text-gray-700 no-underline hover:underline'>
                            $49
                        </p>
                    </div>
                </NextLink>
            </div> */}

            {/* <div className='w-auto m-0 p-4 bg-indigo-700'>
                <div className='my-auto'>
                    <NextImage
                        className='m-0 p-0 bg-black rounded-none'
                        src=''
                        // src={product.picture}
                        alt='Avatar'
                        width={100}
                        height={100}
                    />
                </div>
                <NextLink
                    className='my-0 border-1 border-indigo-900 rounded-md no-underline hover:underline'
                    href='/products/[id]'
                // href='/products/[id]'
                // as={`/products/${product.id}`}
                >
                    <h4
                        className='my-16 text-gray-700 font-bold text-xl no-underline hover:underline'
                    >
                        Typeboard
                    </h4>
                </NextLink>
                <desc
                    className='text-xl text-gray-700 no-underline hover:underline'
                >
                    $49
                </desc>
            </div> */}

            <div className='min-w-px bg-neutral-900 border-2 border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <NextLink
                    className='border border-transparent rounded-none'
                    href=''>
                    <NextImage
                        className='border border-transparent rounded-none'
                        // className="rounded-t-lg border border-black"
                        // src="/docs/images/blog/image-1.jpg"
                        src=''
                        alt=''
                        width={100}
                        height={100}
                    />
                </NextLink>
                <div className='p-5 border border-transparent rounded-none dark:bg-white'>
                    <NextLink
                        className='border border-transparent rounded-none'
                        href=''>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border border-transparent rounded-none'>Noteworthy Technology</h5>
                    </NextLink>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 border border-transparent rounded-none'>$49</p>
                    <NextLink
                        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-transparent'
                        href=''>
                        View product
                    </NextLink>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
