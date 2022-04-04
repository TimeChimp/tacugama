import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const CircleEuroCurrency = ({ title = 'CircleEuroCurrency', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.667 14C.667 6.636 6.637.667 14 .667A13.333 13.333 0 0127.333 14c0 7.364-5.97 13.333-13.333 13.333C6.636 27.333.667 21.363.667 14zm15.746-1.173a.333.333 0 00-.28-.16h-6.24a4.347 4.347 0 014.04-3 4.28 4.28 0 012.667.893.667.667 0 00.88-.067l.707-.72a.613.613 0 00.2-.506.693.693 0 00-.254-.48 6.667 6.667 0 00-10.666 3.88h-.8a.667.667 0 00-.667.666v1.334c0 .368.298.666.667.666h.8a6.667 6.667 0 0010.733 3.88.693.693 0 00.253-.48.613.613 0 00-.2-.506l-.706-.72a.667.667 0 00-.88-.067 4.28 4.28 0 01-2.667.893 4.347 4.347 0 01-4.107-3h4.814c.376-.002.72-.212.893-.546l.813-1.64a.334.334 0 000-.32z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
