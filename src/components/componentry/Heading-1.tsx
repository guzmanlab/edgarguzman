// @components/componentry/Heading-1.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Props = {
    id?: string;
    className?: string;
    children?: ReactNode;
};

const H1: NextPage<Props> = ({ id, className, children, ...props }): JSX.Element => {
    return (
        <h1
            id={id}
            className={className}>
            {/* <h1>Heading-1</h1> */}
            {children}
        </h1>
    );
};
export default H1;
