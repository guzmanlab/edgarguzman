import React, { type FC, type ReactNode } from 'react';
import { Title } from '../components';
// import config from '../lib/config';

type Props = {
    children: ReactNode;
};

const Contact: FC<Props> = () => {
    return (
        <>
            <Title title='Contact' />

            <section>
                <h1 className='title'>Contact</h1>

                <br className='my-20' />

                <form
                    className='m-0'
                    action=''
                    method=''
                    autoComplete='on'>
                    <label form='fname'>First name:</label>
                    <br className='my-6' />
                    <input
                        className='border-1 border-solid'
                        type='text'
                        name='name'
                    />
                    <br className='my-6' />
                    <label form='mname'>Middle name: (Optional)</label>
                    <br className='my-6' />
                    <input
                        className='border-1 border-solid'
                        type='text'
                        name='name'
                    />
                    <br className='my-6' />
                    <label form='lname'>Last name:</label>
                    <br className='my-6' />
                    <input
                        className='border-1 border-solid'
                        type='text'
                        name='name'
                    />
                    <br className='my-6' />
                    <label form='fname'>Email:</label>
                    <br className='my-6' />
                    <input
                        className='border-1 border-solid'
                        type='text'
                        name='name'
                    />
                    <br className='my-6' />
                    <label form='message'>Message:</label>
                    <br className='my-6' />
                    <textarea className='border-1 border-solid resize-none w' />
                    <br className='my-6' />
                    <input
                        className='my-20 py-6 px-16 white bg-black weight-600 radius-6 cursor-default hover:cursor-pointer'
                        type='submit'
                        value='Submit'
                    />
                </form>
            </section>
        </>
    );
};

export default Contact;
