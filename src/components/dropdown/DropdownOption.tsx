import { ParagraphSmall } from '../typography';
import { useTheme } from '../../providers';
import React, { forwardRef } from 'react';
import {
  StyledDropdownOption,
  StyledDropdownOptionIcon,
  StyledDropdownOptionIconEnd,
  StyledDropdownOptionLabel,
} from './StyledDropdownOption';

export interface DropdownItem {
  id?: string;
  label: string;
  icon?: JSX.Element;
  iconEnd?: JSX.Element;
  action?: () => void;
  color?: string;
}

export interface DropdownOptionProps {
  item: DropdownItem;
  onItemSelect: (item: DropdownItem) => void;
}

export const DropdownOption = forwardRef<any, DropdownOptionProps>(
  ({ item, onItemSelect }: DropdownOptionProps, ref) => {
    const { theme } = useTheme();

    return (
      <StyledDropdownOption ref={ref} onClick={() => onItemSelect(item)}>
        {item.icon && <StyledDropdownOptionIcon>{item.icon}</StyledDropdownOptionIcon>}
        <StyledDropdownOptionLabel>
          <ParagraphSmall color={item.color || theme.current.colors.contentPrimary}>{item.label}</ParagraphSmall>
          {item.iconEnd && <StyledDropdownOptionIconEnd>{item.iconEnd}</StyledDropdownOptionIconEnd>}
        </StyledDropdownOptionLabel>
      </StyledDropdownOption>
    );
  },
);
