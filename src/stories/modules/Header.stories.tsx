import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Header } from '../../components';

const meta: ComponentMeta<typeof Header> = {
    title: 'Componentry/Modules/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: 'Jane Doe',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
