import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FileUpload, FileUploadProps } from '.';

export default {
  title: 'Components/File Upload',
  component: FileUpload,
} as Meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args}></FileUpload>;

export const Default = Template.bind({});
Default.args = {};
