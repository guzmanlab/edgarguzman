// @components/layouts/sidebar-layout.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import Section from '../elements/Section';

type Props = {
    className?: string;
    content?: string;
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    onClick?: any;
    children?: ReactNode;
};

const SidebarLayout: NextPage<Props> = ({ className, content, primary = false, backgroundColor, size = 'medium', type = 'button', onClick, children, ...rest }): JSX.Element => {
    // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    // return (
    //     <button
    //         {...rest}
    //         className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //         style={{ backgroundColor }}
    //         type='button'
    //     >
    //         {children}
    //     </button>
    // );

    function handleClick() {
        console.log('increment like count');
    }

    return (
        <Section
            className='
                    grid
                    grid-cols-2
                    grid-rows-1
                '>
            <aside
                {...rest}
                className={className}
                // type={type}
                onClick={onClick}>
                {/* {children} */}
            </aside>
            <Section
                {...rest}
                className={className}
                // type={type}
                // onClick={onClick}
            >
                {children}
            </Section>
            <aside
                {...rest}
                className={className}
                // type={type}
                onClick={onClick}>
                {/* {children} */}
            </aside>
        </Section>
    );
};

export default SidebarLayout;
