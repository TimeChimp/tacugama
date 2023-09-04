import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormRow } from './';
import { Input } from '../input';
import { FormRowProps } from './types';
import { useForm } from 'react-hook-form';

export default {
  title: 'Components/Form Row',
  component: FormRow,
} as Meta;

interface FormInput {
  name: string;
}

const Template: Story<FormRowProps<FormInput, string>> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
  });
  return (
    <FormRow
      {...args}
      name="name"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          {...field}
          testId="name-input"
          size="compact"
          placeholder="Name"
          error={!!errors.name}
          autoComplete="off"
        />
      )}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'This is a label',
  caption: 'This is a caption',
  success: '',
};

const ErrorTemplate: Story<FormRowProps<FormInput, string>> = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
  });
  return (
    <FormRow
      {...args}
      name="name"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          {...field}
          testId="name-input"
          size="compact"
          placeholder="Name"
          error={!!errors.name}
          autoComplete="off"
        />
      )}
    />
  );
};

export const WithError = ErrorTemplate.bind({});
WithError.args = {
  label: 'This is a label',
  caption: 'This is a caption',
  error: 'This is an error caption',
  success: '',
};
