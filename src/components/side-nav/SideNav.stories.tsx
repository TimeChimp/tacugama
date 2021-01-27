import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SideNav, SideNavProps } from '.';

export default {
  title: 'Components/Side nav',
  component: SideNav,
} as Meta;

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {};
