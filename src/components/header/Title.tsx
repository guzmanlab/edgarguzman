import NextHead from 'next/head';
import { type FC } from 'react';

type Props = {
    title: string;
};

const Title: FC<Props> = ({ title }) => {
    return (
        <NextHead>
            <title>{title} : Edgar Guzman</title>
        </NextHead>
    );
};

export default Title;
