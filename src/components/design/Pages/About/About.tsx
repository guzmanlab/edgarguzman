import React, { type FC } from 'react';
import Footer from '../../Modules/Footer/Footer';
import Header from '../../Modules/Header/Header';

type Props = {
    name: string;
};

const AboutPage: FC<Props> = ({ name }) => {
    return (
        <>
            <Header />
            <main
                id='main'
                style={{ marginBlock: '1.25rem', marginInline: '1.25rem' }}>
                <h1 className='title'>About {name}!</h1>
                <p style={{ marginBlockStart: '1.25rem', marginBlockEnd: '0' }}>{name} has worked in industry for over 10 years.</p>
                <p style={{ marginBlockStart: '1.25rem', marginBlockEnd: '0' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptatibus natus ullam, ea nesciunt asperiores porro blanditiis saepe. Modi qui repellendus
                    eum saepe voluptatem adipisci quis, consequatur quo harum autem! Ipsa itaque modi eos labore aliquid voluptatibus blanditiis quisquam, provident praesentium
                    aspernatur, adipisci quae. Odio officiis corrupti eos obcaecati adipisci, quas neque ullam quo vel sit! Qui magnam a quos. Aut iusto veritatis rerum molestias
                    error enim non est repellendus sequi fugiat? Porro perspiciatis maxime, repudiandae vel quo inventore, voluptate facilis hic, debitis architecto nostrum?
                    Maxime, esse provident. Neque, fuga. Quae sapiente, dolor molestiae praesentium voluptatibus, provident omnis nesciunt delectus ab, perferendis nulla recusandae
                    culpa tempora cupiditate officiis ex tempore. Saepe sit molestias quis aspernatur nobis recusandae quibusdam maxime iusto.
                </p>
                <p style={{ marginBlockStart: '1.25rem', marginBlockEnd: '0' }}>
                    Tempora aut est excepturi accusantium inventore hic rerum eaque ullam, quaerat facilis voluptatem expedita id, aliquam at molestias veniam! Illo rem facere
                    laudantium eos voluptatum corrupti dignissimos quas odit sed!
                </p>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
