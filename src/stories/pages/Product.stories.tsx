import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { ProductPage } from '../../components';

const meta: ComponentMeta<typeof ProductPage> = {
    title: 'Componentry/Pages/Product',
    component: ProductPage,
};

export default meta;

const Template: ComponentStory<typeof ProductPage> = args => <ProductPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
