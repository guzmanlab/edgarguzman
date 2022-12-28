import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';

import { Bio } from '../../components';
import config from '../../lib/config';

const meta: ComponentMeta<typeof Bio> = {
    title: 'Etc/Bio',
    component: Bio,
};

export default meta;

const Template: ComponentStory<typeof Bio> = args => <Bio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: 400,
    height: 400,
    secure: 'https',
    headshot: 'pbs.twimg.com',
    subdomain: 'profile_images/1515835416288579584/CjZsLJvW_',
    format: 'jpg',
    name: config.env.COMPANY_LOGO,
    tagline: 'Helping others to learn by doing!',
    role: `Founder @ ${config.env.COMPANY_LOGO}`,
};
