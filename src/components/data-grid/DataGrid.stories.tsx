import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DataGrid, DataGridProps, DataGridColumn } from '.';

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
} as Meta;

const Template: Story<DataGridProps> = (args) => <DataGrid {...args} />;

const columns: DataGridColumn[] = [
  {
    field: 'name',
    label: 'Name',
  },
];

export const Default = Template.bind({});
Default.args = {
  columns,
  dataUrl: '',
};
