import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { HomePage } from '../../components';

const meta: ComponentMeta<typeof HomePage> = {
    title: 'Componentry/Pages/Home',
    component: HomePage,
};

export default meta;

const Template: ComponentStory<typeof HomePage> = args => <HomePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    symbol: '$',
    price: '49.99',
};
