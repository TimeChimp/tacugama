import React from 'react';
import { FormControl as BaseFormControl, FormControlProps as BaseFormControlProps } from 'baseui/form-control';
import { useTheme } from '../../providers';

export interface FormControlProps extends BaseFormControlProps {}

export const FormControl = ({ ...rest }: FormControlProps) => {
  const {
    theme: {
      current: {
        typography: { LabelSmall },
      },
    },
  } = useTheme();

  return (
    <BaseFormControl
      {...rest}
      overrides={{
        Label: {
          style: {
            ...LabelSmall,
          },
        },
      }}
    />
  );
};
