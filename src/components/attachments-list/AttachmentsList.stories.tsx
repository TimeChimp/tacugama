import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { AttachmentsList } from './';
import { AttachementsListProps } from './AttachmentsList';

export default {
  title: 'Components/AttachmentsList',
  component: AttachmentsList,
} as Meta;

const Template: Story<AttachementsListProps> = (args) => <AttachmentsList {...args} />;

export const Default = Template.bind({});
Default.args = {
  attachments: [
    {
      fileName: 'Test file name',
      uploadedOn: '2021-09-02T00:00:00',
      fileSize: 12332333,
    },
    {
      fileName: 'file name',
      uploadedOn: '2021-09-02T00:00:00',
      fileSize: 123123123123,
    },
  ],
  onDelete: () => console.log('deleted'),
  onDownload: () => console.log('downloaded'),
};
