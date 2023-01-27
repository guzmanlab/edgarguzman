import { type InferGetServerSidePropsType } from 'next';
import React from 'react';

import { Title } from '../../components';

export const getServerSideProps = () => {
    return {
        props: {
            message: 'Product',
        },
    };
};

const Products = ({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Title title={message} />

            <section>
                <h1 className='title'>{message}</h1>

                <br className='my-20' />

                <desc>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est placeat commodi recusandae ipsam. Quidem, eius. Dolore ex illum aliquid delectus quaerat repellat
                    odit unde voluptates eligendi rerum natus, officia velit. Molestiae veritatis sed aperiam, mollitia aut recusandae. Sequi ad placeat ab quae officia numquam
                    officiis animi quasi? Veritatis a modi cupiditate cum quisquam, dolor debitis aperiam blanditiis? Exercitationem, ipsum consequatur! Rerum commodi, atque
                    laborum sequi laudantium minus impedit odit reprehenderit recusandae dolore veritatis expedita dolorem blanditiis dicta aliquid nulla illum corporis eveniet
                    suscipit illo, deleniti culpa alias! Dolor, fuga atque. Eius harum delectus, at neque provident cum incidunt hic. Nam alias ratione, facere nisi eveniet laborum
                    praesentium molestias dolorem aspernatur quam assumenda distinctio adipisci atque odit similique architecto nostrum vero? Error cumque unde est et aut
                    exercitationem illo ad magni! Et quis dignissimos ab blanditiis corporis sit fugiat iure voluptas quod, nostrum eaque saepe sint vel, deleniti quibusdam maiores
                    quos? Iure, minima atque quidem consequuntur exercitationem blanditiis molestiae facere numquam eaque debitis temporibus fuga totam. Ipsum maxime, nihil
                    delectus omnis sint quisquam in! Dolorem, ratione! Et ea architecto nihil sapiente. Cumque modi quos soluta in, vel facere beatae repudiandae exercitationem
                    voluptatum, eum commodi aliquam. Illo cupiditate consectetur quasi deserunt fuga, corrupti rem quibusdam cumque accusamus dolores impedit, quae doloribus
                    voluptatibus. Nisi similique in minima voluptas quasi deleniti accusantium eius repudiandae earum officia praesentium exercitationem quisquam maxime, inventore
                    libero! Officia quidem nihil excepturi iure nobis nisi maxime magnam veniam autem necessitatibus. Modi tempore dignissimos necessitatibus. Harum fuga id, illum
                    dolorem necessitatibus reprehenderit voluptatem quidem possimus iusto, obcaecati, consequatur maiores totam quae a error! Repudiandae sed animi nam ratione qui
                    doloribus exercitationem! Quaerat a nulla unde dolor cumque? Nobis, doloremque eos, rerum est minus quo voluptates cum aliquid facilis architecto aut vel.
                    Aliquid non culpa dolor a reiciendis facere, numquam nulla accusamus? Sequi commodi ea labore, aliquam pariatur rerum explicabo quasi illo molestiae nesciunt,
                    quas cupiditate expedita velit consequatur minima reiciendis sed beatae, repudiandae atque sint dignissimos. Rem impedit officia nesciunt unde. Aspernatur odit
                    cupiditate dolorem error ut quia fuga, accusamus totam! Quae doloribus quasi cupiditate deleniti ipsum accusantium quisquam excepturi adipisci. Eveniet eligendi
                    exercitationem voluptatum doloribus vitae voluptates suscipit accusamus reiciendis. Nisi eveniet ratione fugit. Adipisci rem nam doloribus eaque facere eveniet
                    veniam nulla et quos ducimus necessitatibus cupiditate odit ullam facilis labore expedita officiis, minima, hic mollitia deleniti. Pariatur, laudantium? Ea, sit
                    facere at et deserunt saepe vel totam sed soluta, reprehenderit consectetur in explicabo labore libero officia. Modi quidem culpa sunt quaerat. Consequuntur
                    sunt magnam sed voluptas ipsa voluptate! Excepturi nobis aut fuga! Sequi repudiandae voluptatem nobis molestias cupiditate natus ut vero eos, accusamus illo
                    similique incidunt. Explicabo mollitia illum accusantium ab quis enim repellendus fuga odio nobis facilis. Eum eveniet ipsum suscipit dolores at voluptatum a
                    unde possimus natus quis optio ipsam quia tempore, sed nulla maxime explicabo sunt nihil delectus veniam. Facilis adipisci ea perferendis illum eligendi?
                    Inventore repudiandae suscipit accusamus soluta provident rerum magnam deleniti doloremque, dignissimos exercitationem iusto eos atque sunt expedita, delectus
                    alias ipsam vel cumque optio nisi quod! Distinctio itaque optio minus numquam? Hic porro ad possimus culpa fugiat voluptatibus odit illum magni fugit molestias
                    architecto similique aperiam qui doloribus, ab omnis! Atque nemo aliquam debitis excepturi enim tempora? Quia reprehenderit deleniti vel! Doloremque quas
                    ducimus ea repellat tenetur in obcaecati nostrum explicabo numquam enim, recusandae, asperiores velit. Minus, exercitationem ullam officiis aut nisi tempora vel
                    eius nemo autem laborum sapiente qui id? Officia, officiis ipsam quasi totam molestias eius animi obcaecati iure expedita unde magni laudantium magnam, quod
                    ducimus modi. Odio repellendus totam natus unde, dicta adipisci beatae expedita ea tenetur iure.
                </desc>

                <br className='my-20' />

                <button
                    className='m-0 py-6 px-16 white bg-black weight-600 radius-6 cursor-default hover:cursor-pointer'
                    type='button'>
                    Add to Cart
                </button>

                {/* Add a Singular Dynamic Product Array list on this page. */}
            </section>
        </>
    );
};

export default Products;
