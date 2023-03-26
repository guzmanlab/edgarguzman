import config from '@lib/config';
import NextHead from 'next/head';
import { type FC } from 'react';

type Props = {
    rel?: string;
    type?: string;
    sizes?: string;
    href?: string;
};

const Linkage: FC<Props> = ({ rel, type, sizes, href }) => {
    return (
        <NextHead>
            <link
                rel={rel}
                type={type}
                sizes={sizes}
                href={href}
            />
            {/* <link
                    rel='icon'
                    type='image/png'
                    href={config.env.SITE_FAVICON}
                /> */}
        </NextHead>
    );
};

export default Linkage;
