// { Linkaged } @components : @components/componentry/Linkage.tsx
import NextLink, { type LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, type FC, type MouseEventHandler, type PropsWithChildren, type ReactNode } from 'react';

// import config from '@lib/config';

// type Props = {
//     className?: string;
//     rel?: 'noopener noreferrer';
//     // type?: string;
//     target?: '_blank';
//     href?: string | any | undefined;
//     style?: any;
//     as?: any | undefined;
//     onClick?: MouseEventHandler | undefined;
//     children?: ReactNode;
//     passHref: any
// };

type Props = LinkProps & {
    activeClassName?: string;
    className?: string;
    rel?: 'noopener noreferrer';
    // type?: string;
    target?: '_blank';
    href?: string | any | undefined;
    style?: any;
    as?: any | undefined;
    onClick?: MouseEventHandler | undefined;
    children?: ReactNode;
    passHref?: any;
};

// // function sendLinksToNewWindow(event: any) {
// //     if (!(event.target instanceof HTMLElement))
// //         return;
// //     // Use .closest to handle scenario where target isn't the anchor itself.
// //     // Ex: `<a href='https://example.com'><span>click here</span></a>`
// //     const anchor = event.target.closest('a');
// //     if (anchor !== null) {
// //         anchor.target = '_blank';
// //         anchor.rel = 'noopener';
// //     }
// // }

const Linkaged = ({ className, rel, href, target, style, as, activeClassName, onClick, children, ...rest }: PropsWithChildren<Props>): JSX.Element => {
    const { asPath, isReady } = useRouter();
    const [computedClassName, setComputedClassName] = useState(className);

    // const handleClick = (e: any) => {
    //     e?.preventDefault();
    //     // alert('clicked');
    // };

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | undefined, url: string) => {
        e?.preventDefault();
        // alert('clicked');
    };

    useEffect(() => {
        // Check if the router fields are updated client-side
        if (isReady) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL((as || href) as string, location.href).pathname;

            // Using URL().pathname to get rid of query and hash
            const activeClassName = new URL(asPath, location.href).pathname;

            const newClassName = linkPathname === activeClassName ? `${className} ${activeClassName}`.trim() : className;

            if (newClassName !== computedClassName) {
                setComputedClassName(newClassName);
            }
        }
    }, [asPath, isReady, as, href, activeClassName, className, computedClassName]);

    return (
        <NextLink
            {...rest}
            // className={className}
            href={href || ''}
            target={target}
            rel={rel}
            style={style}
            onClick={onClick}
            // Version 2
            className={computedClassName}
            // passHref
        >
            {children}
        </NextLink>
    );
};

export default Linkaged;
