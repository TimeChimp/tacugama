import React from 'react';
import { Option as BaseOptionProps } from 'baseui/select';

import { StyledOption, StyledColorSwatch } from './ColorSelectStyles';

export interface ColorOptionProps extends Omit<BaseOptionProps, 'label' | 'id'> {
  name: string;
  color: string;
}

export const ColorOption = (args: {
  option?: BaseOptionProps;
  optionState?: {
    $selected?: boolean;
    $disabled?: boolean;
    $isHighlighted?: boolean;
  };
}) => {
  return (
    <StyledOption>
      <StyledColorSwatch $color={args.option?.color} />
      {args.option?.name}
    </StyledOption>
  );
};
