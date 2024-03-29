import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FormGroup, FormModalGroup } from './';
import { Input } from '../input';
import { FormRow } from '../form-row';
import { FormGroupProps } from './types';
import { useForm } from 'react-hook-form';
import { TCFormRow } from '../tc-form-row';
import { Toggle } from '../toggle';
import { Checkbox } from '../checkbox';

export default {
  title: 'Components/Form Group',
  component: FormGroup,
} as Meta;

interface FormInput {
  name: string;
}

const Template: Story<FormGroupProps> = ({ title, subtitle }) => {
  const {
    control,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
  });

  return (
    <>
      <FormGroup title={title} subtitle={subtitle}>
        <FormRow
          label="This is a label"
          toolTip="This is a tooltip"
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} placeholder="Name" error={!!errors.name} autoComplete="off" />}
        />
        <FormRow
          label="This is a label"
          caption="This is a caption"
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} placeholder="Name" error={!!errors.name} autoComplete="off" />}
        />
        <FormRow
          label="This is a label"
          caption="This is a caption"
          error="This is an error caption"
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <Input {...field} placeholder="Name" error autoComplete="off" />}
        />
        <TCFormRow
          control={control}
          name="name"
          label="This is a label"
          rules={{ required: true }}
          render={({ field }) => <Toggle {...field} />}
        />

        <TCFormRow
          control={control}
          name="name"
          label="This is a label"
          caption="This is a caption"
          rules={{ required: true }}
          render={({ field }) => <Toggle {...field} />}
        />

        <TCFormRow
          control={control}
          name="name"
          label="This is a label"
          rules={{ required: true }}
          render={({ field }) => <Checkbox {...field} />}
        >
          <Input placeholder="Test input" />
        </TCFormRow>
      </FormGroup>

      <FormGroup title={title} subtitle={subtitle}></FormGroup>
      <FormGroup>
        <FormRow
          label="This is a full width form group"
          name="name"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Name" autoComplete="off" />}
        />
      </FormGroup>
    </>
  );
};

const ModalTemplate: Story<FormGroupProps> = () => {
  const {
    control,
    formState: { errors },
  } = useForm<FormInput>({
    mode: 'onSubmit',
  });

  return (
    <>
      <FormModalGroup>
        <FormRow
          label="This is a label"
          toolTip="This is a tooltip"
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
        <FormRow
          label="This is a label"
          caption="This is a caption"
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
      </FormModalGroup>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'This is a title',
  subtitle: 'This is a subtitle',
};

export const ModalDefault = ModalTemplate.bind({});
ModalDefault.args = {};
