// src/components/componentry/Button.tsx
import React, { type FC, type ReactNode } from 'react';

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

const Button: FC<Props> = ({ className, content, primary = false, backgroundColor, size = 'medium', type = 'button', onClick, children, ...rest }): JSX.Element => {
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
        <div>
            {/* ... */}
            <button
                {...rest}
                className={className}
                type={type}
                onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;
