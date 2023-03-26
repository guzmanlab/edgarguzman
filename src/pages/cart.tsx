import { Title } from '@components';

const Cart = ({ Cart }: any) => {
    return (
        <>
            <Title title='Cart' />

            <section>
                <h1 className='titie'>Cart</h1>

                <br className='my-20' />

                <desc>Shopping Cart</desc>

                {/* Add a Dynamic Product Array list when Add to Cart button when clicked. */}

                {/* <pre>{Cart.first() == 'Edgar' ? 'Hello, Edgar!' : 'Hello, world-cart!'}</pre> */}
            </section>
        </>
    );
};

export default Cart;
