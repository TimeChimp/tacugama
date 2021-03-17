import React from 'react';
import { DataGridColumn, Filter, FilterType } from '../types';
import { Account, Briefcase, Calendar, Documents, Tasks } from '../../icons';

export const ACCESS_TOKEN = '';
export const DATA_URL = '/timetracking';
export const COLUMNS: DataGridColumn[] = [
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

export const SEARCH_COLUMNS = ['description'];

export const FILTERS: Filter[] = [
  {
    type: FilterType.date,
    title: 'Date',
    columnField: 'start',
    icon: ({ ...props }) => <Calendar size="12px" {...props} />,
  },
  {
    type: FilterType.string,
    title: 'Users',
    columnField: 'userName',
    values: ['Henkie', 'Baltus', 'Bob'],
    icon: ({ ...props }) => <Account size="12px" {...props} />,
    searchPlaceholder: 'Search users',
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

export const TIME_ENTRIES = [
  {
    id: 'ACC-BBB-CCC-DDD-EEE',
    name: 'Analysis',
    description: 'This is a description',
    client: 'Apple',
    project: 'Logo and branding',
    task: 'Testing',
    start: '2021-03-10T00:00:00',
    userName: 'Bob',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE2',
    name: 'Design',
    description: 'This is a description',
    client: 'Microsoft',
    project: 'Website redesign',
    task: 'Development',
    start: '2021-03-10T00:00:00',
    userName: 'Henkie',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE3',
    name: 'Development',
    description: 'This is a description',
    client: 'Amazon',
    project: 'Workshops',
    task: 'Meeting',
    start: '2021-03-10T00:00:00',
    userName: 'Baltus',
  },
];

export const CHECKBOX_TEST_ID = 'data-grid-select-all';
export const SEARCH_INPUT_TEST_ID = 'data-grid-search';
export const LOADER_TEST_ID = 'loader';
export const FILTER_BUTTON_TEST_ID = 'filter-button';
