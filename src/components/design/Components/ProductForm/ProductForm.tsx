import React, { type FC } from 'react';

type Props = {
    text: string;
};

const ProductForm: FC<Props> = ({ text }) => {
    return (
        <form>
            <textarea
                name='content'
                className='form-content'
                aria-placeholder={text}
                placeholder={text}>
                {text}
            </textarea>
            <button className='form-button'>Add New Product</button>
        </form>
    );
};

export default ProductForm;
