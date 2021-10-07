import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Communication = ({ title = 'Communication', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7173 0.598458L11.8904 0.771716C11.9862 0.859179 12.0226 0.994417 11.9836 1.11823L7.96244 12.2801C7.91479 12.412 7.78969 12.4999 7.64954 12.5H7.54302C7.41228 12.5 7.29317 12.4248 7.23677 12.3068L4.97988 7.51548L0.193125 5.25645C0.0751759 5.2 8.52627e-05 5.08078 5.74003e-05 4.94992V4.8433C-0.0117324 4.69336 0.0782862 4.55411 0.219755 4.50344L11.3711 0.505164C11.4085 0.498279 11.4469 0.498279 11.4843 0.505164C11.5711 0.504642 11.6547 0.538122 11.7173 0.598458ZM6.65757 7.91531L7.47644 9.68788L10.0862 2.40435L2.80953 5.01656L4.58043 5.8362C5.07317 6.092 5.67276 6.01499 6.08502 5.64295L7.21014 4.6034C7.33873 4.4807 7.54092 4.4807 7.66951 4.6034L7.9225 4.85662C8.04508 4.98534 8.04508 5.18772 7.9225 5.31643L6.88393 6.44261C6.51576 6.8415 6.42622 7.42409 6.65757 7.91531Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
