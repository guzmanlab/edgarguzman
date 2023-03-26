// @components/elements/Form.tsx
import type { NextPage } from 'next';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';

type Props = {
    id?: string | undefined;
    className?: string | undefined;
    action?: string | undefined;
    method?: string | undefined;
    validateOnBlur?: boolean | undefined;
    onSubmit?: () => void | undefined;
    children?: ReactNode | undefined;
};

const Form: NextPage<Props> = ({ id = '', className = '', action = '', method = '', onSubmit, children, ...rest }): JSX.Element => {
    return (
        <form
            {...rest}
            id={id}
            className={className}
            action={action}
            method={method}>
            {children}
        </form>
    );
};

Form.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    action: PropTypes.string,
    method: PropTypes.string,
    validateOnBlur: PropTypes.bool,
    onSubmit: PropTypes.func
};

export default Form;
