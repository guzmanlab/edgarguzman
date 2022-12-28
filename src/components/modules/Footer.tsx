import NextLink from 'next/link';
import config from '../../lib/config';

const Footer = () => {
    return (
        <footer id='footer'>
            <section className='section'>
                <div className='guzman'>
                    <NextLink href='/'>{config.env.COMPANY_LOGO}</NextLink>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
