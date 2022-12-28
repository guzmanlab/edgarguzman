import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { ProductPage } from '../../components';

const meta: ComponentMeta<typeof ProductPage> = {
    title: 'Components/Product',
    component: ProductPage,
};

export default meta;

const Template: ComponentStory<typeof ProductPage> = args => <ProductPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    symbol: '$',
    price: '49.99',
    content: 'I’m working in Figma trying to design a new website that shows all of my products!',
};
