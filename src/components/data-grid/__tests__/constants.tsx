import React from 'react';
import { DataGridColumn, Filter, FilterType } from '../types';

import { Dot } from '../../dot';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { Avatar } from '../../avatar';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../../providers';
import { CalendarIcon } from '../../icons/calendar';
import { BriefcaseIcon } from '../../icons/briefcase';
import { NoteIcon } from '../../icons/note';
import { AvatarIcon } from '../../icons/avatar';
import { XmarkIcon } from '../../icons/xmark';
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
export const DATA_URL = '/timeentries';
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
    icon: ({ ...props }) => <CalendarIcon {...props} />,
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
    type: FilterType.id,
    title: 'Users',
    columnField: 'userName',
    values: [{ value: 1, label: 'Henkie'},{ value: 2, label: 'Baltus'}, { value: 3, label: 'Bob'}],
    icon: ({ ...props }) => <AvatarIcon size="12px" {...props} />,
    searchPlaceholder: 'Search users',
  },
  {
    type: FilterType.string,
    title: 'Clients',
    columnField: 'client',
    values: ['Apple', 'Microsoft', 'Amazon', 'Google'],
    searchPlaceholder: 'Search clients',
    icon: ({ ...props }) => <BriefcaseIcon {...props} />,
  },
  {
    type: FilterType.string,
    title: 'Projects',
    columnField: 'project',
    values: ['Workshop', 'Website redesign', 'Logo and branding'],
    searchPlaceholder: 'Search projects',
    icon: ({ ...props }) => <NoteIcon {...props} size="14px" />,

  },
  {
    type: FilterType.string,
    title: 'Tasks',
    columnField: 'task',
    values: ['Testing', 'Development', 'Design', 'Support'],
    searchPlaceholder: 'Search tasks',
    icon: ({ ...props }) => <NoteIcon {...props} />,
    valuesLoading: true,
  },
];

export const ROW_ACTION_ITEMS: DropdownItem[] = [
  {
    label: 'Edit',
    icon: <XmarkIcon size="12px" />,
    action: () => {},
  },
];

const getTimeEntries = () => {
  const timeEntries: any[] = [
    {
      id:'BCC-BBB-CCC-DDD-EEE-1',
      name: 'Analysis',
      description: 'This is a description',
      client: 'Apple',
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().toDate(),
      userName: 'Henkie',
      userId: 1,
      state: 'active',
    },
    {
      id: 'BCC-BBB-CCC-DDD-EEE-2',
      name: 'Analysis',
      description: 'This is a description',
      client: 'Apple',
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().toDate(),
      userName: 'Baltus',
      userId: 2,
      state: 'active',
    }
  ];
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
      userId: 3,
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
