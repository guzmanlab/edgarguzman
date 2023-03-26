// @components/header/Title.tsx
import NextHead from 'next/head';
import { type FC } from 'react';
import config from '../../lib/configuration';

const name = config.env.COMPANY_NAME;

type Props = {
    title?: string;
    description?: string;
};

const Title: FC<Props> = ({ title, description }): JSX.Element => {
    return (
        <NextHead>
            {description && (
                <meta
                    name='description'
                    content={description ? `${description}` : description}
                />
            )}
            {description && (
                <meta
                    name='og:description'
                    content={description ? `${description}` : description}
                />
            )}
            <meta
                name='og:title'
                content={description ? `${description} : ${description}` : description}
            />
            <title>{title ? `${title} : ${name}` : name}</title>
        </NextHead>
    );
};

export default Title;
