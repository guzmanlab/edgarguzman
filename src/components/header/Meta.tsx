import NextHead from 'next/head';
import { type FC } from 'react';
import config from 'src/lib/config';

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
