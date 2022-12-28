import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Diagram } from '../../components';

const meta: ComponentMeta<typeof Diagram> = {
    title: 'Components/Diagram',
    component: Diagram,
};

export default meta;

const Template: ComponentStory<typeof Diagram> = args => <Diagram {...args} />;

export const Primary = Template.bind({});
