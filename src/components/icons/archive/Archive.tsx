import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon';

export const Archive = ({ title = 'Archive', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6667 0H1.33333C0.596954 0 0 0.596954 0 1.33333V10.6667C0 11.403 0.596954 12 1.33333 12H10.6667C11.403 12 12 11.403 12 10.6667V1.33333C12 0.596954 11.403 0 10.6667 0ZM8.59333 7.54667L6.23333 9.9C6.17284 9.96445 6.08839 10.001 6 10.001C5.91161 10.001 5.82716 9.96445 5.76667 9.9L3.40667 7.54667C3.27881 7.41479 3.27881 7.20521 3.40667 7.07333L3.54667 6.93333C3.60929 6.87297 3.69302 6.83948 3.78 6.84H4.66667V4.33333C4.66667 4.14924 4.81591 4 5 4H7C7.18409 4 7.33333 4.14924 7.33333 4.33333V6.84H8.22C8.30698 6.83948 8.39071 6.87297 8.45333 6.93333L8.59333 7.07333C8.72119 7.20521 8.72119 7.41479 8.59333 7.54667ZM1.33333 2.66667H10.6667V1.33333H1.33333V2.66667Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
