// @components/elements/Detail-Summary.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

interface DetailCardProps {
    id?: string;
    className?: string;
    title?: string;
    children?: ReactNode;
}

const Details: NextPage<DetailCardProps> = ({ ...props }): JSX.Element => {
    return (
        <details
            className='
                outline
                rounded-lg
                p-4
                flex
                hover:cursor-pointer
            '>
            <summary
                className='
                my-auto
            '>
                {props.title}
            </summary>
            <desc
                className='
                ml-4
            '>
                {props.children}
            </desc>
        </details>
    );
};

export default Details;
