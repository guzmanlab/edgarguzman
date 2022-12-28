import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { ProfilePage } from '../../components';

const meta: ComponentMeta<typeof ProfilePage> = {
    title: 'Componentry/Pages/Profile',
    component: ProfilePage,
};

export default meta;

const Template: ComponentStory<typeof ProfilePage> = args => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
