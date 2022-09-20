import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag, TagProps } from '.';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
};
