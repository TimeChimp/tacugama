import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Position = ({ title = 'Position', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3332 2.66691H10.3332V1.33358C10.3332 0.597198 9.73622 0.000244141 8.99984 0.000244141H4.99984C4.26346 0.000244141 3.66651 0.597198 3.66651 1.33358V2.66691H1.66651C0.930131 2.66691 0.333178 3.26386 0.333178 4.00024V10.6669C0.333178 11.4033 0.930131 12.0002 1.66651 12.0002H12.3332C13.0696 12.0002 13.6665 11.4033 13.6665 10.6669V4.00024C13.6665 3.26386 13.0696 2.66691 12.3332 2.66691ZM8.33318 7.33358C8.33318 7.70177 8.0347 8.00025 7.66651 8.00025H6.33318C5.96499 8.00025 5.66651 7.70177 5.66651 7.33358V7.00025C5.66651 6.81615 5.81575 6.66691 5.99985 6.66691H7.99984C8.18394 6.66691 8.33318 6.81615 8.33318 7.00025V7.33358ZM4.99985 2.66691H8.99985V1.33358H4.99985V2.66691Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
