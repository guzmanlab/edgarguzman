// import { Form, Formik } from 'formik'
import type { NextPage } from 'next';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
import { useState } from 'react';

// import { Input } from '@components';
// import Divider from './Division';
import Input from './Input';
import Label from './Label';

type Props = {
    id?: string | undefined;
    className?: string | undefined;
    htmlFor?: string | undefined;
    children?: ReactNode;

    action?: string | undefined;
    method?: string | undefined;
    validateOnBlur?: boolean | undefined;
    onSubmit?: () => void | undefined;
};

const FieldsetForm: NextPage<Props> = ({ id, className, htmlFor, children, action = '', method = '', validateOnBlur, onSubmit, ...rest }): JSX.Element => {
    return (
        <form
            {...rest}
            id={id}
            className={className}
            action={action}
            method={method}
            // validateOnBlur={false}
            onSubmit={onSubmit}>
            <fieldset className=''>
                <Label
                    {...rest}
                    id={id}
                    className={className}
                    htmlFor={htmlFor}>
                    {children}
                </Label>

                <Input
                    name='price'
                    type='number'
                    // min="0"
                    label='Price per night'
                    placeholder='100'
                    disabled
                />
            </fieldset>
        </form>
    );
};

FieldsetForm.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    validateOnBlur: PropTypes.bool,
    onSubmit: PropTypes.func
};

export default FieldsetForm;
