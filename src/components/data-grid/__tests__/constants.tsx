import React from 'react';
import { DataGridColumn, Filter, FilterType } from '../types';

import { Dot } from '../../dot';
import { NumberFormat, TcDate, formatCurrency } from '@timechimp/timechimp-typescript-helpers';
import { Avatar } from '../../avatar';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../../providers';
import { DropdownItem } from 'components/dropdown';
import { Briefcase, Calendar, Note, User, X } from '@phosphor-icons/react';

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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar
        name={data?.userName}
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
    headerName: 'Date',
    valueFormatter: ({ data }) => new TcDate(data.start).format('dd/MM/yyyy', 'en'),
  },
  {
    field: 'state',
    headerName: 'State',
    hide: true,
  },
  {
    field: 'userName',
    headerName: 'Employee',
    cellRenderer: CustomCellComponent,
    sortable: true,
    sort: 'asc',
  },
  {
    field: 'description',
    headerName: 'Description',
  },
  {
    field: 'client',
    headerName: 'Client',
    groupable: true,
  },
  {
    field: 'project',
    headerName: 'Project',
    hide: true,
  },
  {
    field: 'task',
    headerName: 'Task',
    groupable: true,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    valueFormatter: ({ data }) => formatCurrency(data.currency, 'EUR', NumberFormat.Comma),
  },
];

export const SEARCH_COLUMNS = ['description'];

export const FILTERS: Filter[] = [
  {
    type: FilterType.date,
    title: 'Date',
    columnField: 'start',
    icon: ({ ...props }) => <Calendar {...props} />,
  },
  {
    type: FilterType.single,
    title: 'Status',
    columnField: 'state',
    values: [
      { label: 'All statuses', value: '', icon: <Dot color="transparent" /> },
      { label: 'Active', value: 'active', icon: <Dot color="green" /> },
      { label: 'Archived', value: 'archived', icon: <Dot color="grey" /> },
    ],
    defaultValue: 'active',
    setExtraFilterModelValue: (values) => {
      const extraFilters = [];

      if (!values.length) {
        return [{ name: 'dueDate', values: null }];
      }

      if (values.includes('active') && values.includes('archived')) {
        extraFilters.push({
          name: 'dueDate',
          values: {
            dateFrom: new Date('01-01-1900'),
            dateTo: new Date('01-01-9999'),
            filterType: 'date',
            type: 'inRange',
          },
        });
      } else if (values.includes('active')) {
        extraFilters.push({
          name: 'dueDate',
          values: {
            dateFrom: new TcDate().toDate(),
            dateTo: new Date('01-01-9999'),
            filterType: 'date',
            type: 'inRange',
          },
        });
      } else if (values.includes('archived')) {
        extraFilters.push({
          name: 'dueDate',
          values: {
            dateFrom: new Date('01-01-1900'),
            dateTo: new Date(),
            filterType: 'date',
            type: 'inRange',
          },
        });
      } else {
        return [{ name: 'dueDate', values: null }];
      }

      return extraFilters;
    },
  },
  {
    type: FilterType.multi,
    title: 'Users',
    columnField: 'userName',
    values: [
      { value: 1, label: 'Henkie' },
      { value: 2, label: 'Test option multiple filter with very long name' },
      { value: 3, label: 'Baltus' },
      { value: 4, label: 'Bob' },
    ],
    icon: ({ ...props }) => <User size="12px" {...props} />,
    searchPlaceholder: 'Search users',
  },
  {
    type: FilterType.multi,
    title: 'Clients',
    columnField: 'client',
    values: ['Apple', 'Microsoft', 'Amazon', 'Google'],
    searchPlaceholder: 'Search clients',
    icon: ({ ...props }) => <Briefcase {...props} />,
  },
  {
    type: FilterType.multi,
    title: 'Projects',
    columnField: 'project',
    values: ['Workshop', 'Website redesign', 'Logo and branding'],
    searchPlaceholder: 'Search projects',
    icon: ({ ...props }) => <Note {...props} size="14px" />,
  },
  {
    type: FilterType.multi,
    title: 'Tasks',
    columnField: 'task',
    values: ['Testing', 'Development', 'Design', 'Support'],
    searchPlaceholder: 'Search tasks',
    icon: ({ ...props }) => <Note {...props} />,
    valuesLoading: true,
  },
  // {
  //   type: FilterType.multiVirtual,
  //   title: 'Virtual Scroll Select',
  //   columnField: 'client',
  //   values: ['Apple', 'Microsoft', 'Amazon', 'Google'],
  //   searchPlaceholder: 'Search clients',
  //   icon: ({ ...props }) => <BriefcaseIcon {...props} />,
  // },
];

export const ROW_ACTION_ITEMS: DropdownItem[] = [
  {
    label: 'Edit',
    icon: <X size="12px" />,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    action: () => {},
  },
];

const getTimeEntries = () => {
  const timeEntries = [
    {
      id: 'BCC-BBB-CCC-DDD-EEE-1',
      name: 'Analysis',
      description: 'This is a description',
      client: 'Google',
      clientId: 1,
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().toDate(),
      userName: 'Henkie',
      userId: 1,
      state: 'active',
      currency: '75',
    },
    {
      id: 'BCC-BBB-CCC-DDD-EEE-2',
      name: 'Analysis',
      description: 'This is a description',
      client: 'Microsoft',
      clientId: 2,
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().toDate(),
      userName: 'Baltus',
      userId: 2,
      state: 'active',
      currency: '15',
    },
  ];
  for (let i = 0; i < 999; i++) {
    timeEntries.push({
      id: `ACC-BBB-CCC-DDD-EEE-${i}`,
      name: 'Analysis',
      description: 'This is a description',
      client: 'Apple',
      clientId: 3,
      project: 'Logo and branding',
      task: 'Testing',
      start: new TcDate().add(i, 'd').toDate(),
      userName: 'Bob',
      userId: 3,
      state: 'active',
      currency: '',
    });
  }
  return timeEntries;
};
export const TIME_ENTRIES = getTimeEntries();

export const VIEW_STATE = {
  columnState: [
    {
      colId: '0',
      width: 54,
      hide: false,
      pinned: 'left',
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'start',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'state',
      width: 200,
      hide: true,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'userName',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'description',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'client',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'project',
      width: 200,
      hide: true,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'task',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: 'currency',
      width: 150,
      hide: false,
      pinned: null,
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
    {
      colId: '1',
      width: 54,
      hide: false,
      pinned: 'right',
      sort: null,
      sortIndex: null,
      aggFunc: null,
      rowGroup: false,
      rowGroupIndex: null,
      pivot: false,
      pivotIndex: null,
      flex: 1,
    },
  ],
  columnGroupState: [],
  filterModel: {},
};

export const CHECKBOX_TEST_ID = 'data-grid-select-all';
export const SEARCH_INPUT_TEST_ID = 'data-grid-search';
export const LOADER_TEST_ID = 'loader';
export const FILTER_BUTTON_TEST_ID = 'filter-button';

export const DELETE_BUTTON_TEST_ID = 'delete-button';
export const EXPORT_BUTTON_TEST_ID = 'export-button';
export const DELETE_SUBMIT_BUTTON_TEST_ID = 'bulk-delete-confirmation-button';
export const EXPORT_OPTIONS_TEST_ID = 'data-grid-export-options';
export const EXPORT_OPTION_TEST_ID = 'data-grid-export-option';
