import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  numPages: 10,
  currentPage: 1,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1645%3A11897',
  },
};
