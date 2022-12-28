import { type NextPage } from 'next';
import NextHead from 'next/head';
import config from '../lib/config';

const Home: NextPage = () => {
    return (
        <>
            <NextHead>
                <title>Edgar Guzman</title>
            </NextHead>

            <div>
                <h1 className='title'>Welcome to {config.env.COMPANY_LOGO} Website</h1>
            </div>
        </>
    );
};

export default Home;
