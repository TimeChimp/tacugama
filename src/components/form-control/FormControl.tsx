import React from 'react';
import { FormControl as BaseFormControl, FormControlProps as BaseFormControlProps } from 'baseui/form-control';
import { useTheme } from '../../providers';
import { margin } from '../../utils';

export interface FormControlProps extends BaseFormControlProps {}

export const FormControl = ({ overrides, ...rest }: FormControlProps) => {
  const {
    theme: {
      current: {
        typography: { LabelSmall },
        sizing: { scale100 },
      },
    },
  } = useTheme();

  return (
    <BaseFormControl
      {...rest}
      overrides={{
        ...overrides,
        Label: {
          style: {
            ...LabelSmall,
            ...margin('0', '0', scale100, '0'),
          },
        },
      }}
    />
  );
};
