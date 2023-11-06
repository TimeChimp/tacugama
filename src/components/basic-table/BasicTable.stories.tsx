import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { BasicTable, SecondaryBasicTable } from '.';
import { BasicTableProps } from './types';
import { COLUMNS, DATA } from './__tests__/constants';

export default {
  title: 'Components/BasicTable',
  component: BasicTable,
} as Meta;

const Template: Story<BasicTableProps> = (args) => <BasicTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: COLUMNS,
  data: DATA,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=3754%3A28336&t=gRiloFAZsdFGMVIU-4',
  },
};

export const EmptyData = Template.bind({});
EmptyData.args = {
  columns: COLUMNS,
  data: [],
  emptyMessage: 'No items added...',
};

const TemplateSecondary: Story<BasicTableProps> = (args) => <SecondaryBasicTable {...args} />;

export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  columns: COLUMNS,
  data: DATA,
};
