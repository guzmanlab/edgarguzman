import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { DynamicSignularProductPage } from '../../../components';

const meta: ComponentMeta<typeof DynamicSignularProductPage> = {
    title: 'Componentry/Pages/Api/DynamicSignularProduct',
    component: DynamicSignularProductPage,
};

export default meta;

const Template: ComponentStory<typeof DynamicSignularProductPage> = args => <DynamicSignularProductPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    symbol: '$',
    price: '49.99',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui optio earum repellat. Quia dolore vel consequatur praesentium atque dolores commodi suscipit. Minus quos, facilis dolore omnis tempore tenetur vero iste.
Eaque optio tempora quidem odit enim deleniti beatae, sint et perferendis? Corporis officiis nisi quia nam molestiae natus eaque nemo labore sequi ducimus assumenda nulla, voluptates repellendus repudiandae esse minima.
Sapiente, unde explicabo similique omnis doloremque et, cupiditate hic pariatur vero autem debitis beatae nihil perspiciatis esse eius repellat! Accusamus tempora sunt optio provident veritatis quo minima recusandae facere doloremque?
Sequi laudantium illo rerum velit saepe quibusdam natus inventore explicabo voluptas porro quas, laboriosam magnam asperiores minus modi enim sed molestias eveniet voluptatum veritatis? Laboriosam, atque? Dolores qui sapiente nesciunt?
Quaerat ad tempore delectus voluptatum corporis nulla sint rerum, corrupti reiciendis fuga rem non pariatur doloremque cupiditate iusto est recusandae voluptate deleniti, perspiciatis, sapiente saepe? Eligendi ullam tempora exercitationem obcaecati!
Accusantium sapiente inventore tenetur explicabo, laborum quam reiciendis enim laudantium voluptates, fugiat quibusdam molestias placeat reprehenderit porro sint maxime voluptas sit dolorum fuga ratione atque architecto earum facere. Neque, cum?
Esse quo fuga harum error fugiat ipsam, molestias quaerat quis quas excepturi iste doloribus, tempora dicta. A magnam odio quis, amet ipsa enim vitae minus harum odit voluptate, unde veritatis?
Tenetur suscipit dolorem ea ratione harum deleniti consectetur eaque ad perspiciatis sequi vitae autem laborum dignissimos, nemo minus officiis totam maiores minima vero quo quibusdam blanditiis nam iusto alias? Vel.`,
};
