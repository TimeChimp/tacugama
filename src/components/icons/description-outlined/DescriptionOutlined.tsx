import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const DescriptionOutlined = ({
  title = 'DescriptionOutlined',
  size = defaultIconProps.size,
  color,
}: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.333 0h11.334c.184 0 .333.15.333.333V1c0 .184-.15.333-.333.333H.333A.333.333 0 0 1 0 1V.333C0 .15.15 0 .333 0ZM.6 4h10.8c.331 0 .6-.15.6-.333V3c0-.184-.269-.333-.6-.333H.6c-.331 0-.6.149-.6.333v.667C0 3.85.269 4 .6 4ZM12 5.667v.666c0 .184-.15.334-.333.334H.333A.333.333 0 0 1 0 6.333v-.666c0-.184.15-.334.333-.334h11.334c.184 0 .333.15.333.334Zm-5.519 5H.185c-.102 0-.185.149-.185.333v.667c0 .184.083.333.185.333h6.296c.103 0 .186-.15.186-.333V11c0-.184-.083-.333-.186-.333ZM11.4 9.333H.6C.269 9.333 0 9.184 0 9v-.667C0 8.15.269 8 .6 8h10.8c.331 0 .6.15.6.333V9c0 .184-.269.333-.6.333Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
