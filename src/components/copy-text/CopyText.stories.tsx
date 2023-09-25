import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CopyText, CopyTextProps } from './';

export default {
  title: 'Components/Copy text',
  component: CopyText,
} as Meta;

const Template: Story<CopyTextProps> = (args) => <CopyText {...args}></CopyText>;
const value = '853VQRDNFXJ65NBQJAXPWFQ1';
export const Default = Template.bind({});
Default.args = {
  value,
  copyTextHandler: (value) => navigator.clipboard.writeText(value),
  buttonText: 'Copy',
};
