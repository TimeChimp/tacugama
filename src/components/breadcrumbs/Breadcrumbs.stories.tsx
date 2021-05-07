import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumbs, BreadcrumbsProps } from './';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {};
