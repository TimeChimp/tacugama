import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MultiSelect } from './multi-select';
import { SingleSelect as SingleSelectComponent, SingleSelectProps } from './single-select';
import { OPTIONS } from './test-data';
import { MultiSelectProps } from './multi-select/types';

export default {
  title: 'Components/Select',
} as Meta;

const promiseOptions = (inputValue: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(() => {
        return OPTIONS.filter((i) => i.name.toLowerCase().includes(inputValue.toLowerCase()));
      });
    }, 1000);
  });

const Template: Story<MultiSelectProps<string, 'id', 'name'>> = (args) => <MultiSelect {...args} />;
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
  inputId: 'single-select',
};

export const SingleAsync = SingleSelectTemplate.bind({});
SingleAsync.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  clearable: true,
  cacheOptions: true,
  loadOptions: promiseOptions,
};

const midIndexOptions = Math.ceil(OPTIONS.length / 2);
const firstGroupOptions = OPTIONS.filter((_, index) => index < midIndexOptions);
const secondGroupOptions = OPTIONS.filter((_, index) => index >= midIndexOptions);

export const GroupSingle = SingleSelectTemplate.bind({});
GroupSingle.args = {
  isGrouped: true,
  options: [
    { label: 'Group 1', options: firstGroupOptions },
    { label: 'Group 2', options: secondGroupOptions },
  ],
  placeholder: 'Placeholder',
  creatable: true,
  clearable: true,
};

export const Multi = Template.bind({});
Multi.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  value: [OPTIONS[0], OPTIONS[1]],
  creatable: true,
  clearable: true,
  inputId: 'multi-select',
};
Multi.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

export const GroupMulti = Template.bind({});
GroupMulti.args = {
  isGrouped: true,
  options: [
    { label: 'Group 1', options: firstGroupOptions },
    { label: 'Group 2', options: secondGroupOptions },
  ],
  placeholder: 'Placeholder',
  creatable: true,
  clearable: true,
};
