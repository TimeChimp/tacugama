import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag, TagProps, TagSize } from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
  size: TagSize.small,
  closeable: false,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11188',
  },
};
