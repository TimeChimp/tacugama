import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine-dark.css';

import { DataGrid, DataGridProps, DataGridColumn } from '.';
import { DataGridView, CreateViewInput, Filter, FilterType, FormatSettings } from './types';
import { getTimeEntriesQueryMock, DATA_URL } from './mockServer';
import { Account, Briefcase, Calendar, Documents, Tasks } from 'components/icons';

export default {
  title: 'Components/Data Grid',
  component: DataGrid,
  parameters: {
    msw: [getTimeEntriesQueryMock],
  },
} as Meta;

const columns: DataGridColumn[] = [
  {
    field: 'start',
    label: 'Date',
    type: 'date',
  },
  {
    field: 'userName',
    label: 'Employee',
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
    hide: true,
  },
  {
    field: 'task',
    label: 'Task',
    groupable: true,
  },
];

const filters: Filter[] = [
  {
    type: FilterType.date,
    title: 'Date',
    columnField: 'start',
    icon: () => <Calendar size="12px" color="black" />,
  },
  {
    type: FilterType.string,
    title: 'Users',
    columnField: 'userName',
    values: ['Henkie', 'Baltus', 'Bob'],
    icon: () => <Account size="12px" color="black" />,
    searchPlaceholder: 'Search users',
  },
  {
    type: FilterType.string,
    title: 'Clients',
    columnField: 'client',
    values: ['Apple', 'Microsoft', 'Amazon', 'Google'],
    searchPlaceholder: 'Search clients',
    icon: () => <Briefcase color="black" />,
  },
  {
    type: FilterType.string,
    title: 'Projects',
    columnField: 'project',
    values: ['Workshop', 'Website redesign', 'Logo and branding'],
    searchPlaceholder: 'Search projects',
    icon: () => <Documents color="black" size="14px" />,
  },
  {
    type: FilterType.string,
    title: 'Tasks',
    columnField: 'task',
    values: ['Testing', 'Development', 'Design', 'Support'],
    searchPlaceholder: 'Search tasks',
    icon: () => <Tasks color="black" />,
  },
];

const formatSettings: FormatSettings = {
  timeFormat: 'HH:mm',
  dateFormat: 'dd-MM-yyyy',
  numberFormat: '1,234.56',
  language: 'en-US',
};

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
      views={views}
      onActivateView={(id: string) => onActivateView(id)}
      onDeactivateView={(id: string) => onDeactivateView(id)}
      onDeleteView={(id: string) => onDeleteView(id)}
      onPinView={(id: string) => handlePin(id, true)}
      onUnpinView={(id: string) => handlePin(id, false)}
      onRenameView={(id: string, name: string) => handleRename(id, name)}
      onCreateView={(input: CreateViewInput) => handleCreateView(input)}
      onSaveViewState={(id: string, viewState: string) => handleSaveView(id, viewState)}
      {...args}
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
  columns,
  filters,
  dataUrl: DATA_URL,
  accessToken: '',
  height: 'calc(100vh - 200px)',
  formatSettings,
};
Default.parameters = {
  msw: [getTimeEntriesQueryMock],
};
