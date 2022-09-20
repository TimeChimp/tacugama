import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const QuestionMark = ({ title = 'QuestionMark', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 .667a8.333 8.333 0 1 0 0 16.666A8.333 8.333 0 0 0 9 .667Zm.833 12.916c0 .23-.186.417-.416.417h-.834a.417.417 0 0 1-.416-.417v-.833c0-.23.186-.417.416-.417h.834c.23 0 .416.187.416.417v.833Zm.734-4.341a2.408 2.408 0 0 0 1.666-2.275V6.5a2.4 2.4 0 0 0-2.4-2.4H8.167a2.4 2.4 0 0 0-2.4 2.4v.417c0 .23.186.416.416.416h.634c.23 0 .416-.186.416-.416V6.5c0-.516.418-.933.934-.933h1.666a.933.933 0 0 1 .967.933v.467c0 .402-.254.76-.633.891l-.792.259c-.64.211-1.073.809-1.075 1.483v.65c0 .23.187.417.417.417h.633c.23 0 .417-.187.417-.417V9.6c0-.044.026-.083.066-.1l.734-.258Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
