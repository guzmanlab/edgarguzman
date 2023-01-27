import { type NextPage } from 'next';
import { Title } from '../components';
import config from '../lib/config';

const Home: NextPage = () => {
    return (
        <>
            <Title />

            <section>
                <h1 className='title'>Welcome to {config.env.COMPANY_LOGO} Website</h1>

                <br className='my-20' />

                <p>This website is still under construction mode.</p>
            </section>
        </>
    );
};

export default Home;
