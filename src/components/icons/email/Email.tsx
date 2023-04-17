import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const EmailIcon = ({ title = 'Email', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3333 0.666687H1.66665C0.930267 0.666687 0.333313 1.26364 0.333313 2.00002V10C0.333313 10.7364 0.930267 11.3334 1.66665 11.3334H12.3333C13.0697 11.3334 13.6666 10.7364 13.6666 10V2.00002C13.6666 1.26364 13.0697 0.666687 12.3333 0.666687ZM12.3333 2.00002V3.93335L7.43331 7.36669C7.17273 7.54754 6.82723 7.54754 6.56665 7.36669L1.66665 3.93335V2.00002H12.3333ZM1.66665 5.33335V10H12.3333V5.33335L8.09998 8.29335C7.43934 8.75514 6.56061 8.75514 5.89998 8.29335L1.66665 5.33335Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
