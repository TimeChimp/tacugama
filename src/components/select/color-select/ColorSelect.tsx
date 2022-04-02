import React from 'react';
import { Select as BaseSelect, SelectProps as BaseSelectProps, OnChangeParams } from '../Select';

import { ColorOption } from '../color-option';

export interface ColorOptionProps {
  name: string;
  color: string;
}

type ParamOptionValue = ReadonlyArray<ColorOptionProps>;
interface ParamOptionsProps extends OnChangeParams {
  value: ParamOptionValue;
  option?: ColorOptionProps;
}

export interface ColorSelectProps extends Omit<BaseSelectProps, 'options' | 'onChange' | 'value'> {
  colors: ColorOptionProps[];
  value?: ParamOptionValue;
  onChange?: (params: ParamOptionsProps) => unknown;
}

export const ColorSelect = ({ colors, ...rest }: ColorSelectProps) => {
  return (
    <BaseSelect
      {...rest}
      options={colors}
      labelKey="name"
      valueKey="color"
      getOptionLabel={ColorOption}
      getValueLabel={ColorOption}
      onChange={rest.onChange as (params: OnChangeParams) => unknown}
    />
  );
};
