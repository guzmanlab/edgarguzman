import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { SettingPage } from '../../components';

const meta: ComponentMeta<typeof SettingPage> = {
    title: 'Componentry/Pages/Setting',
    component: SettingPage,
};

export default meta;

const Template: ComponentStory<typeof SettingPage> = args => <SettingPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
