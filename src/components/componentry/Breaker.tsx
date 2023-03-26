import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Props = {
    id?: string;
    className?: string;
    children?: ReactNode;
};

const Breaker: NextPage<Props> = ({ id, className, children, ...props }): JSX.Element => {
    return (
        <br
            id={id}
            className={className}
            style={{
                marginBlock: '0.375rem',
                marginInline: '0'
            }}
        />
    );
};

export default Breaker;
