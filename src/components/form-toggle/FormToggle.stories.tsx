import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormToggle } from './';
import { FormToggleProps, FormToggleSize } from './types';
import { Block } from 'baseui/block';
import { Input, FlexItem, SingleSelect } from '..';

export default {
  title: 'Components/Form Toggle',
  component: FormToggle,
} as Meta;

const additionalContent = (
  <FlexItem gap="8px">
    <Block flex={1}>
      <SingleSelect options={[]} />
    </Block>
    <Block flex={1}>
      <Input />
    </Block>
    of
    <Block flex={1}>
      <SingleSelect options={[]} />
    </Block>
  </FlexItem>
);

const Template: Story<FormToggleProps> = (args) => <FormToggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  isChecked: true,
  label: 'Text',
  caption: 'Subtext',
  disabled: false,
  additionalContent,
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: 'Text',
  caption: 'Use this option when the activity has an impact on the absence or leave hours.',
  disabled: false,
  items: [
    { label: 'View', isChecked: true },
    { label: 'Edit', isChecked: false },
  ],
  multi: true,
  size: FormToggleSize.large,
  additionalContent,
};
