import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { TermPage } from '../../components';

const meta: ComponentMeta<typeof TermPage> = {
    title: 'Componentry/Pages/Term',
    component: TermPage,
};

export default meta;

const Template: ComponentStory<typeof TermPage> = args => <TermPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
