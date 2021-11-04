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
    },
    {
      date: new Date('2021-10-2'),
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
  ],
  horizontalAxisLabel: 'PERIOD',
  verticalAxisLabel: 'HOURS',
  formatAsDate: true,
  trackedText: 'Tracked',
  hoursText: 'h'
};
