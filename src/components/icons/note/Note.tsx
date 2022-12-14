import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const NoteIcon = ({ title = 'Note', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.33333 2H13.6667C13.8508 2 14 2.14924 14 2.33333V3C14 3.18409 13.8508 3.33333 13.6667 3.33333H2.33333C2.14924 3.33333 2 3.18409 2 3V2.33333C2 2.14924 2.14924 2 2.33333 2ZM2.6 6H13.4C13.7314 6 14 5.85076 14 5.66667V5C14 4.8159 13.7314 4.66667 13.4 4.66667H2.6C2.26863 4.66667 2 4.8159 2 5V5.66667C2 5.85076 2.26863 6 2.6 6ZM14 7.66667V8.33333C14 8.51743 13.8508 8.66667 13.6667 8.66667H2.33333C2.14924 8.66667 2 8.51743 2 8.33333V7.66667C2 7.48257 2.14924 7.33333 2.33333 7.33333H13.6667C13.8508 7.33333 14 7.48257 14 7.66667ZM8.48148 12.6667H2.18519C2.08291 12.6667 2 12.8159 2 13V13.6667C2 13.8508 2.08291 14 2.18519 14H8.48148C8.58376 14 8.66667 13.8508 8.66667 13.6667V13C8.66667 12.8159 8.58376 12.6667 8.48148 12.6667ZM13.4 11.3333H2.6C2.26863 11.3333 2 11.1841 2 11V10.3333C2 10.1492 2.26863 10 2.6 10H13.4C13.7314 10 14 10.1492 14 10.3333V11C14 11.1841 13.7314 11.3333 13.4 11.3333Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
