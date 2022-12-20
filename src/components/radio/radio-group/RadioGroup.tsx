import React from 'react';
import {
  RadioGroup as BaseRadioGroup,
  RadioGroupProps as BaseRadioGroupProps,
  RadioGroupOverrides,
  Align,
} from 'baseui/radio';

interface RadioGroupProps extends BaseRadioGroupProps {
  value: string;
  align?: Align;
}

const radioGroupOverrides: RadioGroupOverrides = {
  RadioGroupRoot: {
    style: {
      width: '100%',
    },
  },
};

export const RadioGroup = ({ align = 'vertical', children, ...rest }: RadioGroupProps) => {
  return (
    <BaseRadioGroup overrides={radioGroupOverrides} align={align} {...rest}>
      {children}
    </BaseRadioGroup>
  );
};
