import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../../button';
import { LabelSmall } from '../../typography';
import { CaretDownIcon } from '../../icons/caret-down';
import { ClearLineIcon } from '../../icons/clear-line';
import { useTheme } from '../../../providers';
import { KIND } from 'baseui/button';

const FILTER_BUTTON_TEST_ID = 'filter-button';

export interface FilterButtonProps extends ButtonProps {
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
      <Button
        kind={KIND.secondary}
        ref={ref}
        testId={testId ?? FILTER_BUTTON_TEST_ID}
        endEnhancer={
          <>
            {arrows && <CaretDownIcon />}
            {hasValue && onClear && (
              <Button kind={KIND.minimal} isTransparent onClick={onClear}>
                <ClearLineIcon color={primaryA} />
              </Button>
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
      </Button>
    );
  },
);

export default FilterButton;
