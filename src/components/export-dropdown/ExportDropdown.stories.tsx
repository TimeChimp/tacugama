import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExportDropdown } from '.';
import { ExportDropdownProps } from './types';

export default {
  title: 'Components/Export Dropdown',
  component: ExportDropdown,
} as Meta;

const Template: Story<ExportDropdownProps> = (args) => <ExportDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  exportToCsv: { label: 'Export to CSV', id: 'csv' },
  exportToExcel: { label: 'Export to Xlsx', id: 'xlsx' },
  rows: [
    { name: 'Test name 1', hours: 1.1, date: new Date().toISOString() },
    { name: 'Test name 2', hours: 2.1, date: new Date().toISOString() },
  ],
  columns: [
    { field: 'name', label: 'Name' },
    { field: 'date', label: 'Date' },
    { field: 'hours', label: 'Hours' },
  ],
  label: 'Export options',
};
