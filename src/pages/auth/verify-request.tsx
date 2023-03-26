// @pages/auth/verify-request.tsx
import NextLink from 'next/link';

import { Section, Title } from '@components';

const VerifyRequest = () => {
    return (
        <>
            <Title title='' />

            <Section
                className='
                    min-h-screen
                    flex
                    flex-col
                    items-center
                    justify-center
                '>
                <h1
                    className='
                        text-3xl
                        font-bold
                    '>
                    Check your e-mailbox for a verify mail.
                </h1>
                <br
                    className='
                        text-inherit
                        no-underline
                        cursor-default
                        hover:cursor-pointer
                        hover:underline
                        hover:decoration-2
                        hover:decoration-solid
                        hover:decoration-black
                    '
                />
                <NextLink
                    className='
                        text-inherit
                        no-underline
                        cursor-default
                        hover:cursor-pointer
                        hover:underline
                        hover:decoration-2
                        hover:decoration-solid
                        hover:decoration-black
                    '
                    href='/'>
                    homepage
                </NextLink>
            </Section>
        </>
    );
};

export default VerifyRequest;
