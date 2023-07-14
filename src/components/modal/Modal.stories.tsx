import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, ModalHeader, ModalBody, ModalFooter, ModalProps, ModalSize } from './';
import { Button, MultiSelect, SingleSelect } from '../';
import { ButtonKind } from '../../models';

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
      aliquet mauris ut tempus. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
      facilisis nisl. Maecenas aliquet mauris ut tempus. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
      ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus. Proin ut dui sed metus pharetra hend
      rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus. Proin ut dui
      sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut
      tempus. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.
      Maecenas aliquet mauris ut tempus. Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus
      ex, non facilisis nisl. Maecenas aliquet mauris ut tempus. Proin ut dui sed metus pharetra hend rerit vel non mi.
      Nulla ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
      <SingleSelect
        options={[
          { id: '1', name: 'test' },
          { id: '2', name: 'test 2' },
        ]}
        creatable
      />
    </ModalBody>
    <ModalFooter>
      <Button kind={ButtonKind.secondary}>Cancel</Button>
      <Button>Okay</Button>
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
  size: ModalSize.DEFAULT,
  role: 'dialog',
};
