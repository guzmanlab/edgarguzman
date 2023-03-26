import type { NextPage } from 'next';
import type { FC, ReactNode } from 'react';

import { Title } from '@components';
import Scripture from '@components/header/Script';
// import config from '@lib/config';

type Props = {
    children: ReactNode;
};

const Contact: NextPage<Props> = () => {
    return (
        <>
            <Scripture
                src='http://localhost:3000/scripts/Accordion.js'
                status='afterInteractive'
            />

            <Title title='Contact' />

            <section>
                <h1 className='title'>Contact</h1>

                <br className='my-20' />

                {/* <form
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
                </form> */}

                <button className='accordion'>What are your hours of operation?</button>
                <div className='panel'>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem dolor tempora quo. Minus, qui quisquam iure vero labore odio quaerat
                        minima ad dignissimos consectetur vel quas et nesciunt totam?
                    </desc>
                </div>

                <button className='accordion'>When will my order ship?</button>
                <div className='panel'>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem dolor tempora quo. Minus, qui quisquam iure vero labore odio quaerat
                        minima ad dignissimos consectetur vel quas et nesciunt totam?
                    </desc>
                </div>

                <button className='accordion'>What if my UPS marks my package as delivered but it's nowhere to be found?</button>
                <div className='panel'>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem dolor tempora quo. Minus, qui quisquam iure vero labore odio quaerat
                        minima ad dignissimos consectetur vel quas et nesciunt totam?
                    </desc>
                </div>

                <button className='accordion'>Can I cancel my order?</button>
                <div className='panel'>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem dolor tempora quo. Minus, qui quisquam iure vero labore odio quaerat
                        minima ad dignissimos consectetur vel quas et nesciunt totam?
                    </desc>
                </div>

                <button className='accordion'>Can I place an order for a custom item online?</button>
                <div className='panel'>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem dolor tempora quo. Minus, qui quisquam iure vero labore odio quaerat
                        minima ad dignissimos consectetur vel quas et nesciunt totam?
                    </desc>
                </div>

                <h4 className='weight-600 font-code '>International Purchases – Please Note</h4>
                <div className=''>
                    <desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas optio nostrum magni eveniet dolore inventore, vero itaque quaerat tenetur eligendi nulla
                        distinctio quibusdam repellendus placeat earum laudantium modi? Provident, ratione?
                    </desc>
                    <br className='my-6' />
                    <desc>
                        Cum rem, itaque id natus officia architecto quidem illum necessitatibus sequi distinctio! Dolorum asperiores cupiditate, architecto commodi reprehenderit
                        laborum nulla ullam optio voluptates! Dolorum, perspiciatis! Repudiandae non ea et iste?
                    </desc>
                </div>
            </section>
        </>
    );
};

export default Contact;
