import React from 'react';
import { SecondaryButton, SecondaryButtonProps } from 'components';
import { border, borderRadius, padding } from '../../utils';
import { LabelSmall } from 'components/typography';

export interface FilterButtonProps extends SecondaryButtonProps {
  title: string;
}

export const FilterButton = ({ title, ...rest }: FilterButtonProps) => (
  <SecondaryButton
    overrides={{
      BaseButton: {
        style: ({ $theme }) => {
          return {
            ...border($theme.borders.border300),
            boxSizing: 'border-box',
            ...borderRadius($theme.borders.radius100),
            ...padding('9px'), // NOTE: Values does not exist in theme
          };
        },
      },
    }}
    {...rest}
  >
    <LabelSmall
      overrides={{
        Block: {
          style: {
            fontWeight: 400,
          },
        },
      }}
    >
      {title}
    </LabelSmall>
  </SecondaryButton>
);

export default FilterButton;
