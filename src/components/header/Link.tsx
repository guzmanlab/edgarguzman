import NextHead from 'next/head';
import { type FC } from 'react';
import config from 'src/lib/config';

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
