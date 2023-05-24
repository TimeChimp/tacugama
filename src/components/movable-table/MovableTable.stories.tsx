import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MovableTable } from '.';
import { COLUMNS, DATA } from '../basic-table/__tests__/constants';

export default {
  title: 'Components/MovableTable',
  component: MovableTable,
} as Meta;

const Template: Story = (args) => <MovableTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: COLUMNS,
  data: DATA,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=3754%3A28336&t=gRiloFAZsdFGMVIU-4',
  },
};
