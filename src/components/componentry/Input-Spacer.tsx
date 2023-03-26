import { type FC, type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const InputSpacer: FC<Props> = ({ children }): JSX.Element => {
    return <div className='mb-3'>{children}</div>;
};

export default InputSpacer;
