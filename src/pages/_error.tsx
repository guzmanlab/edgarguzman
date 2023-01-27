import type { NextPage, NextPageContext } from 'next';
import { Title } from '../components';

type Props = {
    statusCode?: number;
};

const Error: NextPage<Props> = ({ statusCode }) => {
    return (
        <>
            <Title title={statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'} />

            <section className='section'>
                <h1 className='title'>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
            </section>
        </>
    );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
