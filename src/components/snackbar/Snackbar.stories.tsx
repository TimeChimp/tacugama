import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Snackbar, SnackbarProps } from './Snackbar';
import ErrorSnackbarProps, { ErrorSnackbar } from './ErrorSnackbar';
import SuccessSnackbarProps, { SuccessSnackbar } from './SuccessSnackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

const ErrorTemplate: Story<ErrorSnackbarProps> = (args) => <ErrorSnackbar {...args} />;

const SuccessTemplate: Story<SuccessSnackbarProps> = (args) => <SuccessSnackbar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = ErrorTemplate.bind({});
Error.args = {
  message: 'Oops'
};

export const Success = SuccessTemplate.bind({});
Success.args = {
  message: 'Ooh yeaa!'
};
