// type InputProps = {
//     placeholder?: string;
//     name?: string;
//     formRef?: any;
//     type?: any;
//     disabled?: any;
//     spellCheck?: boolean;
//     label?: string;
// };

// export default function Input(props: InputProps) {
//     return (
//         <input
//             className='rounded p-4 text-xl w-full'
//             name={props.name}
//             placeholder={props.placeholder}
//             ref={props.formRef}
//             type={props.type}
//             disabled={props.disabled}
//             spellCheck={props.spellCheck}
//             value={props.label}
//         />
//     );
// }

// import { ExclamationCircleIcon } from '@heroicons/react/solid'
// // import classNames from 'classnames';
// import { useField } from 'formik'
// import PropTypes from 'prop-types'

// const Input = ({ type = '', label = '', className = '', ...props }: any): JSX.Element => {
//     const [field, meta] = useField(props)
//     const error = meta?.touched && meta?.error

//     return (
//         // <div className={classNames(className, 'flex flex-col space-y-1')}>
//         <div className={'flex flex-col space-y-1'}>
//             {label ? (
//                 <label htmlFor="email" className="text-gray-600">
//                     {label}
//                 </label>
//             ) : null}

//             <div className="flex-1">
//                 {type === 'textarea' ? (
//                     <textarea
//                         {...field}
//                         {...props}
//                         className={
//                             'w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed'
//                         }
//                     // className={classNames(
//                     //     'w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed',
//                     //     error
//                     //         ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
//                     //         : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
//                     // )}
//                     />
//                 ) : (
//                     <div className="relative">
//                         <input
//                             {...field}
//                             {...props}
//                             type={type}
//                             className={
//                                 'w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed'
//                             }
//                         // className={classNames(
//                         //     'w-full shadow-sm rounded-md py-2 pl-4 truncate border focus:outline-none focus:ring-4 focus:ring-opacity-20 transition disabled:opacity-50 disabled:cursor-not-allowed',
//                         //     error
//                         //         ? 'border-red-400 text-red-800 focus:border-red-400 focus:ring-red-400'
//                         //         : 'border-gray-300 focus:border-gray-400 focus:ring-gray-400'
//                         // )}
//                         />
//                         {error && type !== 'number' ? (
//                             <span className="pr-2 absolute right-0 top-1/2 -translate-y-1/2">
//                                 <ExclamationCircleIcon className="w-6 h-6 text-red-500" />
//                             </span>
//                         ) : null}
//                     </div>
//                 )}
//             </div>

//             {error ? (
//                 <p name="email" className="text-red-600 text-sm first-letter:uppercase">
//                     {error}
//                 </p>
//             ) : null}
//         </div>
//     )
// }

// Input.propTypes = {
//     type: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     className: PropTypes.string,
// }

// export default Input

// Version 3

// @components/elements/Input.tsx
import type { NextPage } from 'next';
import PropTypes from 'prop-types';
import type { ReactNode } from 'react';

declare type SafeNumber = number | `${number}`;

type Props = {
    id?: string | undefined;
    className?: string | undefined;
    htmlFor?: string | undefined;
    name?: string | undefined;
    label?: string | undefined;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    type?: 'submit' | 'button' | 'checkbox' | 'number' | string | undefined;
    min?: SafeNumber | string | undefined;
    max?: SafeNumber | string | undefined;
    children?: ReactNode | undefined;
};

const Input: NextPage<Props> = ({
    id = '',
    className = '',
    name = '',
    type = '',
    min = '',
    label = '',
    placeholder = '',
    children,
    disabled = false,
    ...props
}: any): JSX.Element => {
    return (
        <>
            {/* <div className="flex-1">
                <input
                    id={id}
                    className={className}
                    name={name}
                    type={type}
                    min={min}
                    // label={label}
                    placeholder={placeholder}
                    aria-placeholder={placeholder}
                    value={children}
                    disabled={disabled}
                />
            </div> */}
            <input
                id={id}
                className={className}
                name={name}
                type={type}
                min={min}
                // label={label}
                placeholder={placeholder}
                aria-placeholder={placeholder}
                value={children}
                disabled={disabled}
            />
        </>
    );
};

// Input.propTypes = {
//     type: PropTypes.string.isRequired,
//     label: PropTypes.string,
//     className: PropTypes.string,
// }

export default Input;
