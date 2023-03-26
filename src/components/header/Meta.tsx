import config from '@lib/configuration';
import NextHead from 'next/head';
import { type FC } from 'react';

type Props = {
    charSet?: string;
    name?: string;
    content?: string;
    httpEquiv?: string;
};

const Meta: FC<Props> = ({ charSet, name, content, httpEquiv }) => {
    return (
        <NextHead>
            <meta
                charSet={charSet}
                name={name}
                content={content}
                httpEquiv={httpEquiv}
            />
        </NextHead>
    );
};

export default Meta;
