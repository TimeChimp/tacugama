import React, { forwardRef } from 'react';
import { SecondaryButton, SecondaryButtonProps } from '../../button';
import { border, borderRadius, padding } from '../../../utils';
import { LabelSmall } from '../../typography';

const FILTER_BUTTON_TEST_ID = 'filter-button';

export interface FilterButtonProps extends SecondaryButtonProps {
  title: string;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ title, testId, ...rest }: FilterButtonProps, ref) => (
    <SecondaryButton
      ref={ref}
      testId={testId ?? FILTER_BUTTON_TEST_ID}
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
