import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';

import { DataGrid, DataGridProps, DataGridColumn } from '.';
import { DataGridView } from './types';
import { getTimeEntriesQueryMock, DATA_URL } from './mockServer';

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

let views: DataGridView[] = [
  {
    id: '1',
    name: 'Test view 1',
    pinned: true,
    order: 1,
    payload: '',
  },
  {
    id: '2',
    name: 'Test view 2',
    pinned: false,
    order: 2,
    payload: '',
  },
  {
    id: '3',
    name: 'Test view 3',
    pinned: true,
    order: 3,
    payload: '',
  },
];

export const Default = Template.bind({});
Default.args = {
  columns,
  columnToggling: true,
  selection: true,
  filtering: true,
  grouping: true,
  viewing: true,
  views,
  onDeleteView: (view: DataGridView) => (views = views.filter((x) => x.id !== view.id)),
  onUpdateView: (view: DataGridView) => (views = [...views.filter((x) => x.id !== view.id), view]),
  onCreateView: (view: DataGridView) => views.push(view),
  dataUrl: DATA_URL,
};
Default.parameters = {
  msw: [getTimeEntriesQueryMock]
}
