import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const DragIcon = ({ title = 'Drag', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.00033 5.33341C6.73671 5.33341 7.33366 4.73646 7.33366 4.00008C7.33366 3.2637 6.73671 2.66675 6.00033 2.66675C5.26395 2.66675 4.66699 3.2637 4.66699 4.00008C4.66699 4.73646 5.26395 5.33341 6.00033 5.33341ZM4.66699 8.00008C4.66699 7.2637 5.26395 6.66675 6.00033 6.66675C6.73671 6.66675 7.33366 7.2637 7.33366 8.00008C7.33366 8.73646 6.73671 9.33341 6.00033 9.33341C5.26395 9.33341 4.66699 8.73646 4.66699 8.00008ZM6.00033 10.6667C5.26395 10.6667 4.66699 11.2637 4.66699 12.0001C4.66699 12.7365 5.26395 13.3334 6.00033 13.3334C6.73671 13.3334 7.33366 12.7365 7.33366 12.0001C7.33366 11.2637 6.73671 10.6667 6.00033 10.6667ZM11.3337 4.00008C11.3337 4.73646 10.7367 5.33341 10.0003 5.33341C9.26395 5.33341 8.66699 4.73646 8.66699 4.00008C8.66699 3.2637 9.26395 2.66675 10.0003 2.66675C10.7367 2.66675 11.3337 3.2637 11.3337 4.00008ZM10.0003 6.66675C9.26395 6.66675 8.66699 7.2637 8.66699 8.00008C8.66699 8.73646 9.26395 9.33341 10.0003 9.33341C10.7367 9.33341 11.3337 8.73646 11.3337 8.00008C11.3337 7.2637 10.7367 6.66675 10.0003 6.66675ZM8.66699 12.0001C8.66699 11.2637 9.26395 10.6667 10.0003 10.6667C10.7367 10.6667 11.3337 11.2637 11.3337 12.0001C11.3337 12.7365 10.7367 13.3334 10.0003 13.3334C9.26395 13.3334 8.66699 12.7365 8.66699 12.0001Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
