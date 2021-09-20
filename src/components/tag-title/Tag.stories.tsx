import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TagTitle, TagProps } from '.';

export default {
  title: 'Components/Tag',
  component: TagTitle,
} as Meta;

const Template: Story<TagProps> = (args) => <TagTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
};
