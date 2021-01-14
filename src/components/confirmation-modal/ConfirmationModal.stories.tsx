import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ConfirmationModal, ConfirmationModalProps } from '.';

export default {
  title: 'Components/Confirmation Modal',
  component: ConfirmationModal,
} as Meta;

let isOpen = true;

const Template: Story<ConfirmationModalProps> = (args) => <ConfirmationModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen,
  title: 'Delete',
  description: 'Sure you want to delete?',
  type: 'danger',
  setIsOpen: () => (isOpen = false),
  submitLabel: 'Delete',
  cancelLabel: 'Cancel',
};
