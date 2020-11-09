import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalHeader, ModalBody, ModalFooter, ModalProps } from './';
import { ModalButton, SecondaryModalButton } from 'components';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

let isOpen = true;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <ModalHeader>Hello world</ModalHeader>
    <ModalBody>
      Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas
      aliquet mauris ut tempus.
    </ModalBody>
    <ModalFooter>
      <SecondaryModalButton>Cancel</SecondaryModalButton>
      <ModalButton>Okay</ModalButton>
    </ModalFooter>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  onClose: () => (isOpen = false),
  closeable: true,
  isOpen,
  animate: true,
  autoFocus: true,
  size: 'default',
  role: 'dialog',
};
