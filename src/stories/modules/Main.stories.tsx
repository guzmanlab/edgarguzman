import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Main } from '../../components';

const meta: ComponentMeta<typeof Main> = {
    title: 'Componentry/Modules/Main',
    component: Main,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: ComponentStory<typeof Main> = args => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
