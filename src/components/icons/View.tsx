import { useTheme } from '../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const View = ({ title = 'View', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.666667 0.000244141H15.3333C15.7015 0.000244141 16 0.298721 16 0.666911V10.0002C16 10.3684 15.7015 10.6669 15.3333 10.6669H13.3333L12 9.33358H14.6667V1.33358H1.33333V9.33358H4L2.66667 10.6669H0.666667C0.298477 10.6669 0 10.3684 0 10.0002V0.666911C0 0.298721 0.298477 0.000244141 0.666667 0.000244141ZM12.18 11.9002L12.32 11.7669C12.4479 11.635 12.4479 11.4255 12.32 11.2936L8.5 7.48024C8.40632 7.38645 8.27923 7.33369 8.14667 7.33358H7.85333C7.72077 7.33369 7.59368 7.38645 7.5 7.48024L3.68 11.2936C3.6169 11.3562 3.5814 11.4414 3.5814 11.5302C3.5814 11.6191 3.6169 11.7043 3.68 11.7669L3.82 11.9002C3.88019 11.965 3.96493 12.0013 4.05333 12.0002H11.9467C12.0351 12.0013 12.1198 11.965 12.18 11.9002Z" 
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
