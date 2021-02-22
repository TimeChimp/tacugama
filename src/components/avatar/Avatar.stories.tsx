import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps, ConfigurableAvatar, ConfigurableAvatarProps } from './';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const ConfigurableTemplate: Story<ConfigurableAvatarProps> = (args) => <ConfigurableAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  size: 'scale1200',
  src:
    'https://st.depositphotos.com/3244893/5106/v/950/depositphotos_51060005-stock-illustration-cute-little-panda-icon.jpg',
};

export const Configurable = ConfigurableTemplate.bind({});
Configurable.args = {
  name: 'John Doe',
};
