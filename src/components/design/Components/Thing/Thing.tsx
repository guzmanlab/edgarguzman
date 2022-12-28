import type { FC, ReactChild } from 'react';
import React, { HTMLAttributes } from 'react';

type Props = {
    children?: ReactChild;
};

const Thing: FC<Props> = ({ children }) => {
    return <div>{children || 'the snozzberries taste like snozzberries'}</div>;
};

export default Thing;
