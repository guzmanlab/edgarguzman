import type { NextPage } from 'next';
import type { ReactNode } from 'react';

interface LabelProps {
    id?: string;
    className?: string;
    htmlFor?: string;
    children?: ReactNode;
}

const Label: NextPage<LabelProps> = ({ id, className, htmlFor, children, ...rest }): JSX.Element => {
    return (
        <label
            {...rest}
            id={id}
            className={className}
            htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;
