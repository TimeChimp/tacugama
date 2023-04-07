import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';

import { DataGrid, DataGridProps } from '.';
import { DataGridView, CreateViewInput, RowModelType } from './types';
import { getTimeEntriesQueryMock } from './__tests__/mockServer';
import { ACCESS_TOKEN, COLUMNS, DATA_URL, FILTERS, SEARCH_COLUMNS, TIME_ENTRIES } from './__tests__/constants';
import { defaultTranslations } from './defaultTranslations';
import { MoreIcon } from 'components/icons';

export default {
  title: 'Components/Data Grid',
  component: DataGrid,
  parameters: {
    msw: [getTimeEntriesQueryMock],
  },
} as Meta;

const Template: Story<DataGridProps> = (args) => {
  const [views, setViews] = useState<DataGridView[]>([]);

  const handlePin = async (id: string, pinned: boolean) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.pinned = pinned;
      setViews([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleRename = async (id: string, name: string) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.name = name;
      setViews([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleSaveView = async (id: string, viewState: string) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.viewState = viewState;
      setViews([...views.filter((x) => x.id !== id), view]);
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    const activeView = views.find((x) => x.active);
    if (activeView) {
      activeView.active = false;
      setViews([...views.filter((x) => x.id !== activeView.id), activeView]);
    }

    const view: DataGridView = {
      id: Math.random().toString(16),
      name: input.name,
      viewState: input.viewState,
      viewType: 'test',
      pinned: true,
      active: true,
    };
    setViews([...views, view]);
  };

  const onDeleteView = async (id: string) => {
    setViews(views.filter((x) => x.id !== id));
  };

  const onDeactivateView = async (id: string) => {
    const view = views.find((x) => x.id === id);
    if (view) {
      view.active = false;
      setViews([...views.filter((x) => x.id !== id), view]);
    }
  };

  const onActivateView = async (id: string) => {
    const activeView = views.find((x) => x.active);
    if (activeView) {
      await onDeactivateView(activeView.id);
    }

    const view = views.find((x) => x.id === id);
    if (view) {
      view.active = true;
      setViews([...views.filter((x) => x.id !== id), view]);
    }
  };

  return (
    <DataGrid
      {...args}
      views={views}
      onActivateView={(id: string) => onActivateView(id)}
      onDeactivateView={(id: string) => onDeactivateView(id)}
      onDeleteView={(id: string) => onDeleteView(id)}
      onPinView={(id: string) => handlePin(id, true)}
      onUnpinView={(id: string) => handlePin(id, false)}
      onRenameView={(id: string, name: string) => handleRename(id, name)}
      onCreateView={(input: CreateViewInput) => handleCreateView(input)}
      onSaveViewState={(id: string, viewState: string) => handleSaveView(id, viewState)}
      onReady={(data: any) => console.log(data)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  columnToggling: true,
  selection: true,
  filtering: true,
  grouping: true,
  viewing: true,
  columns: COLUMNS,
  filters: FILTERS,
  dataUrl: DATA_URL,
  accessToken: ACCESS_TOKEN,
  customHeaders: {'Token': '123'},
  height: 'calc(100vh - 200px)',
  translations: defaultTranslations,
  searchColumns: SEARCH_COLUMNS,
  dates: [new Date(2020, 3, 20), new Date(2020, 3, 21)],
  settings: [
    {
      id: 'test',
      label: 'Test',
      action: () => alert('test'),
      value: true
    },
  ],
  rowActionItems: [
    {
      action: (selectedIds, additionalProps) => console.log(selectedIds, additionalProps),
      label: 'Test',
    },
  ],
};

export const Client = Template.bind({});
Client.args = {
  columnToggling: true,
  selection: true,
  grouping: false,
  viewing: true,
  columns: COLUMNS,
  accessToken: ACCESS_TOKEN,
  height: 'calc(100vh - 200px)',
  translations: defaultTranslations,
  searchColumns: SEARCH_COLUMNS,
  rowModelType: RowModelType.clientSide,
  rowData: TIME_ENTRIES,
  rowActionItems: [
    {
      action: (selectedIds, additionalProps) => console.log(selectedIds, additionalProps),
      label: 'Test',
    },
  ],
};
