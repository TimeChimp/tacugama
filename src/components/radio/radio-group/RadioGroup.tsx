import React, { ReactElement } from 'react';
import {
  RadioGroup as BaseRadioGroup,
  ALIGN,
  RadioGroupProps as BaseRadioGroupProps,
  RadioGroupOverrides,
} from 'baseui/radio';
import { RadioProps } from '../radio-item';

interface RadioGroupProps extends BaseRadioGroupProps {
  value: string;
  align?: ALIGN[keyof ALIGN];
  children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
}

const radioGroupOverrides: RadioGroupOverrides = {
  RadioGroupRoot: {
    style: {
      width: '100%',
    },
  },
};

export const RadioGroup = ({ align = ALIGN.vertical, children, ...rest }: RadioGroupProps) => {
  return (
    <BaseRadioGroup overrides={radioGroupOverrides} align={align} {...rest}>
      {children}
    </BaseRadioGroup>
  );
};
