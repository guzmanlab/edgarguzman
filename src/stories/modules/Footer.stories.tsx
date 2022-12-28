import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Footer } from '../../components';

const meta: ComponentMeta<typeof Footer> = {
    title: 'Componentry/Modules/Footer',
    component: Footer,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: 'Jane Doe',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
