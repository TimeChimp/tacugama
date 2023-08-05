import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MultiPagesModal, MultiPagesModalProps } from '.';
import { ParagraphSmall } from '../typography';

export default {
  title: 'Components/Multi Pages Modal',
  component: MultiPagesModal,
} as Meta;

let isOpen = true;

const Template: Story<MultiPagesModalProps> = (args) => <MultiPagesModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  submitText: 'Send',
  pages: [
    {
      component: <ParagraphSmall>First Page</ParagraphSmall>,
    },

    {
      component: <ParagraphSmall>Second Page</ParagraphSmall>,
    },
  ],
  isOpen: isOpen,
  onClose: () => (isOpen = false),
  onSubmit: () => console.log('Sended'),
  cancelText: 'Cancel',
  loading: false,
  resetOnClose: true,
  title: 'Multi Pages Modal',
  previousText: 'Previous',
  nextText: 'Next',
};
