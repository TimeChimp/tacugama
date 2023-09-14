import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TCFormRow } from '.';
import { TCFormRowProps } from './types';
import { Checkbox as CheckboxComponent, FormGroup, Input, Toggle as ToggleComponent } from '..';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/TC Form Row',
  component: TCFormRow,
} as Meta;

interface FormInput {
  isAwesome: boolean;
}

const ToggleTemplate: Story<TCFormRowProps<FormInput, string>> = (args) => {
  const { control } = useForm<FormInput>({
    mode: 'onSubmit',
  });
  return (
    <FormGroup title="This is a title" subtitle="This is subtitle">
      <TCFormRow
        {...args}
        name="isAwesome"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <ToggleComponent {...field} />}
      >
        <Input placeholder="Test input" />
      </TCFormRow>
      <TCFormRow
        {...args}
        name="isAwesome"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <ToggleComponent {...field} />}
      >
        <Input placeholder="Test input" />
      </TCFormRow>
    </FormGroup>
  );
};

const CheckboxTemplate: Story<TCFormRowProps<FormInput, string>> = (args) => {
  const { control } = useForm<FormInput>({
    mode: 'onSubmit',
  });
  return (
    <TCFormRow
      {...args}
      name="isAwesome"
      control={control}
      rules={{ required: true }}
      render={({ field }) => <CheckboxComponent {...field} />}
    />
  );
};

export const Toggle = ToggleTemplate.bind({});
Toggle.args = {
  label: 'Toggle label',
  caption: 'Caption',
};

export const Checkbox = CheckboxTemplate.bind({});
Checkbox.args = {
  label: 'Checkbox label',
  caption: 'Caption',
};
