import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select } from './multi-select';
import { SingleSelect as SingleSelectComponent, SingleSelectProps } from './single-select';
import { OPTIONS } from './test-data';
import { SelectProps } from './multi-select/types';

export default {
  title: 'Components/Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;
Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

const SingleSelectTemplate: Story<SingleSelectProps<string, 'id', 'name'>> = (args) => (
  <SingleSelectComponent {...args} />
);

export const Single = SingleSelectTemplate.bind({});
Single.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  creatable: true,
  clearable: true,
};

export const Multi = Template.bind({});
Multi.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  value: [OPTIONS[0], OPTIONS[1]],
};
Multi.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};
