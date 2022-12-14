import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const TodayIcon = ({ title = 'Today', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.333 7.33325H13.2863C12.9803 4.91979 11.0798 3.01931 8.66634 2.71325V1.66659C8.66634 1.48249 8.5171 1.33325 8.33301 1.33325H7.66634C7.48225 1.33325 7.33301 1.48249 7.33301 1.66659V2.71325C4.91955 3.01931 3.01906 4.91979 2.71301 7.33325H1.66634C1.48225 7.33325 1.33301 7.48249 1.33301 7.66659V8.33325C1.33301 8.51735 1.48225 8.66659 1.66634 8.66659H2.71301C3.01906 11.08 4.91955 12.9805 7.33301 13.2866V14.3333C7.33301 14.5173 7.48225 14.6666 7.66634 14.6666H8.33301C8.5171 14.6666 8.66634 14.5173 8.66634 14.3333V13.2866C11.0798 12.9805 12.9803 11.08 13.2863 8.66659H14.333C14.5171 8.66659 14.6663 8.51735 14.6663 8.33325V7.66659C14.6663 7.48249 14.5171 7.33325 14.333 7.33325ZM8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 9.06087 11.5786 10.0783 10.8284 10.8284C10.0783 11.5786 9.06087 12 8 12ZM6.66602 7.99984C6.66602 7.26346 7.26297 6.6665 7.99935 6.6665C8.73573 6.6665 9.33268 7.26346 9.33268 7.99984C9.33268 8.73622 8.73573 9.33317 7.99935 9.33317C7.26297 9.33317 6.66602 8.73622 6.66602 7.99984Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
