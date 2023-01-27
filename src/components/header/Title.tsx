import NextHead from 'next/head';
import { type FC } from 'react';
import config from '../../lib/config';

type Props = {
    title?: string;
};

const Title: FC<Props> = ({ title }) => {
    return (
        <NextHead>
            <title>{title ? `${title} : ${config.env.COMPANY_LOGO}` : config.env.COMPANY_LOGO}</title>
        </NextHead>
    );
};

export default Title;
