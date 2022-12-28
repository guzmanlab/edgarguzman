import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Button } from '../../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: ComponentMeta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Accessible = () => <button>Accessible button</button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
