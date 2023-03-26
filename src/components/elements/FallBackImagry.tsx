import NextImage from 'next/image';
import React, { useEffect, useState, type FC } from 'react';

import config from '../../lib/config';

declare type SafeNumber = number | `${number}`;

type Props = {
    src?: string | undefined;
    alt?: string | undefined;
    caption?: string | string | undefined;
    className?: string | string | undefined;
    style?: any | string | undefined;
    width?: SafeNumber | undefined;
    height?: SafeNumber | undefined;
    layout?: 'fill' | 'responsive' | string | undefined;
    overflow?: 'hidden' | string | undefined;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | string | undefined;
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' | string | undefined;
    fill?: boolean | undefined;
    noOptimization?: boolean | undefined;
    unoptimized?: boolean | undefined;
    unsized?: boolean | undefined;
    onError?: () => void | undefined;
};

const Imagry: FC<Props> = ({ src, alt, ...rest }): JSX.Element => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <NextImage
            {...rest}
            // src={`/${imgSrc}` || imgSrc || config.env.NOT_FOUND_IMAGE}
            src={imgSrc || config.env.NOT_FOUND_IMAGE}
            alt={alt || config.env.NOT_FOUND_IMAGE}
            onError={() => {
                setImgSrc(config.env.NOT_FOUND_IMAGE);
            }}
        />
    );
};

export default Imagry;
