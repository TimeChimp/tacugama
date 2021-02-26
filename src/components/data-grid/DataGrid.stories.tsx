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
      viewState: '',
    },
    {
      id: '2',
      name: 'Test view 2',
      pinned: false,
      viewState: '',
    },
    {
      id: '3',
      name: 'Test view 3',
      pinned: true,
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
      groupable: true,
    },
    {
      field: 'project',
      label: 'Project',
      groupable: true,
    },
  ];

  //   onCreateView?: (view: DataGridView) => void;
  // onDeleteView?: (id: string) => void;
  // onPinView?: (id: string) => void;
  // onUnpinView?: (id: string) => void;
  // onRenameView?: (id: string, name: string) => void;
  // onSaveViewState?: (id: string, state: string) => void;

  const handlePin = (id: string, pinned: boolean) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.pinned = pinned;
      setView([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleRename = (id: string, name: string) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.name = name;
      setView([...views.filter((x) => x.id !== id), view]);
    }
  };

  return (
    <DataGrid
      views={views}
      onDeleteView={(id: string) => setView(views.filter((x) => x.id !== id))}
      onPinView={(id: string) => handlePin(id, true)}
      onUnpinView={(id: string) => handlePin(id, false)}
      onRenameView={(id: string, name: string) => handleRename(id, name)}
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
