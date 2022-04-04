import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const ActionMenuHorizontal = ({
  title = 'ActionMenuHorizontal',
  size = defaultIconProps.size,
  color,
}: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.00008 0.666748C2.73646 0.666748 3.33341 1.2637 3.33341 2.00008C3.33341 2.73646 2.73646 3.33341 2.00008 3.33341C1.2637 3.33341 0.666748 2.73646 0.666748 2.00008C0.666748 1.2637 1.2637 0.666748 2.00008 0.666748ZM7.33341 2.00008C7.33341 1.2637 6.73646 0.666748 6.00008 0.666748C5.2637 0.666748 4.66675 1.2637 4.66675 2.00008C4.66675 2.73646 5.2637 3.33341 6.00008 3.33341C6.73646 3.33341 7.33341 2.73646 7.33341 2.00008ZM10.0001 0.666748C10.7365 0.666748 11.3334 1.2637 11.3334 2.00008C11.3334 2.73646 10.7365 3.33341 10.0001 3.33341C9.2637 3.33341 8.66675 2.73646 8.66675 2.00008C8.66675 1.2637 9.2637 0.666748 10.0001 0.666748Z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
