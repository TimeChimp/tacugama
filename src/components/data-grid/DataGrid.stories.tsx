import React, { useState } from 'react';
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

const Template: Story<DataGridProps> = (args) => {
  const [views, setView] = useState<DataGridView[]>([
    {
      id: '1',
      name: 'Test view 1',
      pinned: true,
      order: 1,
      viewState: '',
    },
    {
      id: '2',
      name: 'Test view 2',
      pinned: false,
      order: 2,
      viewState: '',
    },
    {
      id: '3',
      name: 'Test view 3',
      pinned: true,
      order: 3,
      viewState: '',
    },
  ]);

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

  return (
    <DataGrid
      views={views}
      onDeleteView={(view: DataGridView) => setView(views.filter((x) => x.id !== view.id))}
      onUpdateView={(view: DataGridView) => setView([...views.filter((x) => x.id !== view.id), view])}
      onCreateView={(view: DataGridView) => setView([...views, view])}
      columns={columns}
      columnToggling
      selection
      filtering
      grouping
      viewing
      dataUrl={DATA_URL}
      accessToken={''}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  msw: [getTimeEntriesQueryMock],
};
