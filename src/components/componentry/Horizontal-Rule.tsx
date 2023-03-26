import type { NextPage } from 'next';

type Props = {
    id?: string;
    className?: string;
};

const Hr: NextPage<Props> = ({ id, className, ...rest }): JSX.Element => {
    return (
        <hr
            {...rest}
            id={id}
            className={className}
        />
    );
};

export default Hr;
