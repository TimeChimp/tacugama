import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AppSkeleton } from './';

export default {
  title: 'Components/AppSkeleton',
  component: AppSkeleton,
} as Meta;

const Template: Story = () => <AppSkeleton />;

export const Default = Template.bind({});
Default.args = {};
