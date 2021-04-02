import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {};
