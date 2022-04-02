import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const CircleWallet = ({ title = 'CircleWallet', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.333 5.333H4a1.333 1.333 0 110-2.666h17.333A2.667 2.667 0 0018.667 0H4a4 4 0 00-4 4v17.333A2.667 2.667 0 002.667 24h18.666A2.667 2.667 0 0024 21.333V8a2.667 2.667 0 00-2.667-2.667zm0 13.334H12a1.333 1.333 0 01-1.333-1.334V12c0-.736.597-1.333 1.333-1.333h9.333v8zm-6-2.667H14a.667.667 0 01-.667-.667V14c0-.368.299-.667.667-.667h1.333c.368 0 .667.299.667.667v1.333a.667.667 0 01-.667.667z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
