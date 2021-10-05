import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Status, StatusProps } from '.';

export default {
  title: 'Component/Status',
  component: Status,
} as Meta;

const Template: Story<StatusProps> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Registered',
};

export const Submitted = Template.bind({});
Submitted.args = {
  value: 'Submitted',
  color: '#FFA502',
  fontColor: '#FFFFFF',
};

export const Approved = Template.bind({});
Approved.args = {
  value: 'Approved',
  color: '#57EBA1',
  fontColor: '#FFFFFF',
};

export const Rejected = Template.bind({});
Rejected.args = {
  value: 'Rejected',
  color: '#FF8080',
  fontColor: '#FFFFFF',
};
