import React, { type FC, type ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
    return <main id='main'>{children}</main>;
};

export default Main;
