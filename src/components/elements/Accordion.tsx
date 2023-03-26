// @components/elements/Accordion.tsx
import type { NextPage } from 'next';
import type { ReactNode } from 'react';

import Scripture from '../header/Script';

interface AccordionProps {
    id?: string;
    className?: string;

    title?: string;
    description?: string;

    onSubmit?: any;
    children?: ReactNode;
}

// export function Heading(props: AccordionProps) {
//     return (
//         <>
//             <form
//                 className='flex flex-col'
//                 onSubmit={handleSubmit(props.onSubmit)}
//             >
//                 {props.children}
//             </form>
//         </>
//     );
// }

// export function Description(props: AccordionProps) {
//     return (
//         <>
//             <form
//                 className='flex flex-col'
//                 onSubmit={handleSubmit(props.onSubmit)}>
//                 {props.children}
//             </form>
//         </>
//     );
// }

const Accordion: NextPage<AccordionProps> = (props): JSX.Element => {
    return (
        <>
            <Scripture
                src='http://localhost:3000/scripts/Accordion.js'
                status='afterInteractive'
            />

            <button
                // className={props.className}
                className='accordion'
                type='button'>
                {props.title}
            </button>

            <desc
                // className={props.className}
                className='panel'>
                {props.description || props.children}
            </desc>
        </>
    );
};

export default Accordion;
