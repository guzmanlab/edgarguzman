// @components/componentry/Heading-4.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Props = {
    id?: string;
    className?: string;
    children?: ReactNode;
};

const H4: NextPage<Props> = ({ id, className, children, ...props }): JSX.Element => {
    return (
        <h4
            id={id}
            className={className}>
            {/* <h4>Heading-4</h4> */}
            {children}
        </h4>
    );
};

export default H4;
