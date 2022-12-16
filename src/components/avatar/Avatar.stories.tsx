import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from './';
import { AvatarIcon } from 'components/icons';
import { AvatarType } from 'models';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;
const DashedTemplate: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};

const light4 = '#FFFFFF';

export const DefaultWithIcon = Template.bind({});
DefaultWithIcon.args = {
  name: 'John Doe',
  icon: <AvatarIcon size="14px" color={light4} />,
};
DefaultWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};

export const DefaultDashed = DashedTemplate.bind({});
DefaultDashed.args = {
  name: 'John Doe',
  type: AvatarType.dashed,
};
DefaultDashed.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};

export const DefaultDashedWithIcon = DashedTemplate.bind({});
DefaultDashedWithIcon.args = {
  name: 'John Doe',
  icon: <AvatarIcon size="14px" color="#2E2E2E" />,
  type: AvatarType.dashed,
};
DefaultDashedWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11213&t=7EmOO4pnv2bAngen-4',
  },
};
