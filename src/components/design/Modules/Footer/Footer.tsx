import React, { type FC } from 'react';

type Props = {
    user?: string;
};

const Footer: FC<Props> = ({ user }) => {
    return (
        <footer>
            <div className='wrapper'>
                <div>
                    <h1>Acme</h1>
                </div>
                <div>{user}</div>
            </div>
        </footer>
    );
};

export default Footer;
