import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';
import { FormControl } from './';
import { Input, Textarea } from '../../components';
import { FormControlProps } from './types';
import { MagnifyingGlass } from '@phosphor-icons/react';

export default {
  title: 'Components/Form Control',
  component: FormControl,
} as Meta;

const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <Input placeholder="Zero state with placeholder" />
  </FormControl>
);

export const Default = Template.bind({});
Default.args = {
  label: 'This is a label',
  caption: 'This is a caption',
  error: 'This is an error caption',
  success: '',
  labelEndEnhancer: <MagnifyingGlass />,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27708&t=SfPj0c4HUBPNZ3Yn-4',
  },
};

const TextAreaTemplate: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <Textarea placeholder="Zero state with placeholder" value="" />
  </FormControl>
);

export const TextareaFormControl = TextAreaTemplate.bind({});
TextareaFormControl.args = {
  label: 'This is a label',
  caption: 'This is a caption',
  error: 'This is an error caption',
  success: '',
  labelEndEnhancer: <MagnifyingGlass />,
};
TextareaFormControl.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27708&t=SfPj0c4HUBPNZ3Yn-4',
  },
};
