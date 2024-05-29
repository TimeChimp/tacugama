import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from './';
import { AvatarType } from '../../models';
import { User } from '@phosphor-icons/react';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const DashedTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  type: AvatarType.default,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};

const light4 = '#FFFFFF';

export const WithIcon = Template.bind({});
WithIcon.args = {
  name: 'John Doe',
  icon: <User size="14px" color={light4} />,
  type: AvatarType.default,
};
WithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};

export const DashedWithIcon = DashedTemplate.bind({});
DashedWithIcon.args = {
  name: 'John Doe',
  icon: <User size="14px" color="#2E2E2E" />,
  type: AvatarType.dashed,
};
DashedWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};
