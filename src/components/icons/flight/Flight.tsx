import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const FlightIcon = ({ title = 'Flight', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.9666 3.01519L13.8139 3.43517C13.7056 3.73641 13.5325 4.01014 13.3066 4.23695L10.9504 6.59321L12.0685 12.173C12.0736 12.242 12.0736 12.3112 12.0685 12.3802C12.0696 12.6594 11.9574 12.9271 11.7576 13.122L11.6649 13.2147C11.6172 13.266 11.5494 13.2939 11.4794 13.2911C11.3881 13.2911 11.3034 13.2436 11.2558 13.1657L8.99226 8.54586L6.72872 10.4276L6.96871 13.2638C6.96676 13.4024 6.91216 13.535 6.81599 13.6347L6.52691 13.9238C6.467 13.9834 6.38201 14.0104 6.29869 13.9963C6.21537 13.9823 6.14395 13.9289 6.10693 13.8529L4.78699 11.213L2.14711 9.89307C2.07115 9.85605 2.01772 9.78463 2.00366 9.70131C1.98959 9.61799 2.0166 9.533 2.0762 9.47309L2.36528 9.18401C2.46502 9.08784 2.59763 9.03324 2.73617 9.03129L5.53423 9.26582L7.45415 7.00774L2.83435 4.72784C2.75639 4.68028 2.70885 4.59553 2.7089 4.50421C2.70607 4.43422 2.73396 4.36648 2.78526 4.31877L2.87798 4.22604C3.07595 4.0201 3.3505 3.90555 3.63613 3.9097C3.70513 3.9046 3.7744 3.9046 3.8434 3.9097L9.40679 5.04965L11.763 2.69339C11.9899 2.46753 12.2636 2.29436 12.5648 2.18613L12.9848 2.03341C13.1839 1.96035 13.4072 2.00928 13.5575 2.15886L13.8411 2.44249C13.9907 2.59277 14.0396 2.81613 13.9666 3.01519Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
