import NextLink from 'next/link';
import config from '../../lib/config';

const Header = () => {
    return (
        <header id='header'>
            <section className='section'>
                <div className='guzman familiar'>
                    <NextLink href='/'>{config.env.COMPANY_LOGO}</NextLink>
                </div>
            </section>
        </header>
    );
};

export default Header;
