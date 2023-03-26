// @components/componentry/Section.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

type Props = {
    className?: string;
    children?: ReactNode;
};

const Section: NextPage<Props> = ({ className, children, ...props }): JSX.Element => {
    return (
        <section className={className}>
            {/* <section>Section</section> */}
            {children}
        </section>
    );
};
export default Section;
