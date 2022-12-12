import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const SettingsIcon = ({ title = 'Settings', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4664 9.38267L13.9997 9.82355C14.2528 10.0292 14.3204 10.3879 14.1597 10.6719L13.3864 12.0079C13.2265 12.2681 12.9108 12.3864 12.6197 12.2951L11.9531 12.0547C11.5596 11.9073 11.1199 11.9544 10.7664 12.1816C10.6097 12.2901 10.4447 12.3861 10.2731 12.4688C9.89793 12.6616 9.63588 13.0208 9.56639 13.4374L9.45306 14.1054C9.40024 14.4321 9.11666 14.6708 8.78639 14.6665H7.25306C6.9228 14.6708 6.63921 14.4321 6.58639 14.1054L6.47306 13.4374C6.40358 13.0208 6.14153 12.6616 5.76639 12.4688C5.59473 12.3861 5.42978 12.2901 5.27306 12.1816C4.91953 11.9544 4.47982 11.9073 4.08639 12.0547L3.41973 12.2951C3.1169 12.4079 2.77698 12.2868 2.61306 12.0079L1.83973 10.6719C1.67901 10.3879 1.74667 10.0292 1.99973 9.82355L2.53306 9.38267C2.85643 9.11371 3.03431 8.70772 3.01306 8.28716V7.99992V7.71268C3.03431 7.29212 2.85643 6.88613 2.53306 6.61716L1.99973 6.17629C1.74667 5.97067 1.67901 5.6119 1.83973 5.32793L2.61306 3.99194C2.77575 3.71942 3.10743 3.59933 3.40639 3.7047L4.07306 3.94518C4.46649 4.09251 4.9062 4.04548 5.25973 3.81826C5.41645 3.70977 5.58139 3.61373 5.75306 3.53102C6.11796 3.33195 6.36939 2.97381 6.43306 2.56242L6.54639 1.89443C6.59921 1.56774 6.8828 1.32905 7.21306 1.33331H8.74639C9.07666 1.32905 9.36024 1.56774 9.41306 1.89443L9.52639 2.56242C9.59588 2.97907 9.85793 3.33825 10.2331 3.53102C10.4047 3.61373 10.5697 3.70977 10.7264 3.81826C11.0799 4.04548 11.5196 4.09251 11.9131 3.94518L12.5797 3.7047C12.8826 3.59196 13.2225 3.713 13.3864 3.99194L14.1597 5.32793C14.3204 5.6119 14.2528 5.97067 13.9997 6.17629L13.4664 6.61716C13.143 6.88613 12.9651 7.29212 12.9864 7.71268V7.99992V8.28716C12.9651 8.70772 13.143 9.11371 13.4664 9.38267ZM6 7.99984C6 9.10661 6.89543 10.0038 8 10.0038C8.53043 10.0038 9.03914 9.7927 9.41421 9.41688C9.78929 9.04106 10 8.53133 10 7.99984C10 6.89307 9.10457 5.99585 8 5.99585C6.89543 5.99585 6 6.89307 6 7.99984Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
