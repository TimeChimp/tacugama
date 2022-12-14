import React, { forwardRef } from 'react';
import { SecondaryButton, SecondaryButtonProps, TransparentButton } from '../../button';
import { border, borderRadius, padding } from '../../../utils';
import { LabelSmall } from '../../typography';
import { CaretDownIcon, ClearLineIcon } from '../../icons';
import { useTheme } from '../../../providers';

const FILTER_BUTTON_TEST_ID = 'filter-button';

export interface FilterButtonProps extends SecondaryButtonProps {
  title: string;
  isActive?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
  arrows?: boolean;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ title, testId, onClear, hasValue = false, isActive = false, arrows, ...rest }: FilterButtonProps, ref) => {
    const {
      theme: {
        current: {
          colors: { primaryA },
        },
      },
    } = useTheme();

    return (
      <SecondaryButton
        ref={ref}
        testId={testId ?? FILTER_BUTTON_TEST_ID}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...border($theme.borders.border300),
                boxSizing: 'border-box',
                ...borderRadius($theme.borders.radius200),
                ...padding('9px'), // NOTE: Values does not exist in theme
                ':hover': {
                  backgroundColor: $theme.colors.primaryB,
                  boxShadow: $theme.lighting.shadow400,
                },
                ':active': {
                  backgroundColor: $theme.colors.primaryB,
                  boxShadow: $theme.lighting.shadow400,
                },
              };
            },
          },
        }}
        endEnhancer={
          <>
            {arrows && <CaretDownIcon />}
            {hasValue && onClear && (
              <TransparentButton onClick={onClear}>
                <ClearLineIcon color={primaryA} />
              </TransparentButton>
            )}
          </>
        }
        {...rest}
      >
        <LabelSmall
          overrides={{
            Block: {
              style: {
                fontWeight: isActive ? 600 : 400,
              },
            },
          }}
        >
          {title}
        </LabelSmall>
      </SecondaryButton>
    );
  },
);

export default FilterButton;
