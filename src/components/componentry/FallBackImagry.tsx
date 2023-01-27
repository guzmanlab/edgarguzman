import NextImage from 'next/image';
import React, { useEffect, useState, type FC } from 'react';
import config from '../../lib/config';

type Props = {
    src?: string;
    alt?: string;
    caption?: string;
    className?: string;
    width?: number;
    height?: number;
    layout?: 'fill';
    overflow?: 'hidden';
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
    unoptimized?: boolean;
    onError: () => void;
};

const Imagry: FC<Props> = ({ src, alt, ...rest }) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <NextImage
            {...rest}
            src={imgSrc || config.env.NOT_FOUND_IMAGE}
            alt={alt || config.env.NOT_FOUND_IMAGE}
            onError={() => {
                setImgSrc(config.env.NOT_FOUND_IMAGE);
            }}
        />
    );
};

export default Imagry;
