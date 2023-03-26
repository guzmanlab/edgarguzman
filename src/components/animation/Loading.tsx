// @components/animation/Loading.tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import config from '@lib/configuration';

const Loading: NextPage = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url: any) => {
            url !== router.asPath && setLoading(true);
        };
        const handleComplete = (url: any) => {
            url === router.asPath && setLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return (
        <section>
            <h1 className='title font-bold text-2xl'>{loading ? `${config.env.LOADING}` : 'Loading...'}</h1>
        </section>
    );
};

export default Loading;
