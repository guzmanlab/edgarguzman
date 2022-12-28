import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { ContactPage } from '../../components';

const meta: ComponentMeta<typeof ContactPage> = {
    title: 'Componentry/Pages/Contact',
    component: ContactPage,
};

export default meta;

const Template: ComponentStory<typeof ContactPage> = args => <ContactPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'John Doe',
};
