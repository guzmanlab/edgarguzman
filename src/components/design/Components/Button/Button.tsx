import React, { type FC } from 'react';

type Props = {
    content: string;
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
};

const Button: FC<Props> = ({ size = 'medium', content, primary = false, backgroundColor, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <button
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            type='button'
            {...props}>
            {label}
        </button>
    );
};

export default Button;
