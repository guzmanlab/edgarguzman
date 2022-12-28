import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import * as React from 'react';
import { Page } from '../../components';

const meta: ComponentMeta<typeof Page> = {
    title: 'Componentry/Page',
    component: Page,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await userEvent.click(loginButton);
};
