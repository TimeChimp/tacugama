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
  const [views, setView] = useState<DataGridView[]>([]);

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
      groupable: true,
    },
    {
      field: 'project',
      label: 'Project',
      groupable: true,
    },
  ];

  const handlePin = async (id: string, pinned: boolean) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.pinned = pinned;
      setView([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleRename = async (id: string, name: string) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.name = name;
      setView([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleCreateView = async (view: DataGridView) => {
    view.id = Math.random().toString(16);
    setView([...views, view]);
  };

  const onDeleteView = async (id: string) => {
    setView(views.filter((x) => x.id !== id));
  };

  return (
    <DataGrid
      views={views}
      onDeleteView={(id: string) => onDeleteView(id)}
      onPinView={(id: string) => handlePin(id, true)}
      onUnpinView={(id: string) => handlePin(id, false)}
      onRenameView={(id: string, name: string) => handleRename(id, name)}
      onCreateView={(view: DataGridView) => handleCreateView(view)}
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
