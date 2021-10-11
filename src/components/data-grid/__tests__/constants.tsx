import React from 'react';
import { DataGridColumn, Filter, FilterType } from '../types';
import { Account, Briefcase, Calendar, Documents, Tasks, Unlink } from '../../icons';
import { Dot } from '../../dot';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { Avatar } from '../../avatar';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../../providers';
import { DropdownItem } from 'components/dropdown';

const CustomCellComponent = ({ data }: any) => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale500, scale600 },
        colors: { white },
      },
    },
  } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Avatar
        name={data.userName}
        overrides={{
          Avatar: {
            style: {
              color: white,
            },
          },
          Initials: {
            style: {
              fontSize: scale500,
            },
          },
        }}
        size={scale600}
      />
      <ParagraphSmall
        overrides={{
          Block: {
            style: {
              marginLeft: scale300,
            },
          },
        }}
      >
        {data?.userName}
      </ParagraphSmall>
    </div>
  );
};

export const ACCESS_TOKEN = '';
export const DATA_URL = '/timetracking';
export const COLUMNS: DataGridColumn[] = [
  {
    field: 'start',
    label: 'Date',
    type: 'date',
  },
  {
    field: 'state',
    label: 'State',
    hide: true,
  },
  {
    field: 'userName',
    label: 'Employee',
    customComponent: CustomCellComponent,
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

export const SEARCH_COLUMNS = ['description'];

export const FILTERS: Filter[] = [
  {
    type: FilterType.date,
    title: 'Date',
    columnField: 'start',
    icon: ({ ...props }) => <Calendar size="12px" {...props} />,
  },
  {
    type: FilterType.select,
    title: 'Status',
    columnField: 'state',
    values: [
      { label: 'All statuses', value: '', icon: <Dot color="transparent" /> },
      { label: 'Active', value: 'active', icon: <Dot color="green" /> },
      { label: 'Archived', value: 'archived', icon: <Dot color="grey" /> },
    ],
    defaultValue: 'active',
  },
  {
    type: FilterType.string,
    title: 'Users',
    columnField: 'userName',
    values: ['Henkie', 'Baltus', 'Bob'],
    icon: ({ ...props }) => <Account size="12px" {...props} />,
    searchPlaceholder: 'Search users',
    valuesLoading: true,
  },
  {
    type: FilterType.string,
    title: 'Clients',
    columnField: 'client',
    values: ['Apple', 'Microsoft', 'Amazon', 'Google'],
    searchPlaceholder: 'Search clients',
    icon: ({ ...props }) => <Briefcase {...props} />,
  },
  {
    type: FilterType.string,
    title: 'Projects',
    columnField: 'project',
    values: ['Workshop', 'Website redesign', 'Logo and branding'],
    searchPlaceholder: 'Search projects',
    icon: ({ ...props }) => <Documents {...props} size="14px" />,
  },
  {
    type: FilterType.string,
    title: 'Tasks',
    columnField: 'task',
    values: ['Testing', 'Development', 'Design', 'Support'],
    searchPlaceholder: 'Search tasks',
    icon: ({ ...props }) => <Tasks {...props} />,
  },
];

export const ROW_ACTION_ITEMS: DropdownItem[] = [
  {
    label: 'Edit',
    icon: <Unlink size="12px" />,
    action: () => {},
  },
];

const getTimeEntries = () => {
  const timeEntries: any[] = [];
  for (let i = 0; i < 999; i++) {
    timeEntries.push({
      id: `ACC-BBB-CCC-DDD-EEE-${i}`,
      name: 'Analysis',
      description: 'This is a description',
      client: 'Apple',
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().add(i, 'd').toDate(),
      userName: 'Bob',
      state: 'active',
    });
  }
  return timeEntries;
};
export const TIME_ENTRIES = getTimeEntries();

export const CHECKBOX_TEST_ID = 'data-grid-select-all';
export const SEARCH_INPUT_TEST_ID = 'data-grid-search';
export const LOADER_TEST_ID = 'loader';
export const FILTER_BUTTON_TEST_ID = 'filter-button';

export const DELETE_BUTTON_TEST_ID = 'delete-button';
export const EXPORT_BUTTON_TEST_ID = 'export-button';
export const DELETE_SUBMIT_BUTTON_TEST_ID = 'bulk-delete-confirmation-button';
export const EXPORT_OPTIONS_TEST_ID = 'data-grid-export-options';
export const EXPORT_OPTION_TEST_ID = 'data-grid-export-option';
