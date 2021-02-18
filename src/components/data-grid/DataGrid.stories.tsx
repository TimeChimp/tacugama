import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';

import { DataGrid, DataGridProps, DataGridColumn } from '.';

export default {
  title: 'Components/Data Grid',
  component: DataGrid,
} as Meta;

const Template: Story<DataGridProps> = (args) => <DataGrid {...args} />;

const columns: DataGridColumn[] = [
  {
    field: 'name',
    label: 'Name',
  },
  {
    field: 'description',
    label: 'Description',
  },
  {
    field: 'client',
    label: 'Client',
  },
  {
    field: 'project',
    label: 'Project',
  },
];

export const Default = Template.bind({});
Default.args = {
  columns,
  columnToggling: true,
  dataUrl: '',
  searchPlaceholder: 'Search'
};
