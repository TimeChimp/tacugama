import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  StyledWeekdayProps,
  WeekdayComponent,
  WeekdaysSelect as WeekdaysSelectComponent,
  WeekdaysSelectProps,
} from './';
import { ParagraphSmall } from 'components';

export default {
  title: 'Components/WeekdaysSelect',
  component: WeekdaysSelectComponent,
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

const WeekdaysSelectTemplate: Story<WeekdaysSelectProps> = (args) => <WeekdaysSelectComponent {...args} />;
const WeekdayTemplate: Story<StyledWeekdayProps> = (args) => (
  <WeekdayComponent {...args}>
    <ParagraphSmall>{WEEK_DAYS[0].label}</ParagraphSmall>
  </WeekdayComponent>
);

export const Select = WeekdaysSelectTemplate.bind({});
Select.args = {
  weekDays: WEEK_DAYS,
  withSelectAll: true,
  selectAllLabel: 'Select All',
  selectedWeekDays: ['MO', 'TU', 'WE', 'TH'],
  disabledDays: ['SA', 'SU'],
};
Select.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11214',
  },
};

export const Weekday = WeekdayTemplate.bind({});
Weekday.args = {
  $active: true,
  $isDisabled: false,
};
Weekday.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11201',
  },
};
