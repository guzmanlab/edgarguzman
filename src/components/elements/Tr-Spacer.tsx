// @components/elements/TrSpacer.tsx
import type { NextPage } from 'next';
import NextLink from 'next/link';
import type { ReactNode } from 'react';

// import { Authentication, FontType, Title } from '@components';
// import config from '../../lib/config';

// declare module 'react' {
//     interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//         // extends React's HTMLAttributes
//         zoomedSearch?: {
//             trigger: string
//         }
//     }
// }

type Props = {
    children?: ReactNode;
    // children?: React.HTMLAttributes
    error?: string;
    __html?: ReactNode;
};

const TrSpacer: NextPage<Props> = ({ children, ...rest }): JSX.Element => {
    return <tr>{children}</tr>;
};

export default TrSpacer;
