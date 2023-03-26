// @components/componentry/Divider.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Props = {
    id?: string;
    className?: string;
    children?: ReactNode;
};

const Divider: NextPage<Props> = ({ id, className, children, ...props }): JSX.Element => {
    return (
        <div
            id={id}
            className={className}>
            {/* <div>Divider</div> */}
            {children}
        </div>
    );
};
export default Divider;
