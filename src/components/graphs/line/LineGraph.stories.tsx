import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LineGraph, LineGraphProps } from '.';

export default {
  title: 'Components/Graphs',
  component: LineGraph,
} as Meta;

const Template: Story<LineGraphProps> = (args) => <LineGraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      date: new Date('2021-10-1'),
      trackedDuration: 7200,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-2'),
      trackedDuration: 18000,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-4'),
      trackedDuration: 28800,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-5'),
      trackedDuration: 25200,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-6'),
      trackedDuration: 3600,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-7'),
      trackedDuration: 28800,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-8'),
      trackedDuration: 18000,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-9'),
      trackedDuration: 28800,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
    {
      date: new Date('2021-10-10'),
      trackedDuration: 18000,
      billableDuration: 7200,
      nonBillableDuration: 7200,
    },
  ],
  horizontalAxisLabel: 'PERIOD',
  verticalAxisLabel: 'HOURS',
  formatAsDate: true,
  trackedText: 'Tracked',
  hoursText: 'h',
  limit: 30800,
};
