// @page/index
import type { NextPage } from 'next';
import NextLink from 'next/link';
import React, { HTMLAttributes, useEffect, useState, type ReactNode } from 'react';

// import { Authentication, FontType, Title } from '@components';
// import config from '../../lib/config';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        zoomedSearch?: {
            trigger: string;
        };
    }
}

type Props = {
    children?: ReactNode;
    // children?: HTMLAttributes;
    error?: string;
    __html?: ReactNode;
};

function myGeeks() {
    const t = document.getElementsByTagName('template')[0];
    const clone = t.content.cloneNode(true);
    document.body.appendChild(clone);
}

// const Template: NextPage<Props> = ({ children, ...attrs }): JSX.Element => {
//     // console.log(supabase.auth.getUser());
//     // const tempe = () => {
//     //     // if ('content' in document.createElement('template')) {
//     //     //     // Instantiate the table with the existing HTML tbody
//     //     //     // and the row with the template
//     //     //     const tbody = document.querySelector("tbody");
//     //     //     const template = document.querySelector('#productrow');

//     //     //     // Clone the new row and insert it into the table
//     //     //     const clone = template.content.cloneNode(true);
//     //     //     let td = clone.querySelectorAll("td");
//     //     //     td[0].textContent = "1235646565";
//     //     //     td[1].textContent = "Stuff";

//     //     //     tbody.appendChild(clone);

//     //     //     // Clone the new row and insert it into the table
//     //     //     const clone2 = template.content.cloneNode(true);
//     //     //     td = clone2.querySelectorAll("td");
//     //     //     td[0].textContent = "0384928528";
//     //     //     td[1].textContent = "Acme Kidney Beans 2";

//     //     //     tbody.appendChild(clone2);

//     //     // } else {
//     //     //     // Find another way to add the rows to the table because
//     //     //     // the HTML template element is not supported.
//     //     //     console.log('Hello');
//     //     // }

//     //     const container = document.getElementById("container");
//     //     const template = document.getElementById("template");

//     //     function clickHandler(event: any) {
//     //         event.target.append(" — Clicked this div");
//     //     }

//     //     const firstClone = template.content.cloneNode(true);
//     //     firstClone.addEventListener("click", clickHandler);
//     //     container.appendChild(firstClone);

//     //     const secondClone = template.content.firstElementChild.cloneNode(true);
//     //     secondClone.addEventListener("click", clickHandler);
//     //     container.appendChild(secondClone);

//     // };

//     return (
//         <>
//             {/* <Title /> */}

//             {/* <>
//                 <Authentication />
//             </> */}

//             {/* <template>
//                 <h1>Hot new Item to Obtain</h1>
//                 <pre>{tempe}</pre>
//             </template>

//             <div id="container"></div>

//             <template id="template">
//                 <div>Click me</div>
//             </template> */}

//             {/* <div id="search_icon" zoomedSearch={{ trigger: 'OnClick' }}>
//                 Extends React's HTMLAttributes in Typescript
//             </div> */}

//             {/* <h1>GeeksforGeeks</h1>
//             <h3>HTML template tag</h3>

//             <p>
//                 Content inside a template tag will
//                 be hidden from the client.
//             </p>

//             <button
//                 onClick={() => myGeeks()}
//             >
//                 Show content
//             </button>

//             <template>
//                 <h2>GeeksforGeeks: A computer science portal</h2>
//                 <img src=
//                     "https://media.geeksforgeeks.org/wp-content/uploads/20210922100958/gfg3-300x300.png" />
//                 Content Writer:
//                 <input type="text"
//                     placeholder="author name" />
//             </template>

//             <p>End of the example of template tag</p> */}

//             <template
//                 {...attrs}
//                 dangerouslySetInnerHTML={{ __html: children }}
//             />
//         </>
//     );
// };

// const Template = ({ children }: Props) => children

// const Template = ({ children }: Props) JSX.Element => <template>{children}</template>

const Template = ({ children }: Props): JSX.Element => <template>{children}</template>;

export default Template;
