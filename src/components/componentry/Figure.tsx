import type { NextPage } from 'next';
import NextImage from 'next/image';
import type { ReactNode } from 'react';

// import Imagry from './FallBackImagry'

type Props = {
    id?: string;
    className?: string;
    children?: ReactNode;
};

const Figure: NextPage<Props> = ({ id, className, children }): JSX.Element => {
    return (
        <figure
            id={id}
            className={className}>
            {/* <Imagry
                    // children={children}
                    /> */}

            {children}

            <figcaption>{children}</figcaption>
        </figure>
    );
};

export default Figure;
