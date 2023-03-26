import config from '../../lib/config';
import Linkage from './Link';
import Meta from './Meta';
import Scripture from './Script';

const Head = () => {
    return (
        <>
            <Meta charSet='utf-8' />
            <Meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
            <Meta
                name='description'
                content={`an E-Commerce made by ${config.env.COMPANY_NAME}`}
            />
            <Meta
                httpEquiv='X-UA-Compatible'
                content='IE=edge'
            />
            <Linkage
                rel='apple-touch-icon'
                sizes='180x180'
                href='/images/apple-touch-icon.png'
            />
            <Linkage
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/images/favicon-32x32.png'
            />
            <Linkage
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/images/favicon-16x16.png'
            />
            <Linkage
                rel='manifest'
                href='/images/site.webmanifest'
            />
            <Linkage
                rel='icon'
                type='image/png'
                href={config.env.SITE_FAVICON}
            />
            <Meta
                name='robots'
                content='index, follow'
            />
            <Scripture
                type='text/javascript'
                status='beforeInteractive'
                src='/scripts/Welcome.js'
            />
        </>
    );
};

export default Head;
