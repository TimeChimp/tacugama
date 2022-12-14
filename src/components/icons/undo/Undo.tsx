import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const UndoIcon = ({ title = 'Undo', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.6671 10.3067C14.6746 10.3997 14.6428 10.4915 14.5795 10.5599C14.5161 10.6283 14.427 10.667 14.3338 10.6667H13.3338C13.1633 10.6673 13.0211 10.5367 13.0071 10.3667C12.8138 8.48673 10.8005 7.00006 8.34048 7.00006C7.0782 6.97889 5.85032 7.41185 4.88048 8.22006L6.56048 9.90006C6.62559 9.96278 6.66179 10.0497 6.66048 10.1401V10.3334C6.66048 10.5175 6.51124 10.6667 6.32715 10.6667H1.66048C1.47639 10.6667 1.32715 10.5175 1.32715 10.3334V5.66673C1.32713 5.57716 1.36316 5.49135 1.42712 5.42864C1.49109 5.36593 1.57759 5.3316 1.66715 5.3334H1.86048C1.95087 5.33208 2.03776 5.36829 2.10048 5.4334L3.71381 7.04673C5.00312 5.91674 6.6663 5.30612 8.38048 5.3334C11.7005 5.3334 14.4471 7.52673 14.6671 10.3067Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
