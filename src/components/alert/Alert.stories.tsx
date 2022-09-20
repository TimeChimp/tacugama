import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Alert, AlertProps } from './Alert';
import { ErrorAlert, ErrorAlertProps } from './error-alert';
import { SuccessAlert, SuccessAlertProps } from './success-alert';
import { WarningAlert, WarningAlertProps } from './warning-alert';
import { InfoAlert, InfoAlertProps } from './info-alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;
const ErrorTemplate: Story<ErrorAlertProps> = (args) => <ErrorAlert {...args} />;
const SuccessTemplate: Story<SuccessAlertProps> = (args) => <SuccessAlert {...args} />;
const WarningTemplate: Story<WarningAlertProps> = (args) => <WarningAlert {...args} />;
const InfoTemplate: Story<InfoAlertProps> = (args) => <InfoAlert {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = ErrorTemplate.bind({});
Error.args = {
  message: 'Oops',
};

export const Success = SuccessTemplate.bind({});
Success.args = {
  message: 'Ooh yeaa!',
};

export const Warning = WarningTemplate.bind({});
Warning.args = {
  message: 'Warning!',
  actionMessage: 'Action',
  actionOnClick: () => alert('nice action'),
};

export const Info = InfoTemplate.bind({});
Info.args = {
  message: 'This is just a nice bit of information',
};
