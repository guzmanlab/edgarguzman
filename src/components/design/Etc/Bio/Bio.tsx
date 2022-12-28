import React, { type FC } from 'react';

type Props = {
    secure?: 'https' | 'http';
    headshot?: string;
    subdomain?: string;
    name: string;
    tagline?: string;
    role?: string;
    width?: number;
    height?: number;
    format?: 'svg' | 'png' | 'jpng' | 'jpg';
};

const Bio: FC<Props> = ({ secure, headshot, subdomain, name, tagline, role, width, height, format, ...props }) => {
    return (
        <div className='bio'>
            <div className='bioImage'>
                <img
                    src={`${secure}://${headshot}/${subdomain}${width}x${height}.${format}`}
                    width={width}
                    height={height}
                    alt={`Headshot of ${name}`}
                    {...props}
                />
            </div>
            <div className='bioContent'>
                <h1 className='bioContentName'>{name}</h1>
                <li className='bioContentRole'>{role}</li>
                <desc className='bioContentTagline'>{tagline}</desc>
            </div>
        </div>
    );
};

export default Bio;
