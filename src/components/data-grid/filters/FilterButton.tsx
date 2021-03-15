import React, { forwardRef } from 'react';
import { SecondaryButton, SecondaryButtonProps } from 'components';
import { border, borderRadius, padding } from '../../../utils';
import { LabelSmall } from 'components/typography';

export interface FilterButtonProps extends SecondaryButtonProps {
  title: string;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ title, ...rest }: FilterButtonProps, ref) => (
    <SecondaryButton
      ref={ref}
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
  ),
);

export default FilterButton;
