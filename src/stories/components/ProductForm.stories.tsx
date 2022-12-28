import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { ProductForm } from '../../components';

const meta: ComponentMeta<typeof ProductForm> = {
    title: 'Components/ProductForm',
    component: ProductForm,
};

export default meta;

const Template: ComponentStory<typeof ProductForm> = args => <ProductForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'I’m working in Figma trying to design a new website that shows all of my products!',
};
