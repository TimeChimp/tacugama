import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';
import { useTheme } from '../../../providers';

export const FilesLabeled = ({ title = 'FilesLabeled', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.88659 0.166672H8.99992C9.7363 0.166672 10.3333 0.763626 10.3333 1.50001V10.8333C10.3333 11.5697 9.7363 12.1667 8.99992 12.1667H1.66659C0.930206 12.1667 0.333252 11.5697 0.333252 10.8333V4.72001C0.332971 4.36464 0.47456 4.02387 0.726586 3.77334L3.93992 0.560006C4.19045 0.30798 4.53122 0.166391 4.88659 0.166672ZM4.99992 1.38001L1.54659 4.83334H4.33325C4.70144 4.83334 4.99992 4.53486 4.99992 4.16667V1.38001ZM8.33325 8.50001C8.33325 8.6841 8.18401 8.83334 7.99992 8.83334H2.66659C2.48249 8.83334 2.33325 8.6841 2.33325 8.50001V7.83334C2.33325 7.64924 2.48249 7.50001 2.66659 7.50001H7.99992C8.18401 7.50001 8.33325 7.64924 8.33325 7.83334V8.50001ZM11.6666 12.1667V2.83334C12.403 2.83334 12.9999 3.43029 12.9999 4.16667V12.1667C12.9999 13.6394 11.806 14.8333 10.3333 14.8333H4.33325C3.59687 14.8333 2.99992 14.2364 2.99992 13.5H10.3333C11.0696 13.5 11.6666 12.9031 11.6666 12.1667Z"
          fill={color || theme.current.colors.colorPrimary}
        />
      </svg>
    </Icon>
  );
};
