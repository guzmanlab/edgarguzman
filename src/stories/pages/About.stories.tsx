import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { AboutPage } from '../../components';

const meta: ComponentMeta<typeof AboutPage> = {
    title: 'Componentry/Pages/About',
    component: AboutPage,
};

export default meta;

const Template: ComponentStory<typeof AboutPage> = args => <AboutPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'John Doe',
};
