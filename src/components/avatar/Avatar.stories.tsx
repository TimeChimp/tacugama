import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from './';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  size: 'scale1200',
  src: 'https://api.adorable.io/avatars/285/10@adorable.io.png',
};
