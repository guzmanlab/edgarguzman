import type { NextPage, NextPageContext } from 'next';

type Props = {
    statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
    return <section className='section'>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</section>;
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
