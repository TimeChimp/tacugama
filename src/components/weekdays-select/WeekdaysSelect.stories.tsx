import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { WeekdaysSelect, WeekdaysSelectProps } from './';

export default {
  title: 'Components/WeekdaysSelect',
  component: WeekdaysSelect,
} as Meta;

const WEEK_DAYS = [
  { id: 'MO', label: 'MO' },
  { id: 'TU', label: 'TU' },
  { id: 'WE', label: 'WE' },
  { id: 'TH', label: 'TH' },
  { id: 'FR', label: 'FR' },
  { id: 'SA', label: 'SA' },
  { id: 'SU', label: 'SU' },
];

const Template: Story<WeekdaysSelectProps> = (args) => <WeekdaysSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  weekDays: WEEK_DAYS,
  withSelectAll: true,
  selectAllLabel: 'Select All',
  selectedWeekDays: ['MO', 'TU', 'WE', 'TH', 'FR'],
  disabledDays: ['SU'],
};
