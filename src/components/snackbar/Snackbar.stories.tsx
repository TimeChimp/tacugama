import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Snackbar } from './Snackbar';
import { SnackbarProps, SnackBarType } from './types';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a snackbar',
};

export const Error = Template.bind({});
Error.args = {
  message: 'Oops',
  type: SnackBarType.error,
};

export const Success = Template.bind({});
Success.args = {
  message: 'Ooh yeaa!',
  type: SnackBarType.success,
};

export const Info = Template.bind({});
Info.args = {
  message: 'Just general info',
  type: SnackBarType.info,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'A warning message!',
  type: SnackBarType.warning,
};
