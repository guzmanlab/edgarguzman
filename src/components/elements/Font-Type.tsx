// Copyright (c) 2023 Edgar Guzman
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Inter } from '@next/font/google';
import localFont from '@next/font/local';
import type { ReactNode } from 'react';

// import config from '../../lib/configuration';

type Props = {
    children?: ReactNode;
};

const familiar = localFont({
    // src: config.env.NEXT_FONT_FAMILIAR,
    src: '../../lib/fonts/Familiar Pro-Bold.otf'
    // weight: config.env.NEXT_FONT_WEIGHT_600,
    // style: config.env.NEXT_FONT_TYPE_NORMAL
});

const airal = localFont({
    src: [
        {
            // path: config.env.NEXT_FONT_ARIAL,
            path: '../../lib/fonts/arial.ttf'
            // weight: config.env.NEXT_FONT_WEIGHT_400,
            // style: config.env.NEXT_FONT_TYPE_NORMAL
        }
        // {
        //     path: config.env.NEXT_FONT_ARIAL_ITALIC,
        //     // weight: config.env.NEXT_FONT_WEIGHT_400,
        //     // style: config.env.NEXT_FONT_TYPE_NORMAL
        // },
        // {
        //     path: config.env.NEXT_FONT_ARIAL_BOLD_ITALIC,
        //     // weight: config.env.NEXT_FONT_WEIGHT_600,
        //     // style: config.env.NEXT_FONT_TYPE_NORMAL
        // },
        // {
        //     path: config.env.NEXT_FONT_ARIAL_BOLD,
        //     // weight: config.env.NEXT_FONT_WEIGHT_600,
        //     // style: config.env.NEXT_FONT_TYPE_NORMAL
        // },
        // {
        //     path: config.env.NEXT_FONT_ARIAL_BLACK,
        //     // weight: config.env.NEXT_FONT_WEIGHT_900,
        //     // style: config.env.NEXT_FONT_TYPE_NORMAL
        // }
    ]
});

const inter = Inter({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});

const FontType = ({ children }: Props) => {
    return (
        <>
            {/* <html
                className={airal.className} lang='en'
            >
                <body>{children}</body>
            </html> */}
            <section
                className={airal.className}
                lang='en'>
                <body>{children}</body>
            </section>
        </>
    );
};
export default FontType;
