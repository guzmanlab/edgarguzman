// @components/elements/Tables.tsx
import type { NextPage } from 'next';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';

import Input from './Input';
import TrSpacer from './Tr-Spacer';

interface TableProps {
    id?: string | undefined;
    className?: string | undefined;
    // htmlFor?: string | undefined
    children?: ReactNode;

    action?: string | undefined;
    method?: string | undefined;
    validateOnBlur?: boolean | undefined;
    // onSubmit: () => void | undefined
}

const Table: NextPage<TableProps> = ({
    id,
    className,
    // htmlFor,
    children,
    action,
    method,
    validateOnBlur,
    // onSubmit,
    ...rest
}): JSX.Element => {
    return (
        <table
            {...rest}
            id={id}
            className={className}
            // onSubmit={onSubmit}
        >
            <TrSpacer>
                <th>{children}</th>
            </TrSpacer>
            <TrSpacer>
                <td>{children}</td>
            </TrSpacer>
        </table>
    );
};

Table.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    validateOnBlur: PropTypes.bool
    // onSubmit: PropTypes.func
};

export default Table;
