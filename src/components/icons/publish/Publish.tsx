import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const PublishIcon = ({ title = 'Publish', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.01461 6.89689C3.91777 6.89834 3.82468 6.85841 3.75748 6.78661L3.61464 6.63958C3.54703 6.57056 3.509 6.4766 3.509 6.37859C3.509 6.28058 3.54703 6.18662 3.61464 6.1176L7.75008 1.86091C7.81489 1.78983 7.90537 1.74951 8.00006 1.74951C8.09476 1.74951 8.18524 1.78983 8.25005 1.86091L12.3855 6.1176C12.4531 6.18662 12.4911 6.28058 12.4911 6.37859C12.4911 6.4766 12.4531 6.57056 12.3855 6.63958L12.2426 6.78661C12.1755 6.85841 12.0824 6.89834 11.9855 6.89689H10.1428V10.9404C10.1428 11.1434 9.98289 11.308 9.78566 11.308H6.21447C6.01723 11.308 5.85735 11.1434 5.85735 10.9404V6.89689H4.01461ZM12.9993 13.8812V13.146C12.9993 12.943 12.8395 12.7784 12.6422 12.7784H3.35712C3.15989 12.7784 3 12.943 3 13.146V13.8812C3 14.0842 3.15989 14.2487 3.35712 14.2487H12.6422C12.8395 14.2487 12.9993 14.0842 12.9993 13.8812Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
