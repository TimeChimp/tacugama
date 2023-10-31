import { ParagraphSmall } from '../../typography';
import { useTheme } from '../../../providers';
import React, { forwardRef } from 'react';
import { Checkbox } from '../../checkbox';
import {
  StyledDropdownOption,
  StyledDropdownOptionIcon,
  StyledDropdownOptionIconEnd,
  StyledDropdownOptionLabel,
} from '../styles';
import { DropdownOptionProps } from '../types';

export const DropdownOption = forwardRef<any, DropdownOptionProps>(
  ({ item, onItemSelect }: DropdownOptionProps, ref) => {
    const { theme } = useTheme();

    return (
      <StyledDropdownOption ref={ref} onClick={() => onItemSelect(item)}>
        {item.checkbox && <Checkbox testId="dropdown-option-checkbox" checked={item.isChecked} />}
        {item.icon && <StyledDropdownOptionIcon>{item.icon}</StyledDropdownOptionIcon>}
        <StyledDropdownOptionLabel>
          <ParagraphSmall
            title={item.label}
            color={item.color || theme.current.colors.contentPrimary}
            overrides={{
              Block: {
                style: {
                  fontWeight: item.isBold ? 600 : 400,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                },
              },
            }}
          >
            {item.label}
          </ParagraphSmall>
          {item.iconEnd && <StyledDropdownOptionIconEnd>{item.iconEnd}</StyledDropdownOptionIconEnd>}
        </StyledDropdownOptionLabel>
      </StyledDropdownOption>
    );
  },
);
