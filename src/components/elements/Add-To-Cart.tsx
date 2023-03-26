// @components/elements/Add-To-Cart.tsx
import type { NextPage } from 'next';
// import React, { useForm } from 'react-hook-form';

// import Input from './Input';
// import InputSpacer from './InputSpacer';

interface AddToCartProps {
    name: any;
    onSubmit?: any;
}

const AddToCart: NextPage<AddToCartProps> = props => {
    // const { register, handleSubmit } = useForm()
    const handleClick = () => {
        alert(`Added ${props.name} to Cart`);
    };

    return (
        <>
            {/* <form
                className='flex flex-col'
                onSubmit={handleSubmit(props.onSubmit)}
                >
                <InputSpacer>
                    <Input
                        placeholder='First Name'
                        name='firstName'
                        // formRef={register({ required: true })}
                        formRef={register('firstName', { required: true })}
                    />
                </InputSpacer>
                <InputSpacer>
                    <Input
                        placeholder='Last Name'
                        name='lastName'
                        formRef={register('lastName', { required: true })}
                    />
                </InputSpacer>
                <InputSpacer>
                    <Input
                        placeholder='Email'
                        name='email'
                        formRef={register('email', { required: true })}
                    />
                </InputSpacer>
                <InputSpacer>
                    <Input
                        placeholder='Avatar'
                        name='avatar'
                        formRef={register('avatar', { required: true })}
                    />
                </InputSpacer>

                <button
                    className='bg-blue-500 rounded-md p-4 text-blue-100'
                    type='submit'>
                    Submit
                </button>
            </form> */}

            <button
                className='text-white bg-red-500   hover:bg-red-600 rounded py-1 px-3 mt-5 client'
                onClick={handleClick}>
                Add to Cart
            </button>
        </>
    );
};

export default AddToCart;
