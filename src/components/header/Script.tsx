import NextScript from 'next/script';
import { type FC, type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    type?: 'text/javascript';
    src?: string;
    status?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker';
};

const Scripture: FC<Props> = ({ children, type, src, status }) => {
    return (
        <NextScript
            type={type}
            strategy={status}
            src={src}
            onError={e => {
                console.log('Script failed to load', e);
            }}>
            {children}
        </NextScript>
    );
};

export default Scripture;
