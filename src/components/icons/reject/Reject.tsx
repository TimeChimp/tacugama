import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Reject = ({ title = 'Reject', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();
  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00004 0.833252C3.31814 0.833252 0.333374 3.81802 0.333374 7.49992C0.333374 11.1818 3.31814 14.1666 7.00004 14.1666C10.6819 14.1666 13.6667 11.1818 13.6667 7.49992C13.6667 5.73181 12.9643 4.03612 11.7141 2.78587C10.4638 1.53563 8.76815 0.833252 7.00004 0.833252ZM7.00004 12.8333C4.05452 12.8333 1.66671 10.4454 1.66671 7.49992C1.66671 4.5544 4.05452 2.16659 7.00004 2.16659C9.94556 2.16659 12.3334 4.5544 12.3334 7.49992C12.3334 8.91441 11.7715 10.271 10.7713 11.2712C9.77108 12.2713 8.41453 12.8333 7.00004 12.8333ZM8.70671 5.43992L9.06004 5.79325C9.12449 5.85374 9.16105 5.93819 9.16105 6.02659C9.16105 6.11498 9.12449 6.19943 9.06004 6.25992L7.82671 7.49992L9.06004 8.73992C9.12449 8.80041 9.16105 8.88486 9.16105 8.97325C9.16105 9.06164 9.12449 9.1461 9.06004 9.20658L8.70671 9.55992C8.64622 9.62437 8.56176 9.66093 8.47337 9.66093C8.38498 9.66093 8.30053 9.62437 8.24004 9.55992L7.00004 8.32659L5.76004 9.55992C5.69955 9.62437 5.6151 9.66093 5.52671 9.66093C5.43832 9.66093 5.35386 9.62437 5.29337 9.55992L4.94004 9.20658C4.87559 9.1461 4.83903 9.06164 4.83903 8.97325C4.83903 8.88486 4.87559 8.80041 4.94004 8.73992L6.17337 7.49992L4.94004 6.25992C4.87559 6.19943 4.83903 6.11498 4.83903 6.02659C4.83903 5.93819 4.87559 5.85374 4.94004 5.79325L5.29337 5.43992C5.35386 5.37547 5.43832 5.33891 5.52671 5.33891C5.6151 5.33891 5.69955 5.37547 5.76004 5.43992L7.00004 6.67325L8.24004 5.43992C8.30053 5.37547 8.38498 5.33891 8.47337 5.33891C8.56176 5.33891 8.64622 5.37547 8.70671 5.43992Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
