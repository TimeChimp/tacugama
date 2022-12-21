import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const WarningIcon = ({ title = 'Warning', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2697 13.0866L8.54143 1.57992C8.45022 1.42739 8.28574 1.33379 8.10799 1.33325H7.90795C7.7302 1.33379 7.56572 1.42739 7.47451 1.57992L0.732915 13.0866C0.64632 13.2444 0.64632 13.4355 0.732915 13.5933L0.82627 13.7466C0.912685 13.9048 1.07945 14.0022 1.25971 13.9999H14.7429C14.9232 14.0022 15.0899 13.9048 15.1763 13.7466L15.2697 13.5933C15.3563 13.4355 15.3563 13.2444 15.2697 13.0866ZM8.66861 11C8.66861 11.1841 8.51934 11.3333 8.3352 11.3333H7.66837C7.48423 11.3333 7.33496 11.1841 7.33496 11V10.3333C7.33496 10.1492 7.48423 10 7.66837 10H8.3352C8.51934 10 8.66861 10.1492 8.66861 10.3333V11ZM8.35472 8.66658C8.43951 8.6672 8.51125 8.60408 8.52142 8.51992L8.78815 6.37325C8.79965 6.27815 8.76967 6.1827 8.70586 6.11124C8.64204 6.03978 8.55056 5.99923 8.45474 5.99992H7.54786C7.45204 5.99923 7.36056 6.03978 7.29675 6.11124C7.23293 6.1827 7.20295 6.27815 7.21445 6.37325L7.48118 8.51992C7.49135 8.60408 7.56309 8.6672 7.64788 8.66658H8.35472Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
