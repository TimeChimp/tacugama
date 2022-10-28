import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const ExclamationMark = ({ title = 'ExclamationMark', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.99984 1.66667C5.39746 1.66667 1.6665 5.39763 1.6665 10C1.6665 14.6024 5.39746 18.3333 9.99984 18.3333C14.6022 18.3333 18.3332 14.6024 18.3332 10C18.3332 7.78986 17.4552 5.67025 15.8924 4.10744C14.3296 2.54464 12.21 1.66667 9.99984 1.66667ZM10.8332 12.9167C10.8332 13.1468 10.6466 13.3333 10.4165 13.3333H9.58317C9.35305 13.3333 9.1665 13.1468 9.1665 12.9167V12.0833C9.1665 11.8532 9.35305 11.6667 9.58317 11.6667H10.4165C10.6466 11.6667 10.8332 11.8532 10.8332 12.0833V12.9167ZM10.4415 10C10.5475 10.0008 10.6371 9.92187 10.6498 9.81667L10.9832 7.13334C10.9975 7.01446 10.9601 6.89514 10.8803 6.80582C10.8006 6.7165 10.6862 6.6658 10.5665 6.66667H9.43317C9.31343 6.6658 9.1991 6.7165 9.11935 6.80582C9.0396 6.89514 9.00213 7.01446 9.0165 7.13334L9.34984 9.81667C9.36255 9.92187 9.45221 10.0008 9.55817 10H10.4415Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
