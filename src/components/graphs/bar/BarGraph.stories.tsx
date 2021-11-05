import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { BarGraph, BarGraphProps } from '.';

export default {
  title: 'Components/Graphs',
  component: BarGraph,
} as Meta;

const Template: Story<BarGraphProps> = (args) => <BarGraph {...args} />;

export const BarDefault = Template.bind({});
BarDefault.args = {
  data: [
    {
      date: new Date('2021-10-1'),
      trackedDuration: 7200,
    },
    {
      date: new Date('2021-10-2'),
      trackedDuration: 25200,
    },
    {
      date: new Date('2021-10-3'),
      trackedDuration: 18000,
    },
    {
      date: new Date('2021-10-4'),
      trackedDuration: 28800,
    },
    {
      date: new Date('2021-10-5'),
      trackedDuration: 25200,
    },
    {
      date: new Date('2021-10-6'),
      trackedDuration: 3600,
    },
    {
      date: new Date('2021-10-7'),
      trackedDuration: 28800,
    },
    {
      date: new Date('2021-10-8'),
      trackedDuration: 18000,
    },
    {
      date: new Date('2021-10-9'),
      trackedDuration: 28800,
    },
    {
      date: new Date('2021-10-10'),
      trackedDuration: 18000,
    },
    {
      date: new Date('2021-10-11'),
      trackedDuration: 18000,
    },
  ],
  horizontalAxisLabel: 'Dates',
  verticalAxisLabel: 'Hours',
  formatAsDate: true,
  trackedText: 'Tracked',
  hoursText: 'h',
};
